'use client'

import { Handshake, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function AboutCTA() {
  return (
    <motion.section 
      className="relative w-full px-6 py-24 bg-black text-[var(--foreground)] overflow-hidden border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      <StarField numberOfStars={80} />
      <SectionGlow />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          Help Shape the Future of ACM Industry
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          We're building a program where students and companies don't just work together — they grow together. Join us in pushing the boundary of what a student-run org can do.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ willChange: 'transform' }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 25px rgba(255, 207, 82, 0.4)',
                backgroundColor: '#ffd75c'
              }}
              whileTap={{ scale: 0.95 }}
              href="/join"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md transition-colors duration-300"
            >
              <Rocket className="w-5 h-5" />
              Join Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ willChange: 'transform' }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 25px rgba(255, 207, 82, 0.4)',
                backgroundColor: 'var(--accent-gold)',
                color: 'black'
              }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md"
            >
              <Handshake className="w-5 h-5" />
              Work With Us
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}