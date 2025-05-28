'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CardStack from './CardStack'
import { whatwedo, whatwedoTitleWhite, whatwedoTitleGold, whatwedoDescription } from '@/data/WhatWeDoData'
import StarField from '@/components/global/StarField'

const WhatWeDo = () => {
  const endCardStackRef = useRef<HTMLDivElement>(null)
  const [isOverViewport, setIsOverViewport] = useState(false)

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
    <section className="relative z-10 w-full px-6 bg-[var(--background)] text-[var(--foreground)] pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-28 z-0 bg-[var(--background)]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isCardOverParagraph ? 0 : 1, y: 0 }}
              transition={{ duration: 0.05 }}
              style={{ willChange: 'transform, opacity' }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              {whatwedoTitleWhite} <span style={{ color: 'var(--accent-gold)', textShadow: '0 0 20px rgba(255, 207, 82, 0.15)' }}>{whatwedoTitleGold}</span>
            </motion.h2>
            <motion.p
              animate={{ opacity: isCardOverParagraph ? 0 : 1 }}
              transition={{ duration: 0.025 }}
              style={{ willChange: 'transform, opacity' }}
              className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
            >
              {whatwedoDescription}
            </motion.p>
          </div>
        </div>
        <div>
          <div className="relative z-10">
            <CardStack endCardStackRef={endCardStackRef} whatwedo={whatwedo} />
          </div>
        </div>
      </div>

      {/* Starfield */}
      <StarField numberOfStars={300} />
    </section>
  )
}

export default WhatWeDo