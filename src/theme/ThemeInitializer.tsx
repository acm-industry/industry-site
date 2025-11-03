'use client'

import { useEffect } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { useTheme } from './ThemeContext'

export default function ThemeInitializer() {
  const { theme, setTheme } = useTheme()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    const themeParam = searchParams.get('theme')
    if (themeParam) {
      const newTheme = themeParam.toLowerCase()
      if (newTheme === 'acm' || newTheme === 'gse') {
        setTheme(newTheme)
      }

      const cleanUrl = pathname
      window.history.replaceState({}, '', cleanUrl)
    }
  }, [searchParams, pathname, setTheme])

  useEffect(() => {
    const themeMeta = {
      acm: {
        title: 'ACM Industry | UCSB',
        color: '#FECB2E',
        icon: '/club-logos/industry-icon.png',
      },
      gse: {
        title: 'Gaucho Software Engineers | UCSB',
        color: '#0094FF',
        icon: '/club-logos/gse/gse-primary.png',
      },
    }

    const meta = themeMeta[theme]
    document.title = meta.title

    // Clear all old favicons (Next.js may inject multiple)
    const oldIcons = document.querySelectorAll("link[rel*='icon']")
    oldIcons.forEach((el) => el.parentNode?.removeChild(el))

    // Create a new <link rel="icon"> element
    const iconLink = document.createElement('link')
    iconLink.rel = 'icon'
    iconLink.type = 'image/png'
    iconLink.href = `${meta.icon}?v=${Date.now()}` // Cache-busting
    document.head.appendChild(iconLink)

    // Update theme color
    let themeColor = document.querySelector("meta[name='theme-color']")
    if (!themeColor) {
      themeColor = document.createElement('meta')
      themeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(themeColor)
    }
    themeColor.setAttribute('content', meta.color)
  }, [theme])

  return null
}