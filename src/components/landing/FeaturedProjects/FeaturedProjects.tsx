'use client'

import React from 'react'
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel'
import {
  projects,
  featuredProjectsTitleWhite,
  featuredProjectsTitleGold,
  featuredProjectsDescription,
} from '@/data/ProjectsData'
import { Boxes } from 'lucide-react'

const FeaturedProjects = () => (
  <section className="relative z-10 w-full px-6 bg-[var(--background)] text-[var(--foreground)] mb-12">
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

    <div className="flex justify-center mt-6">
      <a
        href="/projects"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0e11] transition-all duration-300 shadow-[0_0_20px_rgba(255,207,82,0.25)] hover:shadow-[0_0_30px_rgba(255,207,82,0.4)]"
      >
        <Boxes className="w-4 h-4" />
        View All Projects
      </a>
    </div>
    
    <div className="max-w-7xl mx-auto">
      <FeaturedProjectsCarousel projects={projects.filter((project) => project.featured)} />
    </div>
  </section>
)

export default FeaturedProjects