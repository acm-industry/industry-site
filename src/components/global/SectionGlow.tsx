'use client'

import React from 'react'

interface SectionGlowProps {
  size?: number
  color?: string
  opacity?: number
  className?: string
}

export default function SectionGlow({
  size = 800,
  color = 'var(--accent-gold)',
  opacity = 0.025,
  className = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
}: SectionGlowProps) {
  return (
    <div
      className={`absolute ${className} pointer-events-none z-0 rounded-full blur-3xl`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        opacity,
      }}
    />
  )
}
