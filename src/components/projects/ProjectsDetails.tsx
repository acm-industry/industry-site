'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import StarField from '../global/StarField';

const projectData = [
  {
    title: 'Project One',
    description: 'A cutting-edge solution designed to revolutionize the way we interact with data in real time.',
  },
  {
    title: 'Project Two',
    description: 'Empowering communities through intelligent tools and seamless collaboration frameworks.',
  },
  {
    title: 'Project Three',
    description: 'An AI-powered assistant that enhances productivity and streamlines daily workflows.',
  },
  {
    title: 'Project Four',
    description: 'A mobile-first platform reimagining user engagement through responsive design and smart UX.',
  },
];

export default function ScrollProjectShowcase() {
  const containerRef = useRef(null);
  const total = projectData.length;

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
      <div className={`relative h-[${total * 100}vh]`}>
        <div className="sticky top-10 h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="relative w-[85vw] h-[80vh] rounded-4xl border border-white/20 bg-white/5 shadow-xl backdrop-blur-lg overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: '10%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-10%' }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                {projectData[activeIndex].title}
              </h2>
              <p className="text-md sm:text-lg max-w-xl text-white/70">
                {projectData[activeIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}