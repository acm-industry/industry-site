'use client'

import Link from 'next/link'
import { GraduationCap, Handshake } from 'lucide-react'
import StarField from '../global/StarField' // assuming you're already using this

export default function CallToAction() {
  return (
    <section className="relative w-full px-6 py-24 bg-black text-white overflow-hidden">
      {/* Starfield behind content */}
      <StarField numberOfStars={60} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Glowing Ring Backdrop */}
        <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-gold)] opacity-[0.025] rounded-full blur-3xl pointer-events-none z-0" />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Get Involved
        </h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-12">
          Whether you&apos;re a student ready to learn by doing or a company ready to collaborate — let&apos;s build something together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/join"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[#ffd75c] hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
          >
            <GraduationCap className="w-5 h-5" />
            For Students
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
          >
            <Handshake className="w-5 h-5" />
            For Companies
          </Link>
        </div>
      </div>
    </section>
  )
}