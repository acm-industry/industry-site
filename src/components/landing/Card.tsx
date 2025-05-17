'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  projects: unknown[];
  icon?: React.ReactNode;
  actionText?: string;
  actionIcon?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { i, title, description, src, link, progress, range, targetScale, projects, icon, actionText = 'See more', actionIcon },
  ref
) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, -20]);

  const fadeOpacity = useTransform(scale, [1, 0.98, 0.8], [1, 1, 0.6]);
  const [isActive, setIsActive] = useState(false);
  useMotionValueEvent(progress, 'change', (latest) => {
    setIsActive(latest >= range[0] && latest < (range[0] + 0.25));
  });
  const isLastCard = i === projects.length - 1;
  const opacity = (isActive || isLastCard) ? 1 : fadeOpacity;

  const isEven = i % 2 === 0;

  return (
    <div ref={ref ?? container} className={`h-[60vh] sticky top-86 ${i === 0 ? '' : 'mt-100'}`}>
      <motion.div
        className="relative h-full flex justify-center px-10 md:px-16 py-10 rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          scale,
          opacity,
          y,
          top: `calc(-5vh + ${i * 35}px)`,
        }}
      >
        <div className={`flex w-full items-center gap-10 ${isEven ? 'flex-row' : 'flex-row-reverse'}`} style={{height: '100%'}}>
          {/* Text Section */}
          <div className="w-[30%] min-w-[300px] flex flex-col justify-start items-start h-full">
            {/* Large icon in a circle above title, left-aligned */}
            {icon && (
              <div className="mb-6 flex items-center justify-start">
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-yellow-400 drop-shadow-[0_0_12px_rgba(255,207,82,0.5)] p-0">
                  {typeof icon === 'function'
                    ? React.createElement(icon, {
                        size: 100,
                        color: '#FFCF52',
                        style: { filter: 'drop-shadow(0 0 10px rgba(255,207,82,0.7))', margin: 0 }
                      })
                    : icon}
                </span>
              </div>
            )}
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-3">{title}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-md md:text-xl mb-4">
              {description}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-yellow-400 text-lg relative"
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
          <div className="w-[70%] h-full bg-[var(--bg-primary)] rounded-2xl flex items-center justify-center p-12" style={{height: '100%'}}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={`/${src}`}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default Card;