'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function TeamCTA() {
  return (
    <motion.section 
      className="relative bg-black py-20 px-6 sm:px-10 lg:px-20 border-t border-white/10 smooth-element"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <StarField numberOfStars={100} />
      <SectionGlow size={600} opacity={0.028} />

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-gold)] drop-shadow-[0_0_10px_rgba(255,207,82,0.4)] mb-6 smooth-element"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.5, ease: "easeOut" }
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          Want to join the team?
        </motion.h2>
        
        <motion.p 
          className="text-white/80 text-lg max-w-xl mx-auto mb-12 smooth-element"
          initial={{ opacity: 0, y: 20, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.4, ease: "easeOut" }
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          We&apos;re always looking for passionate students to help build, design, and lead with us.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6"
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
          {/* Email Block */}
          <motion.div 
            className="flex flex-col items-center sm:items-start"
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
            <motion.a
              href="mailto:ucsbacm.industry@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md transition-all hover:bg-[#ffdc70] hover:shadow-[0_0_15px_rgba(255,207,82,0.5)]"
              whileHover={{ 
                scale: 1.05, 
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                willChange: 'transform',
                transition: 'scale 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Mail size={18} />
              Email Us
            </motion.a>
          </motion.div>

          {/* Join Page Button */}
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
              whileHover={{ 
                scale: 1.05, 
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                willChange: 'transform',
                transition: 'scale 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md transition-all hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_15px_rgba(255,207,82,0.5)]"
              >
                View Join Page
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.span 
          className="mt-2 text-sm text-white/70"
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

      {/* Add custom CSS for smooth animations */}
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