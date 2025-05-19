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

const FeaturedProjects = () => (
  <section className="relative z-10 w-full px-6 pt-16 md:pt-20 bg-[var(--background)] text-[var(--foreground)]">
    <div className="max-w-7xl mx-auto text-center mb-0">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-1">
        {featuredProjectsTitleWhite}{' '}
        <span
          style={{
            color: 'var(--accent-gold)',
            textShadow: '0 0 20px rgba(255, 207, 82, 0.15)',
          }}
        >
          {featuredProjectsTitleGold}
        </span>
      </h2>
      <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
        {featuredProjectsDescription}
      </p>
    </div>
    <div className="max-w-7xl mx-auto">
      <FeaturedProjectsCarousel projects={featuredProjects} />
    </div>
  </section>
)

export default FeaturedProjects