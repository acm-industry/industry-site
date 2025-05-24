'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
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

  // Track current scroll position as index
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.min(total - 1, Math.floor(v * total));
      setActiveIndex(idx);
    });
  }, [scrollYProgress, total]);

  return (
    <section className="relative w-full bg-black text-[var(--foreground)]" ref={containerRef}>
      <StarField numberOfStars={100} />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center px-6 pt-32 pb-0 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.08)]"
        >
          Dive Into{' '}
          <span
            className="text-[var(--accent-gold)]"
            style={{ textShadow: '0 0 20px rgba(255, 207, 82, 0.3)' }}
          >
            Our Work
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-md sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
        >
          A showcase of the projects we’ve built — what they are, who built them, and why they matter.
        </motion.p>
      </div>

      {/* Scroll Zone */}
      <div id='project-details' className="relative" style={{ height: `${total * 175}vh` }}>
        <div className="sticky top-10 h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="relative w-[85vw] h-[80vh] rounded-4xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-lg overflow-hidden">
            <motion.div
              key={activeIndex}
              id={projects[activeIndex].link.split('#')[1]}
              initial={{ opacity: 0, y: '10%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-10%' }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-left px-6 sm:px-12 gap-10"
            >
              {/* Left section */}
              <div className="basis-[40%] grow-0 shrink-0 space-y-5">
                {/* Company Logo */}
                <div className="w-50 h-28 relative mb-4 mt-6">
                  <Image
                    src={`/companies/${projects[activeIndex].company_logo}`}
                    alt={`${projects[activeIndex].name} logo`}
                    fill
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>

                {/* Project # and tags */}
                <div className="flex items-center gap-3 flex-wrap text-white text-sm font-medium">
                  <span>{activeIndex + 1} — {projects.length}</span>
                  {projects[activeIndex].tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {projects[activeIndex].name}
                </h2>

                {/* Description */}
                <p className="text-white/70 text-md sm:text-lg max-w-xl">
                  {projects[activeIndex].long_description}
                </p>

                {/* Link group */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {projects[activeIndex].external_links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-sm text-white hover:bg-white/10 transition"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right section (image or video) */}
              <div className="basis-[60%] grow-0 shrink-0 h-[500px] sm:h-[600px] rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center relative">
                <MediaCarousel key={projects[activeIndex].name} media={projects[activeIndex].images} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}