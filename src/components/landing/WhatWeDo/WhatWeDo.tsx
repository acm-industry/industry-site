'use client'

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import CardStack from './CardStack'
import { useTheme } from '@/theme/ThemeContext'
import { landingContent } from '@/data/LandingContent'
import StarField from '@/components/global/StarField'

const WhatWeDo = () => {
  const endCardStackRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const firstCardRef = useRef<HTMLDivElement>(null)
  const headerEndRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isOverViewport, setIsOverViewport] = useState(false)
  const [descVisible, setDescVisible] = useState(true)
  const { theme } = useTheme()
  const content = landingContent[theme].whatWeDo

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
    function checkDescVisibility() {
      if (!descRef.current || !firstCardRef.current) return

      const descRect = descRef.current.getBoundingClientRect()
      const cardRect = firstCardRef.current.getBoundingClientRect()
      const cardOpacity = parseFloat(
        window.getComputedStyle(firstCardRef.current).opacity || '1'
      )

      // --- Conditions ---
      const overlaps =
        descRect.bottom > cardRect.top - 5 && descRect.top < cardRect.bottom + 5

      const cardVisible =
        cardRect.bottom > 0 && cardRect.top < window.innerHeight

      const faded = cardOpacity < 0.15

      // Hide if the first card is visible AND either overlapping or fading
      const shouldHide = cardVisible && (overlaps || faded)

      // Also hide if endCardStack is entering the viewport
      let endVisible = false
      if (endCardStackRef.current) {
        const endRect = endCardStackRef.current.getBoundingClientRect()
        endVisible =
          (endRect.top < window.innerHeight && endRect.bottom > 0) ||
          endRect.bottom < 0
      }

      setDescVisible(!(shouldHide || endVisible))
    }

    window.addEventListener('scroll', checkDescVisibility)
    window.addEventListener('resize', checkDescVisibility)
    checkDescVisibility()

    return () => {
      window.removeEventListener('scroll', checkDescVisibility)
      window.removeEventListener('resize', checkDescVisibility)
    }
  }, [])

  useEffect(() => {
    setDescVisible(true)
  }, [theme])

  const isCardOverParagraph = useInView(endCardStackRef) || isOverViewport

  return (
    <section className="relative z-10 w-full px-6 bg-[var(--color-background)] text-[var(--color-text-primary)] pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="md:sticky top-28 z-0 bg-[var(--color-background)]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isCardOverParagraph ? 0 : 1, y: 0 }}
              transition={{ duration: 0.05 }}
              style={{ willChange: 'transform, opacity' }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              {content.titleWhite}{' '}
              <span style={{ color: 'var(--color-accent-primary)', textShadow: '0 0 20px var(--color-accent-muted)' }}>
                {content.titleAccent}
              </span>
            </motion.h2>
            <motion.p
              ref={descRef}
              animate={{ opacity: descVisible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform, opacity' }}
              className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
            >
              {content.description}
            </motion.p>
          </div>
          <div ref={headerEndRef} />
        </div>
        <div>
          <div className="relative z-10">
            <CardStack
              firstCardRef={firstCardRef as React.RefObject<HTMLDivElement>}
              endCardStackRef={endCardStackRef}
              whatwedo={content.cards}
              headerHeight={headerHeight}
            />
          </div>
        </div>
      </div>

      {/* Starfield */}
      <StarField numberOfStars={300} />
    </section>
  )
}

export default WhatWeDo
