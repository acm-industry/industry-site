'use client'

import type { ReactNode } from 'react'

import { ThemeProvider } from './ThemeContext'

type ThemeRootProps = {
  children: ReactNode
}

export function ThemeRoot({ children }: ThemeRootProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemeRoot
