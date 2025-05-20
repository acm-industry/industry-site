'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedProjectsCarouselProps {
  projects: Project[];
}

const AUTOPLAY_INTERVAL = 6000;
const CARD_WIDTH = 900;
const CARD_GAP = 0;
const INTERVAL = 50;

const FeaturedProjectsCarousel: React.FC<FeaturedProjectsCarouselProps> = ({ projects }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<number | null>(null)
  const accumulatedRef = useRef(0)
  const indexRef = useRef(0)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    accumulatedRef.current = 0
    setProgress(0)

    timerRef.current = window.setInterval(() => {
      accumulatedRef.current += INTERVAL
      const percent = (accumulatedRef.current / AUTOPLAY_INTERVAL) * 100
      setProgress(percent)

      if (accumulatedRef.current >= AUTOPLAY_INTERVAL) {
        accumulatedRef.current = 0
        const nextIndex = (indexRef.current + 1) % projects.length
        indexRef.current = nextIndex
        setSelectedIndex(nextIndex)
      }
    }, INTERVAL)
  }, [projects.length]);

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [projects.length, resetTimer])

  const incrementIndex = () => {
    const nextIndex = (selectedIndex + 1) % projects.length
    setSelectedIndex(nextIndex)
    indexRef.current = nextIndex
    resetTimer()
  }

  const decrementIndex = () => {
    const nextIndex = (selectedIndex - 1 + projects.length) % projects.length
    setSelectedIndex(nextIndex)
    indexRef.current = nextIndex
    resetTimer()
  }

  const goToIndex = (idx: number) => {
    setSelectedIndex(idx)
    indexRef.current = idx
    resetTimer()
  }

  const getCardProps = (idx: number) => {
    const total = projects.length
    let diff = idx - selectedIndex
  
    const half = Math.floor(total / 2)
    if (diff > half) diff -= total
    if (diff < -half) diff += total
  
    // If not selected, prev, or next → fully hide
    if (Math.abs(diff) > 1) {
      return {
        scale: 0.85,
        opacity: 0,
        zIndex: 0,
        x: diff * (CARD_WIDTH + CARD_GAP),
        hidden: true,
      }
    }
  
    let scale = 0.85
    let opacity = 0.15
    let zIndex = 0
    const x = diff * (CARD_WIDTH + CARD_GAP)
  
    if (Math.abs(diff) === 1) {
      scale = 0.92
      opacity = 0.6
      zIndex = 5
    } else if (diff === 0) {
      scale = 1
      opacity = 1
      zIndex = 10
    }
  
    return { scale, opacity, zIndex, x, hidden: false }
  }  

  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--accent-gold)] text-[var(--accent-gold)] hover:text-[var(--bg-tertiary)] shadow-lg transition-all border-2 border-[var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
          style={{ marginLeft: '0.5rem' }}
          onClick={decrementIndex}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--accent-gold)] text-[var(--accent-gold)] hover:text-[var(--bg-tertiary)] shadow-lg transition-all border-2 border-[var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
          style={{ marginRight: '0.5rem' }}
          onClick={incrementIndex}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        <div className="overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center h-[66vh]">
            <AnimatePresence initial={false}>
              {projects.map((project, idx) => {
                const { scale, opacity, zIndex, x } = getCardProps(idx)
                return (
                  <motion.div
                    key={project.id}
                    className="absolute left-1/2 top-0 flex-shrink-0 w-full sm:w-[680px] md:w-[860px] py-6 h-auto"
                    style={{
                      x: `calc(-50% + ${x}px)`,
                      scale,
                      opacity,
                      zIndex,
                      willChange: 'transform',
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity, scale, x: `calc(-50% + ${x}px)` }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  >
                    <Link href={project.link} className="flex flex-col group bg-[var(--bg-tertiary)] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition h-auto">
                      <div className="relative w-full h-[420px]">
                        <Image
                          src={project.image || '/fallback.jpg'}
                          alt={project.name || 'Project'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">{project.name}</h3>
                        <p className="text-[var(--text-secondary)] text-base line-clamp-3">{project.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dot navigation with progress bar */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex gap-2">
          {projects.map((_, idx) => {
            const isActive = selectedIndex === idx
            return (
              <button
                key={idx}
                className={`relative h-3 rounded-full overflow-hidden transition-all duration-300
                  ${isActive ? 'w-10 bg-gray-700' : 'w-3 bg-gray-400 hover:bg-white'}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive && (
                  <motion.span
                    className="absolute left-0 top-0 h-full bg-[var(--accent-gold)] rounded-full"
                    animate={{ width: `${progress}%` }}
                    initial={{ width: '0%' }}
                    transition={{ duration: 0 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsCarousel