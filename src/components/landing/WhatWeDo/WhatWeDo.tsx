'use client'

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import CardStack from './CardStack'
import { whatwedo, whatwedoTitleWhite, whatwedoTitleGold, whatwedoDescription } from '@/data/WhatWeDoData'
import StarField from '@/components/global/StarField'

const WhatWeDo = () => {
  const endCardStackRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const firstCardRef = useRef<HTMLDivElement>(null)
  const headerEndRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isOverViewport, setIsOverViewport] = useState(false)
  const [descVisible, setDescVisible] = useState(true)

  useLayoutEffect(() => {
    function updateHeight() {
      if (headerEndRef.current) {
        setHeaderHeight(headerEndRef.current.offsetTop);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

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

  useEffect(() => {
    function checkOverlap() {
      if (descRef.current && firstCardRef.current) {
        const descRect = descRef.current.getBoundingClientRect();
        const cardRect = firstCardRef.current.getBoundingClientRect();
        // Hide if description is within the vertical bounds of the first card
        setDescVisible(descRect.bottom <= cardRect.top - 5 || descRect.top >= cardRect.bottom + 5);
      }
    }
    window.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);
    checkOverlap();
    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, []);

  const isCardOverParagraph = useInView(endCardStackRef) || isOverViewport

  return (
    <section className="relative z-10 w-full px-6 bg-[var(--background)] text-[var(--foreground)] pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="md:sticky top-28 z-0 bg-[var(--background)]">
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
              ref={descRef}
              animate={{ opacity: descVisible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform, opacity' }}
              className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
            >
              {whatwedoDescription}
            </motion.p>
          </div>
          <div ref={headerEndRef} />
        </div>
        <div>
          <div className="relative z-10">
            <CardStack firstCardRef={firstCardRef as React.RefObject<HTMLDivElement>} endCardStackRef={endCardStackRef} whatwedo={whatwedo} headerHeight={headerHeight} />
          </div>
        </div>
      </div>

      {/* Starfield */}
      <StarField numberOfStars={300} />
    </section>
  )
}

export default WhatWeDo