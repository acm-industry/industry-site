'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import StarField from '../global/StarField';
import { projects } from '../../data/ProjectsData';
import Image from 'next/image';
import MediaCarouselRaw from './MediaCarousel';
import { useDebounce } from 'use-debounce';

const MediaCarousel = React.memo(MediaCarouselRaw);

export default function ScrollProjectShowcase() {
  const containerRef = useRef(null);
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [rawIndex, setRawIndex] = useState(0);
  const [debouncedIndex] = useDebounce(rawIndex, 200);

  // Memoize current project
  const current = useMemo(() => projects[debouncedIndex], [debouncedIndex]);

  useEffect(() => {
    let lastIdx = rawIndex;
    const handler = (v: number) => {
      const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
      if (idx !== lastIdx) {
        setRawIndex(idx);
        lastIdx = idx;
      }
    };
    const unsub = scrollYProgress.on('change', handler);
    return () => unsub();
  }, [scrollYProgress, total, rawIndex]);

  const colors = current.colors || {};

  const background = colors.background || '#0B0B0B';
  const border = colors.border || 'rgba(255,255,255,0.2)';
  const textPrimary = colors.textPrimary || '#ffffff';
  const textSecondary = colors.textSecondary || 'rgba(255,255,255,0.7)';
  const accent = colors.accent || '#ffffff';
  const accentBg = colors.accent ? `${colors.accent}1A` : 'rgba(255,255,255,0.1)';
  const mediaBg = colors.mediaBackground || 'rgba(0,0,0,0.2)';

  const tagBg = colors.tag?.background || accentBg;
  const tagText = colors.tag?.text || accent;
  const tagBorder = colors.tag?.border || 'transparent';

  const buttonBg = colors.button?.background || 'transparent';
  const buttonText = colors.button?.text || textPrimary;
  const buttonBorder = colors.button?.border || `${accent}66`;

  const useBlendMode = (bg: string) => {
    try {
      const rgb = bg.startsWith('#') ? parseInt(bg.slice(1), 16) : 0;
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = rgb & 0xff;
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness < 128;
    } catch {
      return true;
    }
  };

  const shouldUseBlend = useBlendMode(background);
  const adjustedBorder = !shouldUseBlend && border.startsWith('rgba') ? 'rgba(0, 0, 0, 0.1)' : border;

  return (
    <section className="relative max-w-[100vw] w-full bg-black text-[var(--foreground)] overflow-x-clip" ref={containerRef}>
      <StarField numberOfStars={3000} />

      {/* Custom CSS for aggressive scroll snapping */}
      <style jsx>{`
        #project-details {
          scroll-behavior: smooth;
          -webkit-scroll-snap-type: y mandatory;
          -ms-scroll-snap-type: y mandatory;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
          scroll-snap-points-y: repeat(100vh);
          -webkit-scroll-snap-points-y: repeat(100vh);
          scroll-snap-destination: 0% 0%;
          -webkit-scroll-snap-destination: 0% 0%;
          overscroll-behavior: none;
          -webkit-overscroll-behavior: none;
        }
        
        #project-details > div[style*="scroll-snap-align"] {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          -webkit-scroll-snap-coordinate: 0% 0%;
          scroll-snap-coordinate: 0% 0%;
        }
        
        .snap-container {
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        
        .smooth-element {
          will-change: transform, opacity, filter;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          #project-details {
            scroll-behavior: smooth;
          }
        }
        
        /* Force hardware acceleration */
        .hw-accelerated {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          will-change: transform;
        }
      `}</style>

      <div className="max-w-5xl mx-auto text-center px-6 pt-32 pb-0 z-10 relative snap-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4"
          style={{ color: textPrimary, willChange: 'transform, opacity' }}
        >
          Dive Into{' '}
          <motion.span
            layout
            layoutId="highlight"
            className="text-[var(--accent-gold)]"
            style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)', willChange: 'transform' }}
          >
            Our Work
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          className="text-md sm:text-lg lg:text-xl max-w-2xl mx-auto"
          style={{ color: textSecondary, willChange: 'transform, opacity' }}
        >
          A showcase of the projects we&apos;ve built — what they are, who built them, and why they matter.
        </motion.p>
      </div>

      <div 
        id="project-details" 
        className="relative snap-container" 
        style={{ 
          height: `${total * 100}vh`, 
          scrollSnapType: 'y mandatory',
          scrollSnapStop: 'always'
        }}
      >
        {/* Invisible scroll snap points */}
        {projects.map((_, index) => (
          <div
            key={`snap-point-${index}`}
            className="absolute w-full pointer-events-none hw-accelerated"
            style={{
              height: '100vh',
              top: `${index * 100}vh`,
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always'
            }}
          />
        ))}

        <div 
          className="sticky top-10 h-screen flex items-center justify-center snap-container" 
          style={{ 
            overflowX: 'clip',
            scrollSnapAlign: 'start'
          }}
        >
          <div className="relative w-full max-w-[85vw] h-[80vh] rounded-4xl overflow-hidden smooth-element">
            <motion.div
              key={`bg-${debouncedIndex}`}
              initial={{ scaleX: 0, opacity: 0.8 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                scaleX: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.8, ease: "easeOut" }
              }}
              className="absolute inset-0 z-0 rounded-4xl origin-left overflow-hidden"
              style={{ backgroundColor: background }}
            />
            <motion.div
              key={`border-${debouncedIndex}`}
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ 
                duration: 1.0, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.15,
                filter: { duration: 0.6, ease: "easeOut" }
              }}
              className="absolute inset-0 z-10 pointer-events-none rounded-4xl overflow-hidden"
              style={{
                border: `1px solid ${adjustedBorder}`,
                ...(shouldUseBlend ? { mixBlendMode: 'screen' } : {}),
              }}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`project-${debouncedIndex}-${current.name}`}
                initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, scale: 0.96, filter: 'blur(8px)' }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  filter: { duration: 0.5, ease: "easeOut" }
                }}
                className="absolute z-20 top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-left px-6 sm:px-12 gap-0 sm:gap-10 py-3 md:py-6 sm:py-10 overflow-hidden smooth-element"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                <motion.div
                  className="basis lg:basis-[40%] space-y-2 sm:space-y-5 pt-2 sm:pt-5 overflow-hidden smooth-element"
                  initial={{ opacity: 0, x: -50, scale: 0.94, rotateX: 5 }}
                  animate={{ opacity: 1, x: 0, scale: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.2,
                    opacity: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                    rotateX: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <motion.div 
                    className="relative w-28 h-12 lg:w-48 sm:h-20 mx-auto sm:mx-0"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.25,
                      scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }
                    }}
                  >
                    <Image
                      src={`/companies/${current.company_logo}`}
                      alt={`${current.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-2 flex-wrap text-[0.6rem] md:text-sm font-medium justify-center sm:justify-start"
                    style={{ color: textPrimary }}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.3,
                      filter: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.35, 
                        ease: [0.34, 1.56, 0.64, 1] 
                      }}
                    >
                      {debouncedIndex + 1} — {projects.length}
                    </motion.span>
                    {current.tags?.map((tag, i) => (
                      <motion.span
                        key={`${debouncedIndex}-tag-${i}-${tag}`}
                        className="px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wide"
                        style={{
                          backgroundColor: tagBg,
                          color: tagText,
                          border: `1px solid ${tagBorder}`,
                        }}
                        initial={{ opacity: 0, scale: 0.6, y: 15, rotateZ: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.34, 1.56, 0.64, 1], 
                          delay: 0.4 + i * 0.1,
                          rotateZ: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                        }}
                        whileHover={{
                          scale: 1.05,
                          rotateZ: 2,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.h2
                    className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center sm:text-left overflow-hidden"
                    style={{ color: textPrimary }}
                    initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.35,
                      filter: { duration: 0.5, ease: "easeOut" }
                    }}
                  >
                    {current.name}
                  </motion.h2>

                  <motion.p
                    className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl max-w-xl mx-auto sm:mx-0 overflow-hidden"
                    style={{ color: textSecondary }}
                    initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.45,
                      filter: { duration: 0.5, ease: "easeOut" }
                    }}
                  >
                    {current.long_description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2 pb-2 sm:pb-3 justify-center sm:justify-start overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.55 
                    }}
                  >
                    {current.external_links?.map((link, i) => (
                      <motion.a
                        key={`${debouncedIndex}-link-${i}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full px-3 py-1 text-xs md:text-sm transition-all duration-200"
                        style={{
                          backgroundColor: buttonBg,
                          color: buttonText,
                          border: `1px solid ${buttonBorder}`,
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          opacity: 0.8,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                        whileTap={{ 
                          scale: 0.98, 
                          transition: { duration: 0.1 }
                        }}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.16, 1, 0.3, 1], 
                          delay: 0.6 + i * 0.08
                        }}
                      >
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="max-h-[30%] lg:max-h-[100%] lg:max-w-[60%] w-full rounded-2xl overflow-hidden flex items-start justify-center relative"
                  style={{ backgroundColor: mediaBg }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.9, 
                    x: 50, 
                    rotateY: 8, 
                    rotateX: 3,
                    filter: 'blur(8px)'
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    rotateY: 0, 
                    rotateX: 0,
                    filter: 'blur(0px)'
                  }}
                  transition={{ 
                    duration: 1.0, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.25,
                    opacity: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                    filter: { duration: 0.6, ease: "easeOut" },
                    rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    rotateX: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: -1,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  <MediaCarousel key={`${debouncedIndex}-${current.name}`} media={current.images} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export a function to scroll to the correct project details snap point
export function scrollToProjectDetailsById(id: string) {
  const index = projects.findIndex(p => p.id === id);
  const detailsSection = document.getElementById('project-details');
  if (index !== -1 && detailsSection) {
    const sectionTop = detailsSection.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop + index * window.innerHeight;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  }
}