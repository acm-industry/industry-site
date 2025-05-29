'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { projects, currentQuarter } from '@/data/ProjectsData'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToProjectDetailsById } from './ProjectDetails/ProjectsDetails'
import React from 'react'

// Quarter name map
const quarterNames = ['Fall', 'Winter', 'Spring', 'Summer']

// Format quarter tuple
const formatQuarter = ([q, y]: number[]) => `${quarterNames[q - 1]} ${y}`

// Available years for filters
const currentYear = currentQuarter[1]
const availableYears = [currentYear, currentYear - 1, currentYear - 2].filter(year => year >= 2025)

// Define filters
const filters = ['recent', 'all', ...availableYears.map(String)]

// Utility to get previous quarter
const getPreviousQuarter = ([q, y]: number[]): number[] => {
  if (q === 1) return [4, y - 1]
  return [q - 1, y]
}

// Define Project type based on ProjectsData
export type Project = {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  images: string[] | null;
  link: string;
  featured: boolean;
  quarter: number[];
  company_logo: string;
  tags: string[];
  external_links: { label: string; href: string; icon: React.ReactNode }[];
  colors: {
    background?: string;
    border?: string;
    textPrimary?: string;
    textSecondary?: string;
    accent?: string;
    mediaBackground?: string;
  
    tag?: {
      background?: string;
      text?: string;
      border?: string;
    },
  
    button?: {
      background?: string;
      text?: string;
      border?: string;
    }
  }
};

const ProjectCard = React.memo(function ProjectCard({ p, index, onClick, priority }: { p: Project, index: number, onClick: () => void, priority: boolean }) {
  return (
    <motion.div
      key={p.id}
      id={`project-card-${p.id}`}
      onClick={onClick}
      className="cursor-pointer group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.015] transition-all backdrop-blur-sm smooth-element"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: '0 10px 30px rgba(255, 207, 82, 0.15)',
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 0.75, delay: 0.1 * Math.min(index, 5), ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="relative w-full h-48"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {p.images ? (
          <Image
            src={`/projects/${p.images[0]}`}
            alt={p.name}
            fill
            className="object-cover"
            unoptimized={true}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
          />
        ) : (
          <div className="w-full h-full bg-gray-700/50 backdrop-blur flex items-center justify-center">
            <span className="text-white text-lg font-medium">Coming Soon</span>
          </div>
        )}
      </motion.div>
      <motion.div 
        className="p-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.2 + 0.1 * Math.min(index, 5),
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <h3 className="text-lg font-semibold text-white mb-1">{p.name}</h3>
        <p className="text-sm text-white/60 mb-2">{p.short_description}</p>
        <p className="text-xs text-white/40">{formatQuarter(p.quarter)}</p>
        {p.featured && (
          <motion.span 
            className="inline-flex items-center gap-1 text-xs text-yellow-400 font-semibold mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3 + 0.1 * Math.min(index, 5),
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Star size={14} className="relative top-[-1px]" fill="currentColor" /> Featured
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
})

export default function ProjectFilterAndCards() {
  const [activeFilter, setActiveFilter] = useState('recent')

  const recentQuarters = [currentQuarter, getPreviousQuarter(currentQuarter)]

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'recent') {
      return recentQuarters.some(
        ([q, y]) => p.quarter[0] === q && p.quarter[1] === y
      )
    }
    return String(p.quarter[1]) === activeFilter
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const targetId = params.get('project')
    if (targetId) {
      scrollToProjectDetailsById(targetId);
    }
    // Reset URL after scrolling
    setTimeout(() => {
      window.history.replaceState({}, '', window.location.pathname)
    }, 100)
  }, []);

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={clsx(
                'px-5 py-2.5 text-base font-medium rounded-full border transition-all duration-200 shadow-sm smooth-element',
                activeFilter === f
                  ? 'bg-[var(--accent-gold)] text-black border-transparent shadow-[0_0_15px_rgba(255,207,82,0.4)]'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
              )}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.08, ease: [0.16, 1, 0.3, 1] }
              }}
              transition={{ duration: 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              {f === 'recent' ? 'Recent' : f === 'all' ? 'All' : f}
            </motion.button>
          ))}
        </motion.div>

        {/* Instructional Note */}
        <motion.p 
          className="text-sm text-white/80 text-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          Click a project card to view more details below.
        </motion.p>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ willChange: 'transform' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <ProjectCard
                key={p.id}
                p={p}
                index={index}
                onClick={() => scrollToProjectDetailsById(p.id)}
                priority={index < 3}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}