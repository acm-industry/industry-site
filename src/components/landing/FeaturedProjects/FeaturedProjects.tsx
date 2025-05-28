'use client'

import React from 'react'
import { motion } from 'framer-motion'
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel'
import {
  projects,
  featuredProjectsTitleWhite,
  featuredProjectsTitleGold,
  featuredProjectsDescription,
} from '@/data/ProjectsData'
import { Boxes } from 'lucide-react'

const FeaturedProjects = () => (
  <motion.section 
    className="relative z-10 w-full px-6 bg-[var(--background)] text-[var(--foreground)] mb-12 smooth-element"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40%' }}
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }}
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="max-w-7xl mx-auto text-center mb-0">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-1 smooth-element"
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
        {featuredProjectsTitleWhite}{' '}
        <span
          style={{
            color: 'var(--accent-gold)',
            textShadow: '0 0 20px rgba(255, 207, 82, 0.15)',
          }}
        >
          {featuredProjectsTitleGold}
        </span>
      </motion.h2>
      
      <motion.p 
        className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto smooth-element"
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
        {featuredProjectsDescription}
      </motion.p>
    </div>

    <motion.div 
      className="flex justify-center mt-6"
      initial={{ opacity: 0, y: 20 }}
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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: 0.7,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
        }}
        whileTap={{ scale: 0.95 }}
        className="smooth-element"
        style={{ willChange: 'transform' }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0e11] transition-all duration-300 shadow-[0_0_20px_rgba(255,207,82,0.25)] hover:shadow-[0_0_30px_rgba(255,207,82,0.4)]"
        >
          <Boxes className="w-4 h-4" />
          View All Projects
        </a>
      </motion.div>
    </motion.div>
    
    <motion.div 
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <FeaturedProjectsCarousel projects={projects.filter((project) => project.featured)} />
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

export default FeaturedProjects