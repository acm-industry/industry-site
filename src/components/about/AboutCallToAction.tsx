'use client'

import { Handshake, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from '@/theme/ThemeContext'
import { aboutContent } from '@/data/AboutData'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function AboutCTA() {
  const { theme } = useTheme()
  const isACM = theme === 'acm'
  const cta = aboutContent[theme].cta

  return (
    <motion.section 
      className={clsx(
        'relative w-full px-6 py-24 overflow-hidden border-t smooth-element transition-colors duration-500',
        isACM
          ? 'text-white border-white/10'
          : 'text-[var(--color-text-primary)] border-[var(--color-border)]'
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        background: 'var(--color-background)',
        willChange: 'transform, opacity',
      }}
    >
      {/* Background Effects */}
      <StarField numberOfStars={100} />
      <SectionGlow
        size={isACM ? 900 : 950}
        opacity={isACM ? 0.04 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className={clsx(
            'text-4xl md:text-5xl font-extrabold mb-6 smooth-element',
            'text-[var(--color-accent-primary)] drop-shadow-[0_0_20px_var(--color-accent-muted)]'
          )}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.5, ease: 'easeOut' }
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {cta.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg max-w-xl mx-auto mb-12 smooth-element"
          initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.4, ease: 'easeOut' }
          }}
          style={{
            color: 'var(--color-text-secondary)',
            willChange: 'transform, opacity, filter',
          }}
        >
          {cta.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Primary CTA */}
          <motion.a
            href={cta.primary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--color-accent-primary)] rounded-lg shadow-md transition-all duration-300 hover:bg-[var(--color-accent-secondary)] hover:shadow-[0_0_25px_var(--color-accent-muted)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <Rocket className="w-5 h-5" />
            {cta.primary.label}
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href={cta.secondary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] rounded-lg shadow-md transition-all duration-300 hover:bg-[var(--color-accent-primary)] hover:text-black hover:shadow-[0_0_25px_var(--color-accent-muted)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <Handshake className="w-5 h-5" />
            {cta.secondary.label}
          </motion.a>
        </motion.div>
      </div>

      {/* Smooth Animations */}
      <style jsx>{`
        .smooth-element {
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </motion.section>
  )
}