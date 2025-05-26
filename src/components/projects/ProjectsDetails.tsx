'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import StarField from '../global/StarField';
import { projects } from '../../data/ProjectsData';
import Image from 'next/image';
import MediaCarousel from './MediaCarousel';
import { useDebounce } from 'use-debounce';

export default function ScrollProjectShowcase() {
  const containerRef = useRef(null);
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [rawIndex, setRawIndex] = useState(0);
  const [debouncedIndex] = useDebounce(rawIndex, 60); // 60ms debounce

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.min(total - 1, Math.floor(v * total));
      setRawIndex(idx);
    });
  }, [scrollYProgress, total]);

  const current = projects[debouncedIndex];

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

      <div className="max-w-5xl mx-auto text-center px-6 pt-32 pb-0 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4"
          style={{ color: textPrimary }}
        >
          Dive Into{' '}
          <motion.span
            layout
            layoutId="highlight"
            className="text-[var(--accent-gold)]"
            style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
          >
            Our Work
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          className="text-md sm:text-lg lg:text-xl max-w-2xl mx-auto"
          style={{ color: textSecondary }}
        >
          A showcase of the projects we&apos;ve built — what they are, who built them, and why they matter.
        </motion.p>
      </div>

      <div id="project-details" className="relative" style={{ height: `${total * 175}vh` }}>
        <div className="sticky top-10 h-screen flex items-center justify-center" style={{ overflowX: 'clip' }}>
          <div className="relative w-full max-w-[85vw] h-[80vh] rounded-4xl overflow-hidden">
            <motion.div
              key={`bg-${debouncedIndex}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 z-0 rounded-4xl origin-left overflow-hidden"
              style={{ backgroundColor: background }}
            />
            <motion.div
              key={`border-${debouncedIndex}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 z-10 pointer-events-none rounded-4xl overflow-hidden"
              style={{
                boxShadow: `0 0 0 1px ${adjustedBorder}, 0 0 12px ${adjustedBorder}, inset 0 0 0.5px ${adjustedBorder}`,
                border: `1px solid ${adjustedBorder}`,
                ...(shouldUseBlend ? { mixBlendMode: 'screen' } : {}),
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.link.split('#')[1]}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute z-20 top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-left px-6 sm:px-12 gap-6 sm:gap-10 py-3 md:py-6 sm:py-10 overflow-hidden"
              >
                <motion.div
                  layout
                  className="basis-full lg:basis-[40%] space-y-4 sm:space-y-5 overflow-hidden"
                  transition={{ layout: { duration: 0.3 } }}
                >
                  <div className="relative w-28 h-12 lg:w-48 sm:h-20 mx-auto sm:mx-0">
                    <Image
                      src={`/companies/${current.company_logo}`}
                      alt={`${current.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </div>

                  <div
                    className="flex items-center gap-2 flex-wrap text-[0.6rem] md:text-sm font-medium justify-center sm:justify-start"
                    style={{ color: textPrimary }}
                  >
                    <span>{debouncedIndex + 1} — {projects.length}</span>
                    {current.tags?.map((tag, i) => (
                      <motion.span
                        layoutId={`tag-${i}-${tag}`}
                        key={i}
                        className="px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wide"
                        style={{
                          backgroundColor: tagBg,
                          color: tagText,
                          border: `1px solid ${tagBorder}`,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.h2
                    layout
                    className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center sm:text-left overflow-hidden"
                    style={{ color: textPrimary }}
                  >
                    {current.name}
                  </motion.h2>

                  <motion.p
                    layout
                    className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl max-w-xl mx-auto sm:mx-0 overflow-hidden"
                    style={{ color: textSecondary }}
                  >
                    {current.long_description}
                  </motion.p>

                  <motion.div
                    layout
                    className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2 justify-center sm:justify-start overflow-hidden"
                  >
                    {current.external_links?.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full px-3 py-1 text-xs md:text-sm hover:opacity-80 transition"
                        style={{
                          backgroundColor: buttonBg,
                          color: buttonText,
                          border: `1px solid ${buttonBorder}`,
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  key={`media-${current.name}`}
                  className="basis-full lg:basis-[60%] max-h-[380px] sm:max-h-[400px] lg:max-h-[600px] w-full rounded-2xl overflow-hidden flex items-start justify-center relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ backgroundColor: mediaBg }}
                >
                  <MediaCarousel key={current.name} media={current.images} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}