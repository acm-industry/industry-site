'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import SectionGlow from '../global/SectionGlow'
import StarField from '../global/StarField'
import { aboutContent } from '@/data/AboutData'
import { useTheme } from '@/theme/ThemeContext'

type RenderSegment = {
  text: string
  highlight?: boolean
  paragraphIndex: number
}

const PRIMARY_SPEED = 15
const HIGHLIGHT_SPEED = 65

export default function AboutStorySection() {
  const { theme, tokens } = useTheme()
  const story = aboutContent[theme].story
  const isACM = theme === 'acm'

  const segments = useMemo<RenderSegment[]>(() => {
    const result: RenderSegment[] = []
    story.paragraphs.forEach((paragraph, paragraphIndex) => {
      paragraph.segments.forEach((segment) => {
        result.push({ ...segment, paragraphIndex })
      })
    })
    return result
  }, [story])

  const segmentIndexLookup = useMemo(() => {
    let counter = 0
    return story.paragraphs.map((paragraph) =>
      paragraph.segments.map(() => counter++)
    )
  }, [story])

  const totalSegments = segments.length
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    setActiveSegmentIndex(0)
    setTypedText('')
  }, [story])

  useEffect(() => {
    if (!segments.length || activeSegmentIndex >= segments.length) return

    const segment = segments[activeSegmentIndex]
    const fullText = segment.text

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, segment.highlight ? HIGHLIGHT_SPEED : PRIMARY_SPEED)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setActiveSegmentIndex((prev) => prev + 1)
      setTypedText('')
    }, 160)
    return () => clearTimeout(timeout)
  }, [typedText, activeSegmentIndex, segments])

  const renderSegment = (segment: { text: string; highlight?: boolean }, globalIndex: number) => {
    const isCompleted = activeSegmentIndex > globalIndex || activeSegmentIndex >= totalSegments
    const isActive = activeSegmentIndex === globalIndex && activeSegmentIndex < totalSegments
    const value = isCompleted ? segment.text : isActive ? typedText : ''

    if (!value && !isActive) {
      return null
    }

    return (
      <span
        key={`${globalIndex}`}
        className={segment.highlight ? 'text-[var(--color-accent-primary)] font-semibold' : ''}
      >
        {value}
        {isActive && value.length < (segments[activeSegmentIndex]?.text.length ?? 0) && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-[var(--color-accent-primary)] ml-[1px]"
          />
        )}
      </span>
    )
  }

  return (
    <section
      className="relative w-full px-6 py-32 overflow-hidden text-[var(--color-text-primary)] smooth-element transition-colors duration-500"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Background Effects */}
      <SectionGlow
        size={750}
        opacity={isACM ? 0.035 : 0.05}
        color={isACM ? 'var(--color-accent-primary)' : 'var(--color-accent-highlight)'}
      />
      <StarField numberOfStars={90} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border smooth-element"
          style={{
            borderColor: 'var(--color-border)',
            boxShadow: '0 0 20px var(--color-accent-muted)',
            willChange: 'transform, opacity',
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 0 35px var(--color-accent-muted)',
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <Image
            src="/team/team.JPG"
            alt={`${tokens.copy.orgName} team`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>

        {/* Right: Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold mb-6 text-[var(--color-accent-primary)] drop-shadow-[0_0_10px_var(--color-accent-muted)]"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              filter: { duration: 0.4, ease: 'easeOut' },
            }}
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {story.title}
          </motion.h2>

          <div className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            {story.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className={paragraphIndex === story.paragraphs.length - 1 ? '' : 'mb-5'}
              >
                {paragraph.segments.map((segment, segmentPosition) =>
                  renderSegment(segment, segmentIndexLookup[paragraphIndex][segmentPosition])
                )}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .smooth-element {
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}