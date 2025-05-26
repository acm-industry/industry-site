'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { projects, currentQuarter } from '@/data/ProjectsData'
import { Star } from 'lucide-react'

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

  const scrollToProjectDetail = (index: number) => {
    const section = document.getElementById('project-details')
    if (!section) return
  
    const total = projects.length
  
    // This is the total scrollable height dedicated to the sticky scrolling behavior
    const scrollSpan = section.scrollHeight - window.innerHeight
  
    // Target scroll is section top + index proportion * sticky scroll range
    const scrollTarget = section.offsetTop + (((index+1) / total) * scrollSpan)
  
    const startScroll = window.scrollY
    const distance = scrollTarget - startScroll
    const duration = 800
    let startTime: number | null = null
  
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const time = timestamp - startTime
      const percent = Math.min(time / duration, 1)
      const eased = easeInOutQuad(percent)
  
      window.scrollTo(0, startScroll + distance * eased)
  
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    }
  
    window.requestAnimationFrame(step)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const targetId = params.get('project')
  
    if (targetId) {
      const index = projects.findIndex(p => p.id === targetId)
      if (index !== -1) {
        // delay to ensure layout is rendered
        setTimeout(() => {
          scrollToProjectDetail(index)
        }, 200)
      }
    }
  }, [])
  
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={clsx(
                'px-5 py-2.5 text-base font-medium rounded-full border transition-all duration-200 shadow-sm',
                activeFilter === f
                  ? 'bg-[var(--accent-gold)] text-black border-transparent shadow-[0_0_15px_rgba(255,207,82,0.4)]'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
              )}
            >
              {f === 'recent' ? 'Recent' : f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>

        {/* Instructional Note */}
        <p className="text-sm text-white/80 text-center mb-6">
            Click a project card to view more details below.
        </p>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map(p => (
            <div
              key={p.id}
              onClick={() => scrollToProjectDetail(projects.findIndex(pr => pr.id === p.id))}
              className="cursor-pointer group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.015] transition-all backdrop-blur-sm"
            >          
              <div className="relative w-full h-48">
              {p.images ? (
                <Image
                    src={`/projects/${p.images[0]}`}
                    alt={p.name}
                    fill
                    className="object-cover"
                    unoptimized={true}
                    priority
                />
                ) : (
                <div className="w-full h-full bg-gray-700/50 backdrop-blur flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Coming Soon</span>
                </div>
              )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">{p.name}</h3>
                <p className="text-sm text-white/60 mb-2">{p.short_description}</p>
                <p className="text-xs text-white/40">{formatQuarter(p.quarter)}</p>
                {p.featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-semibold mt-2">
                    <Star size={14} className="relative top-[-1px]" fill="currentColor" /> Featured
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}