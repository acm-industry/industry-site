'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion, useAnimationFrame, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MoveDown } from 'lucide-react'
import acmIndustryLogo from '@/public/club-logos/industry-logo.png'
import { techTags, heroDescription, heroTitleWhite, heroTitleGold } from '@/data/HeroData'
import StarField from '../global/StarField'
import SectionGlow from '../global/SectionGlow'

function FloatingTag({ tag, left, top, i }: { tag: string; left: number; top: number; i: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const phase = useRef(Math.random() * Math.PI * 2)

  useAnimationFrame((t) => {
    const time = t / 1000
    setPos({
      x: Math.sin(time * 0.6 + phase.current + i) * 12,
      y: Math.cos(time * 0.66 + phase.current + i) * 12,
    })
  })

  return (
    <motion.div
      className="absolute px-5 py-2.5 rounded-full text-sm font-medium shadow whitespace-nowrap smooth-element"
      style={{
        background: 'rgba(129, 189, 200, 0.15)',
        border: '1px solid rgba(129, 189, 200, 0.3)',
        backdropFilter: 'blur(8px)',
        color: 'white',
        left: `${left}px`,
        top: `${top}px`,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 15px rgba(129, 189, 200, 0.15), 0 0 0 1px rgba(129, 189, 200, 0.1)',
        textShadow: '0 0 20px rgba(129, 189, 200, 0.9), 0 0 30px rgba(129, 189, 200, 0.5)',
        willChange: 'transform'
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.6, 
        filter: 'blur(4px)',
        rotateZ: -10
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)',
        rotateZ: 0,
        x: pos.x, 
        y: pos.y 
      }}
      transition={{ 
        duration: 0.8,
        delay: 1.2 + i * 0.1,
        ease: [0.16, 1, 0.3, 1],
        x: { type: 'linear', ease: 'linear' },
        y: { type: 'linear', ease: 'linear' },
        filter: { duration: 0.5, ease: "easeOut" },
        rotateZ: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
      }}
      whileHover={{
        scale: 1.1,
        rotateZ: 5,
        boxShadow: '0 6px 20px rgba(129, 189, 200, 0.25), 0 0 0 1px rgba(129, 189, 200, 0.2)',
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {tag}
    </motion.div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    const updateSize = () => setWindowWidth(window.innerWidth)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const tagPositions = useMemo(() => {
    if (!windowWidth) return []

    const isMobile = windowWidth < 768
    const baseRadius = isMobile ? 140 : 200

    return techTags.map((tag, i) => {
      const radiusJitter = Math.random() * 20 - 10
      const angleStep = (2 * Math.PI) / techTags.length
      const angleOffset = Math.random() * 0.15 - 0.075
      const angle = i * angleStep + angleOffset
      const radius = baseRadius + radiusJitter

      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const left = 95 + x
      const top = 130 + y

      return { tag, left, top }
    })
  }, [windowWidth])

  return (
    <section
      className="relative min-h-[800px] md:pb-32 lg:h-[100vh] overflow-visible smooth-element"
      style={{ 
        background: 'var(--background)', 
        color: 'var(--foreground)',
        willChange: 'transform'
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 sm:px-24 relative z-10 pt-32 pb-40 md:pt-32 lg:pt-40 md:pb-0">
        {/* Left Column */}
        <motion.div
          className="
            w-full 
            flex 
            flex-col 
            items-center 
            text-center 
            pb-16 md:pb-32 
            lg:items-start 
            lg:text-left 
            lg:w-1/2 
            lg:pb-0
            smooth-element
          "
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-5xl lg:text-6xl font-extrabold smooth-element"
            style={{ 
              textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              willChange: 'transform, opacity'
            }}
          >
            {heroTitleWhite}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-5xl lg:text-6xl font-extrabold smooth-element"
            style={{
              color: 'var(--accent-gold)',
              textShadow: '0 0 20px rgba(255, 207, 82, 0.3)',
              willChange: 'transform, opacity'
            }}
          >
            {heroTitleGold}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ 
              delay: 0.6, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              filter: { duration: 0.5, ease: "easeOut" }
            }}
            className="mt-6 text-lg lg:text-lg max-w-xl smooth-element"
            style={{ 
              color: 'var(--text-secondary)',
              willChange: 'transform, opacity, filter'
            }}
          >
            {heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row lg:justify-start md:justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.8, 
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.9, 
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Link
                href="/projects"
                className="block px-6 py-3 rounded-lg text-sm font-semibold text-black bg-[var(--accent-gold)] shadow-md transition-all duration-300 hover:bg-[#ffdc70] hover:shadow-[0_0_20px_rgba(255,207,82,0.5)]"
              >
                Explore Projects
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 1.0, 
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Link
                href="/services"
                className="block px-6 py-3 rounded-lg text-sm font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] shadow-md transition-all duration-300 hover:bg-[var(--accent-gold)] hover:text-black hover:shadow-[0_0_20px_rgba(255,207,82,0.5)]"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Affiliation Subtext */}
          <motion.p 
            className="mt-4 text-sm text-[var(--text-secondary)] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.1, 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Powered by ACM UCSB, in collaboration with BruinAI.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              delay: 1.3, 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-10 flex flex-col-reverse sm:flex-row items-center gap-2 text-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <MoveDown size={16} strokeWidth={1.75} />
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            delay: 0.4, 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="relative w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0 smooth-element"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative w-[300px] h-[300px]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 130 }}
              animate={{ opacity: 1, scale: 1, y: 130 }}
              whileHover={{
                scale: 1.05,
                y: 130
              }}
              transition={{
                // Initial animation
                delay: 0.8, 
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                // Hover animations (overrides for hover states)
                scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              <SectionGlow size={400} opacity={0.04} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
                  <Image
                    src={acmIndustryLogo}
                    alt="ACM Industry Logo"
                    className="object-contain"
                    fill
                    unoptimized={true}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Tags */}
            <AnimatePresence>
              {mounted &&
                tagPositions.map(({ tag, left, top }, i) => (
                  <FloatingTag key={tag} tag={tag} left={left} top={top} i={i} />
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Starfield */}
      <StarField numberOfStars={80} />
      {/* <SectionGlow size={900} opacity={0.02} /> */}
    </section>
  )
}