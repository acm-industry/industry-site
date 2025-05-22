'use client';

import Image from 'next/image';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  icon?: React.ReactNode;
  actionText?: string;
  actionIcon?: React.ReactNode;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  src,
  link,
  icon,
  actionText = 'See more',
  actionIcon,
  i,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.9]);
  const scale = useTransform(progress, range, [1, targetScale], { clamp: true });
  const opacity = useTransform(scale, [0.94, 0.85], [1, 0], { clamp: true });

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const baseTopVH = useMemo(() => {
    if (!windowWidth) return 15;
    if (windowWidth < 640) return 15;
    if (windowWidth < 1024) return 20;
    return 23;
  }, [windowWidth]);

  const topOffset = useTransform(progress, latest => `calc(${baseTopVH}vh - ${latest * 9}vh)`);

  const isSmall = windowWidth !== null && windowWidth < 640;

  return (
    <motion.div
      ref={container}
      className={`sticky flex flex-col justify-center items-center ${isSmall ? 'h-[100vh]' : 'h-[80vh]'} mb-[40vh]`}
      style={{ top: topOffset, willChange: 'transform' }}
    >
      <motion.div
        className="relative bg-[var(--bg-tertiary)] rounded-3xl overflow-hidden shadow-2xl w-full max-w-7xl mx-auto"
        style={{
          top: `calc(${i * 35}px)`,
          scale,
          transformOrigin: 'center center',
          willChange: 'transform',
          opacity,
        }}
      >
        <div
          className={`flex ${
            isSmall ? 'flex-col' : 'lg:flex-row'
          } w-full items-center gap-4 lg:gap-8 px-4 sm:px-6 py-6 sm:py-8`}
        >
          {/* Text Section */}
          <div
            className={`w-full ${isSmall ? '' : 'lg:w-[40%]'} flex flex-col justify-start items-start`}
          >
            {icon && (
              <div className="mb-4 flex items-center justify-start">
                <span className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-yellow-400 drop-shadow-[0_0_12px_rgba(255,207,82,0.5)] p-0">
                  {typeof icon === 'function'
                    ? React.createElement(icon, {
                        size: '100%',
                        color: '#FFCF52',
                        style: {
                          filter: 'drop-shadow(0 0 10px rgba(255,207,82,0.7))',
                          margin: 0,
                        },
                      })
                    : icon}
                </span>
              </div>
            )}
            <h2 className="text-xl sm:text-xl lg:text-2xl font-semibold text-[var(--text-primary)] mb-2">
              {title}
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base mb-3">
              {description}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-yellow-400 text-sm sm:text-base relative"
            >
              <span className="relative inline-flex items-center">
                {actionText}
                {actionIcon && <span className="ml-2">{actionIcon}</span>}
                <span
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          {/* Visual Section */}
          <div
            className={`w-full ${isSmall ? '' : 'lg:w-[60%]'} bg-[var(--bg-primary)] rounded-2xl flex items-center justify-center p-5 sm:p-6 lg:p-8 overflow-hidden`}
          >
            <motion.div
              className="relative w-full aspect-[3/2] rounded-lg"
              style={{ scale: imageScale, willChange: 'transform' }}
            >
              <Image
                src={`/${src}`}
                alt={title}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;