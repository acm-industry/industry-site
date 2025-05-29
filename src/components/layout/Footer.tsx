'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'
import acmLogo from '@/public/club-logos/acm-logo.png'
import bruinaiLogo from '@/public/club-logos/bruin-ai-logo.png'
import industryLogo from '@/public/club-logos/industry-logo.png'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="border-t border-white/10 bg-[var(--background)] text-[var(--foreground)]" style={{ willChange: 'transform, opacity' }}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[16px] font-medium relative">
        
        {/* Left: Logo + affiliations */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center">
            <Image
              src={industryLogo}
              alt="ACM Industry"
              width={48}
              height={48}
              className="object-contain"
              unoptimized={true}
              priority
            />
          </Link>

          <a
            href="https://ucsbacm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/10 flex items-center justify-center hover:ring-2 hover:ring-accent-gold transition-all"
          >
            <Image src={acmLogo} alt="ACM UCSB" width={40} height={40} unoptimized={true} priority/>
          </a>

          <a
            href="https://bruinai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-4 rounded-full border border-white/10 bg-white/10 flex items-center justify-center hover:ring-2 hover:ring-accent-gold transition-all"
          >
            <Image src={bruinaiLogo} alt="BruinAI" width={100} height={28} unoptimized={true} priority/>
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-7 text-[16px]">
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
              className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right: Socials */}
        <div className="flex items-center gap-6 ml-auto">
          <a
            href="https://github.com/acm-industry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-gold)]"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/acmucsb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-gold)]"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ucsbacm.industry@gmail.com"
            className="hover:text-[var(--accent-gold)]"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/30 py-3">
        © {new Date().getFullYear()} ACM.Industry @ UCSB. All rights reserved.
      </div>
    </footer>
  )
}