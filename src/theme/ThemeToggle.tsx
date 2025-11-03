'use client'

import clsx from 'clsx'
import Image from 'next/image'
import type { ButtonHTMLAttributes } from 'react'

import { useTheme } from './ThemeContext'
import type { ThemeId } from './tokens'

type ThemeToggleVariant = 'segmented' | 'switch'
type ThemeToggleSize = 'sm' | 'md'

type ThemeToggleProps = {
  variant?: ThemeToggleVariant
  size?: ThemeToggleSize
  className?: string
  hideLabels?: boolean
  ariaLabel?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

const ICON_SIZE = {
  sm: 20,
  md: 24,
}

export function ThemeToggle({
  variant = 'segmented',
  size = 'md',
  className,
  hideLabels = false,
  ariaLabel,
  ...buttonProps
}: ThemeToggleProps) {
  const { theme, setTheme, toggleTheme, availableThemes, ready, tokens } = useTheme()

  if (variant === 'switch') {
    const iconAsset = tokens.logos.toggleIcon
    return (
      <button
        type="button"
        aria-label={ariaLabel ?? `Switch to ${theme === 'acm' ? 'GSE theme' : 'ACM theme'}`}
        className={clsx(
          'inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-[var(--color-background)] disabled:opacity-60',
          size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm',
          className
        )}
        onClick={toggleTheme}
        disabled={!ready}
        {...buttonProps}
      >
        <Image
          src={iconAsset.src}
          alt={iconAsset.alt}
          width={ICON_SIZE[size]}
          height={ICON_SIZE[size]}
          unoptimized
          className="rounded-full"
        />
        {!hideLabels && <span>{theme === 'acm' ? 'ACM' : 'GSE'}</span>}
      </button>
    )
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel ?? 'Theme selector'}
      className={clsx(
        'inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 text-[var(--color-text-secondary)] shadow-sm backdrop-blur-sm',
        className
      )}
    >
      {availableThemes.map((themeEntry) => {
        const isActive = themeEntry.id === theme
        const shortLabel = themeEntry.copy.shortName || themeEntry.id.toUpperCase()
        const displayLabel = shortLabel
        const logo = themeEntry.logos.toggleIcon

        return (
          <button
            key={themeEntry.id}
            type="button"
            onClick={() => setTheme(themeEntry.id as ThemeId)}
            disabled={!ready}
            aria-pressed={isActive}
            title={themeEntry.label}
            className={clsx(
              'flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-60',
              size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm',
              isActive
                ? 'bg-[var(--color-accent-primary)] text-black shadow'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]'
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={ICON_SIZE[size]}
              height={ICON_SIZE[size]}
              unoptimized
              className="rounded-full"
            />
            {!hideLabels && <span>{displayLabel}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default ThemeToggle
