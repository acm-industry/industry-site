'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { FileUser, Settings } from 'lucide-react'
import { useTheme } from '@/theme/ThemeContext'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function JoinCallToAction() {
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
      {/* Starfield behind content */}
      <StarField numberOfStars={80} />

      <SectionGlow
        size={isACM ? 900 : 950}
        opacity={isACM ? 0.04 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2 
          className={clsx(
            'text-4xl md:text-5xl font-extrabold mb-6 smooth-element',
            'drop-shadow-[0_0_20px_var(--color-accent-muted)]'
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
          Apply Now
        </motion.h2>
        
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
          Join the builders’ community where students grow by shipping and partners move ideas forward. Let&apos;s create something meaningful together.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Primary Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            style={{ willChange: 'transform' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                willChange: 'transform',
                transition: 'scale 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--color-accent-primary)] rounded-lg shadow-md hover:bg-[var(--color-accent-secondary)] hover:shadow-[0_0_25px_var(--color-accent-muted)] transition-all duration-300"
              >
                <FileUser className="w-5 h-5" />
                Apply
              </Link>
            </motion.div>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            style={{ willChange: 'transform' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                willChange: 'transform',
                transition: 'scale 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] rounded-lg shadow-md hover:bg-[var(--color-accent-primary)] hover:text-black hover:shadow-[0_0_25px_var(--color-accent-muted)] transition-all duration-300"
              >
                <Settings className="w-5 h-5" />
                Services
              </Link>
            </motion.div>
          </motion.div>
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