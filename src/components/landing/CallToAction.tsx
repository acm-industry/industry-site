'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from '@/theme/ThemeContext'
import { landingContent } from '@/data/LandingContent'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function CallToAction() {
  const { theme } = useTheme()
  const isACM = theme === 'acm'
  const cta = landingContent[theme].cta
  const PrimaryIcon = cta.primary.icon
  const SecondaryIcon = cta.secondary.icon

  return (
    <motion.section
      className={clsx(
        'relative w-full px-6 py-24 overflow-hidden border-t smooth-element transition-colors duration-500',
        'text-[var(--color-text-primary)] border-[var(--color-border)]'
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{
        willChange: 'transform, opacity',
        background: 'var(--color-background)',
      }}
    >
      <StarField numberOfStars={100} />
      <SectionGlow
        size={850}
        opacity={0.04}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      {/* --- CENTRAL CTA BLOCK (NO RECTANGLE) --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className={clsx(
            'text-4xl md:text-5xl font-extrabold mb-6 smooth-element leading-tight',
            'text-[var(--color-accent-primary)] drop-shadow-[0_0_15px_var(--color-accent-muted)]'
          )}
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.5, ease: 'easeOut' },
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {cta.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg max-w-xl mx-auto mb-12 smooth-element"
          initial={{ opacity: 0, y: 20, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.4, ease: 'easeOut' },
          }}
          style={{
            willChange: 'transform, opacity, filter',
            color: 'var(--color-text-secondary)',
          }}
        >
          {cta.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Primary */}
          <Link
            href={cta.primary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 text-black bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] hover:shadow-[0_0_25px_var(--color-accent-muted)]"
          >
            <PrimaryIcon className="w-5 h-5" />
            {cta.primary.label}
          </Link>

          {/* Secondary */}
          <Link
            href={cta.secondary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border rounded-lg shadow-md transition-all duration-300 border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-black hover:shadow-[0_0_25px_var(--color-accent-muted)]"
          >
            <SecondaryIcon className="w-5 h-5" />
            {cta.secondary.label}
          </Link>
        </motion.div>
      </div>

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