'use client'

import { Handshake, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from '@/theme/ThemeContext'
import { projectsPageContent } from '@/data/ProjectsData'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function ProjectsCTA() {
  const { theme } = useTheme()
  const isACM = theme === 'acm'
  const cta = projectsPageContent[theme].cta

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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        willChange: 'transform, opacity',
        background: 'var(--color-background)',
      }}
    >
      {/* Background Effects */}
      <StarField numberOfStars={100} />
      <SectionGlow
        size={isACM ? 900 : 950}
        opacity={isACM ? 0.04 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className={clsx(
            'text-4xl md:text-5xl font-extrabold mb-6 smooth-element',
            'drop-shadow-[0_0_20px_var(--color-accent-muted)]'
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {cta.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg max-w-xl mx-auto mb-12 smooth-element"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            willChange: 'transform, opacity',
            color: 'var(--color-text-secondary)',
          }}
        >
          {cta.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 smooth-element"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Primary Button */}
          <motion.a
            href={cta.primaryHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--color-accent-primary)] rounded-lg shadow-md hover:bg-[var(--color-accent-secondary)] hover:shadow-[0_0_25px_var(--color-accent-muted)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <GraduationCap className="w-5 h-5" />
            {cta.primaryLabel}
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href={cta.secondaryHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] rounded-lg shadow-md hover:bg-[var(--color-accent-primary)] hover:text-black hover:shadow-[0_0_25px_var(--color-accent-muted)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <Handshake className="w-5 h-5" />
            {cta.secondaryLabel}
          </motion.a>
        </motion.div>
      </div>

      {/* Smooth Animation Utility */}
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