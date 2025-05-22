'use client'

import Link from 'next/link'
import { Handshake, GraduationCap } from 'lucide-react'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function ProjectsCTA() {
  return (
    <section className="relative w-full px-6 py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden border-t border-white/10">
      <StarField numberOfStars={80} />
      <SectionGlow />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          Ready to join us?
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12">
          Whether you&apos;re a student ready to build or a company ready to collaborate — let&apos;s make it happen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/join"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[#ffd75c] hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
          >
            <GraduationCap className="w-5 h-5" />
            Join ACM Industry
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
          >
            <Handshake className="w-5 h-5" />
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}