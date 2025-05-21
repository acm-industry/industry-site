'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import StarField from '../global/StarField'

export default function TeamCTA() {
  return (
    <section className="relative bg-black py-20 px-6 sm:px-10 lg:px-20 border-t border-white/10">
      <StarField numberOfStars={100} />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-gold)] drop-shadow-[0_0_10px_rgba(255,207,82,0.4)] mb-6">
          Want to join the team?
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-12">
          We're always looking for passionate students to help build, design, and lead with us.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6">
          {/* Email Block */}
          <div className="flex flex-col items-center sm:items-start">
            <a
              href="mailto:ucsbacm.industry@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md transition-all hover:scale-[1.03] hover:bg-[#ffdc70] hover:shadow-[0_0_15px_rgba(255,207,82,0.5)]"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>

          {/* Join Page Button */}
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md transition-all hover:bg-[var(--accent-gold)] hover:text-black hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,207,82,0.5)]"
          >
            View Join Page
          </Link>
        </div>
        <span className="mt-2 text-sm text-white/70">ucsbacm.industry@gmail.com</span>
      </div>
    </section>
  )
}