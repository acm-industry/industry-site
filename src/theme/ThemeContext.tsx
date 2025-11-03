'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  getThemeTokens,
  themeIds,
  themes,
  type ThemeId,
  type ThemeTokens,
} from './tokens'

const THEME_STORAGE_KEY = 'site-theme-preference'

type ThemeContextValue = {
  theme: ThemeId
  setTheme: (theme: ThemeId) => void
  toggleTheme: () => void
  tokens: ThemeTokens
  availableThemes: ThemeTokens[]
  ready: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: ThemeId
}

function normaliseThemeId(value: unknown, fallback: ThemeId): ThemeId {
  if (typeof value === 'string' && (value === 'acm' || value === 'gse')) {
    return value
  }
  return fallback
}

export function ThemeProvider({ children, defaultTheme = 'acm' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (stored) {
        setThemeState((prev) => normaliseThemeId(stored, prev))
      }
    } catch {
      /* ignore storage issues */
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return

    const body = document.body
    themeIds.forEach((id) => body.classList.remove(`theme-${id}`))
    body.classList.add(`theme-${theme}`)
    body.dataset.theme = theme
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* storage might be unavailable */
    }
  }, [theme, ready])

  const setTheme = useCallback((next: ThemeId) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'acm' ? 'gse' : 'acm'))
  }, [])

  const tokens = useMemo(() => getThemeTokens(theme), [theme])
  const availableThemes = useMemo(
    () => themeIds.map((id) => themes[id]),
    []
  )

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      tokens,
      availableThemes,
      ready,
    }),
    [theme, setTheme, toggleTheme, tokens, availableThemes, ready]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function useThemeId(): ThemeId {
  return useTheme().theme
}

export function useThemeTokens(): ThemeTokens {
  return useTheme().tokens
}

export { ThemeContext, type ThemeContextValue }
