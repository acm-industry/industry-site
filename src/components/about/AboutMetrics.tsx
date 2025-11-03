'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import StarField from '../global/StarField'
import { useTheme } from '@/theme/ThemeContext'
import { aboutContent } from '@/data/AboutData'

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
  const { theme } = useTheme()
  const isACM = theme === 'acm'
  const metricsContent = aboutContent[theme].metrics

  return (
    <section
      className={clsx(
        'relative w-full px-6 py-20 overflow-hidden transition-colors duration-500',
        isACM ? 'text-white' : 'text-[var(--color-text-primary)]'
      )}
      style={{
        background: 'var(--color-background)',
      }}
    >
      {/* Background */}
      <StarField numberOfStars={50} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={clsx(
            'text-center text-3xl sm:text-4xl font-bold mb-12',
            'text-[var(--color-accent-primary)] drop-shadow-[0_0_15px_var(--color-accent-muted)]'
          )}
          style={{ willChange: 'transform, opacity' }}
        >
          {metricsContent.title}
        </motion.h2>

        {/* Metrics Grid */}
        <div
          className={clsx(
            'w-full rounded-2xl overflow-hidden backdrop-blur-sm border transition-colors duration-300',
            isACM
              ? 'border-white/10 bg-white/[0.03]'
              : 'border-[var(--color-border)] bg-[var(--color-surface)]/70'
          )}
        >
          <div
            className={clsx(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x',
              isACM ? 'divide-white/10' : 'divide-[var(--color-border)]/60'
            )}
          >
            {metricsContent.items.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center metric-card"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.div
                  className={clsx(
                    'w-full h-full flex flex-col items-center justify-center px-6 py-10 rounded-xl transition-all metric-card-inner'
                  )}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 25px var(--color-accent-muted)',
                    backgroundColor: 'var(--color-surface-hover)',
                    transition: {
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  whileTap={{ scale: 1.02 }}
                  style={{
                    willChange: 'transform, box-shadow, background',
                    cursor: 'pointer',
                  }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl font-extrabold text-[var(--color-accent-primary)] drop-shadow-[0_0_6px_var(--color-accent-muted)]"
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-base sm:text-lg mt-2 text-center text-[var(--color-text-secondary)]">
                    {item.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Animations */}
      <style jsx>{`
        .metric-card,
        .metric-card-inner {
          transition: box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  )
}