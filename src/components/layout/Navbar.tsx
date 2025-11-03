'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useScroll } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@/theme/ThemeContext'
import ThemeToggle from '@/theme/ThemeToggle'

const navItems = ['Home', 'Services', 'Team', 'Projects', 'Join', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const { tokens } = useTheme()
  const navLogo = tokens.logos.nav
  const isGSELogo = navLogo.alt.toLowerCase().includes('gaucho')
  const logoWidth = isGSELogo ? 125 : 210
  const logoHeight = isGSELogo ? 30 : 48

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0)
    })
  }, [scrollY])

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background:
          open && typeof window !== 'undefined' && window.innerWidth < 768
            ? 'var(--color-nav-background)'
            : isScrolled
            ? 'var(--color-nav-background-scrolled)'
            : 'transparent',
        borderColor: isScrolled ? 'var(--color-border)' : 'transparent',
        color: 'var(--color-text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold">
          <Image
            src={navLogo.src}
            alt={navLogo.alt}
            width={logoWidth}
            height={logoHeight}
            unoptimized={true}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav 
          className="hidden md:flex space-x-8"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false)
            setHoveredItem(null)
          }}
        >
          {navItems.map((item) => {
            const path = item === 'Home' ? '' : item.toLowerCase()
            const fullPath = `/${path}`
            const isActive = pathname === fullPath
            const isHovered = hoveredItem === item

            return (
              <Link
                key={item}
                href={fullPath}
                onClick={(e) => {
                  if (pathname === fullPath) {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative text-base text-md font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[var(--color-accent-primary)] after:transition-all after:duration-300 ${
                  isHovered 
                    ? 'text-[var(--color-accent-primary)] after:w-full' 
                    : isActive && !isNavHovered
                      ? 'text-[var(--color-accent-primary)] after:w-full'
                      : 'text-[var(--color-text-primary)] after:w-0'
                }`}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle variant="segmented" size="sm" ariaLabel="Switch site theme" />
          </div>
          <button
            className="md:hidden text-[var(--color-text-primary)]"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden px-6 pb-4 space-y-4"
          >
            <ThemeToggle
              variant="segmented"
              size="sm"
              className="w-full justify-between"
              ariaLabel="Switch site theme"
            />
            {navItems.map((item) => {
              const path = item === 'Home' ? '' : item.toLowerCase()
              const fullPath = `/${path}`

              return (
                <Link
                  key={item}
                  href={fullPath}
                  onClick={(e) => {
                    if (pathname === fullPath) {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    setOpen(false)
                  }}
                  className="block text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition"
                >
                  {item}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
