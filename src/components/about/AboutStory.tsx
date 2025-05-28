'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionGlow from '../global/SectionGlow'
import StarField from '../global/StarField'
import { aboutStoryTitle, aboutStoryParagraph1White, aboutStoryParagraph1Gold, aboutStoryParagraph2White, aboutStoryParagraph2Gold, aboutStoryParagraph3White, aboutStoryParagraph3Gold } from '@/data/AboutData'
import { useEffect, useState } from 'react'

// Typewriter effect component
function TypewriterText({ text, isGold = false, onComplete }: { text: string, isGold?: boolean, onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, isGold ? 65 : 15) // Slower for gold text

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, isGold, onComplete])

  return (
    <span className={isGold ? "text-[var(--accent-gold)] font-semibold" : ""}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-[var(--accent-gold)] ml-[1px]"
        />
      )}
    </span>
  )
}

export default function AboutStorySection() {
  // step: 0 = 1st white, 1 = 1st gold, 2 = 2nd white, 3 = 2nd gold, 4 = 3rd white, 5 = 3rd gold
  const [step, setStep] = useState(0)

  // Handlers for each part
  const handleWhite1Complete = () => setStep(1)
  const handleGold1Complete = () => setStep(2)
  const handleWhite2Complete = () => setStep(3)
  const handleGold2Complete = () => setStep(4)
  const handleWhite3Complete = () => setStep(5)
  // No handler needed for last gold part

  return (
    <section className="relative w-full px-6 py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden smooth-element">
      <SectionGlow size={700} opacity={0.04} />
      <StarField numberOfStars={100} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 smooth-element"
          style={{ willChange: 'transform, opacity' }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          <Image
            src="/team/team.JPG"
            alt="ACM Industry Team"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.15, 
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.06)]"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1],
              filter: { duration: 0.4, ease: "easeOut" }
            }}
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {aboutStoryTitle}
          </motion.h2>

          <div className="text-[var(--text-secondary)] text-lg leading-relaxed">
            <p className="mb-5">
              {/* 1st paragraph */}
              {step >= 0 && (
                <TypewriterText 
                  text={aboutStoryParagraph1White} 
                  onComplete={handleWhite1Complete}
                />
              )}
              {step >= 1 && (
                <TypewriterText 
                  text={aboutStoryParagraph1Gold} 
                  isGold 
                  onComplete={handleGold1Complete}
                />
              )}
            </p>

            <p className="mb-5">
              {/* 2nd paragraph */}
              {step >= 2 && (
                <TypewriterText 
                  text={aboutStoryParagraph2White} 
                  onComplete={handleWhite2Complete}
                />
              )}
              {step >= 3 && (
                <TypewriterText 
                  text={aboutStoryParagraph2Gold} 
                  isGold 
                  onComplete={handleGold2Complete}
                />
              )}
            </p>

            <p>
              {/* 3rd paragraph */}
              {step >= 4 && (
                <TypewriterText 
                  text={aboutStoryParagraph3White} 
                  onComplete={handleWhite3Complete}
                />
              )}
              {step >= 5 && (
                <TypewriterText 
                  text={aboutStoryParagraph3Gold} 
                  isGold
                />
              )}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Add custom CSS for smooth animations */}
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