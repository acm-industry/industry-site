'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Mail } from 'lucide-react'
import { useTheme } from '@/theme/ThemeContext'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function TeamCTA() {
  const { theme } = useTheme()
  const isACM = theme === 'acm'

  return (
    <motion.section 
      className={clsx(
        'relative w-full px-6 py-24 overflow-hidden border-t smooth-element transition-colors duration-500',
        isACM
          ? 'text-white border-white/10'
          : 'text-[var(--color-text-primary)] border-[var(--color-border)]'
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        willChange: 'transform, opacity',
        background: 'var(--color-background)',
      }}
    >
      {/* Background Effects */}
      <StarField numberOfStars={100} />
      <SectionGlow
        size={isACM ? 650 : 700}
        opacity={isACM ? 0.03 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      {/* Central Content — No Rectangle */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className={clsx(
            'text-3xl sm:text-4xl font-extrabold mb-6 smooth-element',
            'text-[var(--color-accent-primary)] drop-shadow-[0_0_10px_var(--color-accent-muted)]'
          )}
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
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
          Want to join the team?
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
            filter: { duration: 0.4, ease: 'easeOut' }
          }}
          style={{
            willChange: 'transform, opacity, filter',
            color: 'var(--color-text-secondary)',
          }}
        >
          We&apos;re always looking for passionate students to help build, design, and lead with us.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Email Button */}
          <motion.a
            href="mailto:ucsbacm.industry@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-semibold min-w-[160px] rounded-lg shadow-md transition-all duration-300 text-black bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] hover:shadow-[0_0_15px_var(--color-accent-muted)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            <Mail size={18} />
            Email Us
          </motion.a>

          {/* Join Page Button */}
          <Link
            href="/join"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-semibold min-w-[160px] rounded-lg shadow-md transition-all duration-300 border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-black hover:shadow-[0_0_15px_var(--color-accent-muted)]"
          >
            View Join Page
          </Link>
        </motion.div>

        {/* Email Text */}
        <motion.span 
          className={clsx(
            'mt-2 text-sm block',
            isACM ? 'text-white/70' : 'text-[var(--color-text-secondary)]'
          )}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          ucsbacm.industry@gmail.com
        </motion.span>
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