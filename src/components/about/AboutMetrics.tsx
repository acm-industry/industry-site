'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import { metrics } from '@/data/AboutData'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

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
          style={{ willChange: 'transform, opacity' }}
        >
          Within two quarters...
        </motion.h2>

        {/* Metrics Grid */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {metrics.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center px-0 py-0 metric-card"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center px-6 py-8 sm:py-10 rounded-xl metric-card-inner"
                  whileHover={{
                    scale: 1.045,
                    boxShadow: '0 6px 32px 0 rgba(255, 215, 0, 0.10)',
                    background: 'rgba(255,255,255,0.08)',
                    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                  }}
                  whileTap={{ scale: 1.03 }}
                  style={{ cursor: 'pointer', willChange: 'transform, box-shadow, background' }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl font-extrabold text-[var(--accent-gold)] drop-shadow-sm"
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 text-center">
                    {item.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .metric-card {
          transition: box-shadow 0.22s cubic-bezier(0.16,1,0.3,1), background 0.22s cubic-bezier(0.16,1,0.3,1), transform 0.22s cubic-bezier(0.16,1,0.3,1);
        }
        .metric-card-inner {
          transition: box-shadow 0.22s cubic-bezier(0.16,1,0.3,1), background 0.22s cubic-bezier(0.16,1,0.3,1), transform 0.22s cubic-bezier(0.16,1,0.3,1);
        }
      `}</style>
    </section>
  )
}