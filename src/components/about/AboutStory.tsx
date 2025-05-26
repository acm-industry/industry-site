'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionGlow from '../global/SectionGlow'
import StarField from '../global/StarField'
import { aboutStoryTitle, aboutStoryParagraph1White, aboutStoryParagraph1Gold, aboutStoryParagraph2White, aboutStoryParagraph2Gold, aboutStoryParagraph3White, aboutStoryParagraph3Gold } from '@/data/AboutData'

export default function AboutStorySection() {
  return (
    <section className="relative w-full px-6 py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <SectionGlow size={700} opacity={0.04} />
      <StarField numberOfStars={100} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
        >
          <Image
            src="/team/team.jpg"
            alt="ACM Industry Team"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.06)]">
            {aboutStoryTitle}
          </h2>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-5">
            {aboutStoryParagraph1White}<span className="text-[var(--accent-gold)] font-semibold">{aboutStoryParagraph1Gold}</span>
          </p>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-5">
            {aboutStoryParagraph2White}<span className="text-[var(--accent-gold)] font-semibold">{aboutStoryParagraph2Gold}</span>
          </p>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            {aboutStoryParagraph3White}<span className="text-[var(--accent-gold)] font-semibold">{aboutStoryParagraph3Gold}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}