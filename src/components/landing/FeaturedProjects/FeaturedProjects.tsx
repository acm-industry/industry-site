'use client'

import React from 'react'
import { motion } from 'framer-motion'
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel'
import {
  featuredProjects,
  featuredProjectsTitleWhite,
  featuredProjectsTitleGold,
  featuredProjectsDescription,
} from '@/data/FeaturedProjectsData'

const FeaturedProjects = () => {
  return (
    <section className="relative z-10 w-full px-6 pt-32 md:pt-40 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
        >
          {featuredProjectsDescription}
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto">
        <FeaturedProjectsCarousel projects={featuredProjects} />
      </div>
    </section>
  )
}

export default FeaturedProjects