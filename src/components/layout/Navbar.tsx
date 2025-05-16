'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import acmNavLogo from '@/public/industry-nav-logo.png'

const navItems = ['Home', 'Services', 'Team', 'Projects', 'Join', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        background: 'rgba(1, 8, 10, 0.85)',
        borderColor: 'rgba(255,255,255,0.05)',
        color: 'var(--foreground)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold">
          <Image src={acmNavLogo} alt="ACM Industry Logo" width={210} height={48} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              className="relative text-base text-md font-medium transition-all duration-300 hover:text-[var(--accent-gold)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          ))}
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