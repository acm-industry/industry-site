'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Handshake } from 'lucide-react'
import StarField from '../global/StarField' // assuming you're already using this
import SectionGlow from '../global/SectionGlow'

export default function CallToAction() {
  return (
    <motion.section 
      className="relative w-full px-6 py-24 bg-black text-white overflow-hidden smooth-element"
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
      {/* Starfield behind content */}
      <StarField numberOfStars={80} />
      <SectionGlow size={900} opacity={0.04} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Glowing Ring Backdrop */}

        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] smooth-element"
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
          Get Involved
        </motion.h2>
        
        <motion.p 
          className="text-lg text-white/70 max-w-xl mx-auto mb-12 smooth-element"
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
          Whether you&apos;re a student ready to learn by doing or a company ready to collaborate — let&apos;s build something together.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
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
              whileHover={{ 
                scale: 1.05, 
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                willChange: 'transform',
                transition: 'scale 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-black bg-[var(--accent-gold)] rounded-lg shadow-md hover:bg-[#ffd75c] hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5" />
                For Students
              </Link>
            </motion.div>
          </motion.div>

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
                transition: 'scale 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg shadow-md hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_25px_rgba(255,207,82,0.4)] transition-all duration-300"
              >
                <Handshake className="w-5 h-5" />
                For Companies
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
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