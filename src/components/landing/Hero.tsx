'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MoveDown } from 'lucide-react'
import acmIndustryLogo from '@/public/club-logos/industry-logo.png'
import { techTags, heroDescription, heroTitleWhite, heroTitleGold } from '@/data/HeroData'
import StarField from '../global/StarField'

function FloatingTag({ tag, left, top, i }: { tag: string; left: number; top: number; i: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const phase = useRef(Math.random() * Math.PI * 2);
  useAnimationFrame((t) => {
    const time = t / 1000;
    setPos({
      x: Math.sin(time * 0.6 + phase.current + i) * 10,
      y: Math.cos(time * 0.66 + phase.current + i) * 10,
    });
  });
  return (
    <motion.div
      className="absolute px-5 py-2.5 rounded-full text-sm font-medium shadow whitespace-nowrap"
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
      }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'linear', ease: 'linear' }}
    >
      {tag}
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const tagPositions = useMemo(() => {
    return techTags.map((tag, i) => {
      const baseRadius = 200
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
  }, [])

  if (!mounted) return null

  return (
    <section
      className="relative h-screen h-[100vh] overflow-hidden"
      style={{ background: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 relative z-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold"
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }}
          >
            {heroTitleWhite}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold"
            style={{ 
              color: 'var(--accent-gold)',
              textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' 
            }}
          >
            {heroTitleGold}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-lg md:text-lg max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-black bg-[var(--accent-gold)] shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#ffdc70] hover:shadow-[0_0_20px_rgba(255,207,82,0.5)]"
            >
              Explore Projects
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-[var(--accent-gold)] text-[var(--accent-gold)] shadow-md transition-all duration-300 hover:bg-[var(--accent-gold)] hover:text-black hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,207,82,0.5)]"
            >
              Partner With Us
            </Link>
          </div>

          {/* Affiliation Subtext */}
          <p className="mt-4 text-sm text-[var(--text-secondary)] italic">
            Powered by ACM UCSB, in collaboration with BruinAI.
          </p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 flex items-center gap-2 text-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            <MoveDown size={16} strokeWidth={1.75} />
            Scroll to explore
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0"
        >
          <div className="relative w-[300px] h-[300px]">
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
                <Image
                  src={acmIndustryLogo}
                  alt="ACM Industry Logo"
                  className="object-contain"
                  fill
                />
              </div>
            </div>

            {/* Floating Tags */}
            {tagPositions.map(({ tag, left, top }, i) => (
              <FloatingTag key={tag} tag={tag} left={left} top={top} i={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Starfield */}
      <StarField numberOfStars={80} />
    </section>
  )
}