'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import StarField from '../global/StarField';
import { projects } from '../../data/ProjectsData';
import Image from 'next/image';
import MediaCarousel from './MediaCarousel';

export default function ScrollProjectShowcase() {
  const containerRef = useRef(null);
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.min(total - 1, Math.floor(v * total));
      setActiveIndex(idx);
    });
  }, [scrollYProgress, total]);

  const current = projects[activeIndex];
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
    <section className="relative w-full bg-black text-[var(--foreground)]" ref={containerRef}>
      <StarField numberOfStars={3000} />

      <div className="max-w-5xl mx-auto text-center px-6 pt-32 pb-0 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          style={{ color: textPrimary }}
        >
          Dive Into{' '}
          <span style={{ color: accent, textShadow: `0 0 20px ${accent}44` }}>Our Work</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-md sm:text-lg max-w-2xl mx-auto"
          style={{ color: textSecondary }}
        >
          A showcase of the projects we’ve built — what they are, who built them, and why they matter.
        </motion.p>
      </div>

      <div id="project-details" className="relative" style={{ height: `${total * 175}vh` }}>
        <div className="sticky top-10 h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="relative w-[85vw] h-[80vh] rounded-4xl overflow-hidden">
            <motion.div
              key={`bg-${activeIndex}`}
              initial={{ scaleX: 0, originX: 0, originY: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 z-0 rounded-4xl"
              style={{ backgroundColor: background }}
            />
            <motion.div
              key={`border-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 z-10 pointer-events-none rounded-4xl"
              style={{
                boxShadow: `
                  0 0 0 1px ${adjustedBorder},
                  0 0 12px ${adjustedBorder},
                  inset 0 0 0.5px ${adjustedBorder}
                `,
                border: `1px solid ${adjustedBorder}`,
                ...(shouldUseBlend ? { mixBlendMode: 'screen' } : {}),
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.link.split('#')[1]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute z-20 top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-left px-6 sm:px-12 gap-10"
              >
                <div className="basis-[40%] grow-0 shrink-0 space-y-5">
                  <div className="w-50 h-28 relative mb-4 mt-6">
                    <Image
                      src={`/companies/${current.company_logo}`}
                      alt={`${current.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </div>

                  <div className="flex items-center gap-3 flex-wrap text-sm font-medium" style={{ color: textPrimary }}>
                    <span>{activeIndex + 1} — {projects.length}</span>
                    {current.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs uppercase tracking-wide"
                        style={{
                          backgroundColor: tagBg,
                          color: tagText,
                          border: `1px solid ${tagBorder}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: textPrimary }}>
                    {current.name}
                  </h2>

                  <p className="text-md sm:text-lg max-w-xl" style={{ color: textSecondary }}>
                    {current.long_description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {current.external_links?.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm hover:opacity-80 transition"
                        style={{
                          backgroundColor: buttonBg,
                          color: buttonText,
                          border: `1px solid ${buttonBorder}`,
                        }}
                      >
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <motion.div
                  key={`media-${current.name}`}
                  className="basis-[60%] grow-0 shrink-0 max-h-[600px] w-full rounded-2xl overflow-hidden flex items-start justify-center relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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