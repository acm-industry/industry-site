'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useTheme } from '@/theme/ThemeContext'
import ThemeToggle from '@/theme/ThemeToggle'

export default function Footer() {
  const pathname = usePathname()
  const { tokens } = useTheme()
  const footerLogos = tokens.logos.footerAffiliates.length
    ? tokens.logos.footerAffiliates
    : [tokens.logos.nav]
  const orgName = tokens.copy.orgName

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center md:flex-row md:justify-between gap-6 text-[16px] font-medium relative">
        {/* Left: Logos */}
        <div className="flex items-center gap-4 md:gap-5">
          {footerLogos.map((logo, index) => {
            const isAcmIndustry =
              logo.alt?.toLowerCase().includes('acm industry') ||
              logo.src?.toLowerCase().includes('acm-industry')

            const image = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={isAcmIndustry ? 44 : 48}
                height={isAcmIndustry ? 44 : 48}
                className={`object-contain ${
                  isAcmIndustry ? 'p-[2px] scale-[0.95]' : ''
                }`}
                unoptimized
                priority={index === 0}
              />
            )

            const wrapperClasses =
              'w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center hover:ring-2 hover:ring-[var(--color-accent-primary)] transition-all'

            if (logo.href) {
              return logo.external ? (
                <a
                  key={`${logo.src}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wrapperClasses}
                >
                  {image}
                </a>
              ) : (
                <Link
                  key={`${logo.src}-${index}`}
                  href={logo.href}
                  className={wrapperClasses}
                >
                  {image}
                </Link>
              )
            }

            return (
              <span key={`${logo.src}-${index}`} className={wrapperClasses}>
                {image}
              </span>
            )
          })}
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-7 text-[16px] md:absolute md:left-1/2 md:-translate-x-1/2">
          {[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Team', href: '/team' },
            { name: 'Projects', href: '/projects' },
            { name: 'Join', href: '/join' },
          ].map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={(e) => {
                if (href === pathname) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="hover:text-[var(--color-accent-primary)] transition-colors cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right: Socials */}
        <div className="flex items-center gap-6 md:ml-auto">
          <a
            href="https://discord.gg/WZUYgk2Aur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent-primary)]"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://github.com/acm-industry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent-primary)]"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/acmucsb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent-primary)]"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ucsbacm.industry@gmail.com"
            className="hover:text-[var(--color-accent-primary)]"
          >
            <Mail size={24} />
          </a>
          <ThemeToggle variant="switch" size="sm" ariaLabel="Toggle site theme" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-[var(--color-text-secondary)] py-3">
        © {new Date().getFullYear()} {orgName}. All rights reserved.
      </div>
    </footer>
  )
}