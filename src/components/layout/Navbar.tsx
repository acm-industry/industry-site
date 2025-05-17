'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import acmNavLogo from '@/public/club-logos/industry-nav-logo.png'
import { usePathname } from 'next/navigation'
import { useScroll } from 'framer-motion'

const navItems = ['Home', 'Services', 'Team', 'Projects', 'Join', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0)
    })
  }, [scrollY])

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(1, 8, 10, 0.85)' : 'transparent',
        borderColor: isScrolled ? 'rgba(255,255,255,0.05)' : 'transparent',
        color: 'var(--foreground)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold">
          <Image src={acmNavLogo} alt="ACM Industry Logo" width={210} height={48} />
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
            const isActive = pathname === `/${path}`
            const isHovered = hoveredItem === item

            return (
              <Link
                key={item}
                href={`/${path}`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative text-base text-md font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[var(--accent-gold)] after:transition-all after:duration-300 ${
                  isHovered 
                    ? 'text-[var(--accent-gold)] after:w-full' 
                    : isActive && !isNavHovered
                      ? 'text-[var(--accent-gold)] after:w-full'
                      : 'text-[var(--foreground)] after:w-0'
                }`}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              className="block text-base font-medium text-[var(--foreground)] hover:text-[var(--accent-gold)] transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}