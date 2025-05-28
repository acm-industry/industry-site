'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function ProjectsHero() {
  return (
    <motion.section 
      className="relative overflow-hidden w-full px-6 pt-48 pb-40 text-center bg-black text-[var(--foreground)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Starfield background */}
      <StarField numberOfStars={100} />
      <SectionGlow size={900} opacity={0.04} />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}
        >
          Explore{' '}
          <span
            className="text-[var(--accent-gold)]"
            style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
          >
            Our Work
          </span>
        </motion.h1>

        <motion.p
          className="text-md sm:text-lg max-w-2xl mx-auto text-[var(--text-secondary)]"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 0.6, ease: "easeOut" }
          }}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          A showcase of our student-built solutions — past and present. Filter by quarter, explore by type, and dive into the real work that defines ACM Industry.
        </motion.p>
      </motion.div>

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