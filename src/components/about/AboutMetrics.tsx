'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import { metrics } from '@/data/AboutData'

export default function AboutMetricsSection() {
  return (
    <section className="relative w-full px-6 py-20 bg-[var(--bg-primary)] text-white overflow-hidden">
      <StarField numberOfStars={40} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold mb-12"
        >
          Within two quarters...
        </motion.h2>

        {/* Metrics Grid */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-6 py-8 sm:py-10"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-[var(--accent-gold)] drop-shadow-sm">
                  {item.value}
                </div>
                <div className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 text-center">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}