'use client'
import { Handshake, GraduationCap } from 'lucide-react'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'
import { motion } from 'framer-motion'

export default function ProjectsCTA() {
  return (
    <motion.section 
      className="relative w-full px-6 py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden border-t border-white/10"
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
          Ready to join us?
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          Whether you&apos;re a student ready to build or a company ready to collaborate — let&apos;s make it happen.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.a
            href="/join"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[#ffd75c] hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
            whileHover={{ scale: 1.06, y: -2, boxShadow: '0 0 25px rgba(255,207,82,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform' }}
          >
            <GraduationCap className="w-5 h-5" />
            Join ACM Industry
          </motion.a>

          <motion.a
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md hover:scale-[1.05] hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-transform"
            whileHover={{ scale: 1.06, y: -2, backgroundColor: 'var(--accent-gold)', color: '#000', boxShadow: '0 0 25px rgba(255,207,82,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform' }}
          >
            <Handshake className="w-5 h-5" />
            Partner With Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}