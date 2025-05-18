'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CardStack from './CardStack'

const WhatWeDo = () => {
  const [stars, setStars] = useState<{x: number, y: number, size: number, delay: number}[]>([])
  const endCardStackRef = useRef<HTMLDivElement>(null)
  const [isOverViewport, setIsOverViewport] = useState(false)

  useEffect(() => {
    setStars(
      Array.from({ length: 200 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  useEffect(() => {
    const checkPosition = () => {
      if (endCardStackRef.current) {
        const rect = endCardStackRef.current.getBoundingClientRect()
        setIsOverViewport(rect.top < window.innerHeight / 2)
      }
    }

    window.addEventListener('scroll', checkPosition)
    checkPosition() // Initial check

    return () => window.removeEventListener('scroll', checkPosition)
  }, [])

  const isCardOverParagraph = useInView(endCardStackRef) || isOverViewport

  return (
    <section className="relative z-10 w-full px-6 pt-32 md:pt-40 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-28 z-0 bg-[var(--background)]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isCardOverParagraph ? 0 : 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              What We <span style={{ color: 'var(--accent-gold)', textShadow: '0 0 20px rgba(255, 207, 82, 0.15)' }}>Do</span>
            </motion.h2>
            <motion.p
              animate={{ opacity: isCardOverParagraph ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
            >
              We connect UCSB students with industry to build real products, solve meaningful problems, and shape the future of tech — together.
            </motion.p>
          </div>
        </div>
        <div>
          <div className="relative z-10">
            <CardStack endCardStackRef={endCardStackRef} />
          </div>
        </div>
      </div>

      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: 0.2,
              filter: 'blur(0.5px)',
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo