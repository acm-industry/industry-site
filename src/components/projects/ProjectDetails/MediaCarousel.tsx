'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState, memo } from 'react'
import Image from 'next/image'

const MediaCarousel = memo(({ media }: { media?: string[] | null }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!Array.isArray(media) || media.length === 0) return

    const currentMedia = media[currentIndex]
    const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.mov')

    let timeoutId: NodeJS.Timeout

    if (!isVideo) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % media.length)
      }, 4000) // Slightly longer for smoother experience
    }

    return () => clearTimeout(timeoutId)
  }, [currentIndex, media])

  // Reset loading state when index changes
  useEffect(() => {
    setIsLoading(true)
  }, [currentIndex])

  if (!Array.isArray(media) || media.length === 0) {
    return (
      <motion.div 
        className="w-full min-h-[60vh] bg-gray-700/50 backdrop-blur flex items-center justify-center rounded-2xl smooth-element"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        <span className="text-white text-lg font-medium">Coming Soon</span>
      </motion.div>
    )
  }

  const currentMedia = media[currentIndex]
  const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.mov')

  const handleVideoEnded = () => {
    setCurrentIndex((i) => (i + 1) % media.length)
  }

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <div 
      className="relative w-auto h-auto z-10 flex items-start justify-center smooth-element"
      style={{ willChange: 'transform' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`media-${currentIndex}-${currentMedia}`}
          initial={{ 
            opacity: 0, 
            scale: 0.95, 
            filter: 'blur(8px)',
            y: 20
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95, 
            filter: 'blur(8px)',
            y: -20
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            filter: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }}
          className="relative w-auto h-auto flex items-start justify-center smooth-element"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {isVideo ? (
            <motion.video
              ref={videoRef}
              src={`/projects/${currentMedia}`}
              className="w-auto h-auto object-contain smooth-element"
              style={{ 
                willChange: 'transform, opacity, filter',
                filter: isLoading ? 'blur(4px)' : 'blur(0px)',
                transition: 'filter 0.4s ease-out'
              }}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              onLoadedData={handleLoadComplete}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="relative w-auto h-auto smooth-element"
              style={{ willChange: 'transform, opacity' }}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={`/projects/${currentMedia}`}
                alt={`Project media ${currentIndex + 1}`}
                className="w-auto h-auto object-contain smooth-element"
                style={{ 
                  willChange: 'transform, opacity, filter',
                  filter: isLoading ? 'blur(4px)' : 'blur(0px)',
                  transition: 'filter 0.4s ease-out'
                }}
                width={800}
                height={600}
                unoptimized
                priority
                onLoad={handleLoadComplete}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Smooth loading indicator */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl smooth-element"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ willChange: 'opacity' }}
          >
            <motion.div
              className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ willChange: 'transform' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

MediaCarousel.displayName = 'MediaCarousel'

export default MediaCarousel