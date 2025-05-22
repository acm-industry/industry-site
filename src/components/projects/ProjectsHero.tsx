'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden w-full px-6 pt-48 pb-40 text-center bg-black text-[var(--foreground)]">
      {/* Starfield background */}
      <StarField numberOfStars={100} />
      <SectionGlow size={900} opacity={0.04} />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.08)]"
      >
        Explore{' '}
        <span
          className="text-[var(--accent-gold)]"
          style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
        >
          Our Work
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-md sm:text-lg max-w-2xl mx-auto text-[var(--text-secondary)]"
      >
        A showcase of our student-built solutions — past and present. Filter by quarter, explore by type, and dive into the real work that defines ACM Industry.
      </motion.p>
    </section>
  )
}