'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'

export default function TeamHero() {
  return (
    <section
      className="w-full px-6 pt-40 text-center bg-[var(--background)] text-[var(--foreground)]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.08)]"
      >
        Meet the Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-md sm:text-lg max-w-2xl mx-auto text-[var(--text-secondary)]"
      >
        Builders, designers, and visionaries — united by our passion for creating impactful technology.
      </motion.p>
      <StarField numberOfStars={100} />
    </section>
  )
}