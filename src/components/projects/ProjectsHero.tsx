'use client'

import { motion } from 'framer-motion'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

export default function ProjectsHero() {
  return (
    <motion.section 
      className="relative overflow-hidden w-full px-6 pt-50 pb-40 text-center bg-[black] text-[var(--foreground)] smooth-element"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Starfield background */}
      <StarField numberOfStars={100} />
      <SectionGlow size={750} opacity={0.044} />

      {/* Title with "Our Work" highlighted */}
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ 
          duration: 0.9, 
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
          filter: { duration: 0.5, ease: "easeOut" }
        }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.08)] smooth-element"
        style={{ willChange: 'transform, opacity, filter' }}
      >
        Explore{' '}
        <motion.span
          className="text-[var(--accent-gold)]"
          style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
          initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          whileHover={{
            scale: 1.05,
            textShadow: '0 0 30px rgba(255, 207, 82, 0.5)',
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          Our Work
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30, filter: 'blur(2px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ 
          delay: 0.6, 
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          filter: { duration: 0.4, ease: "easeOut" }
        }}
        className="text-md sm:text-lg max-w-2xl mx-auto text-[var(--text-secondary)] smooth-element"
        style={{ willChange: 'transform, opacity, filter' }}
      >
        A showcase of our student-built solutions — past and present. Filter by quarter, explore by type, and dive into the real work that defines ACM Industry.
      </motion.p>

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