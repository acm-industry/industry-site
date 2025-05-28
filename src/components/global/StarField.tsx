'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface StarFieldProps {
  numberOfStars?: number;
}

const StarField: React.FC<StarFieldProps> = ({ numberOfStars = 200 }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: numberOfStars }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random(),
        duration: 3 + Math.random() * 2,
      }))
    );
  }, [numberOfStars]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: 0.2,
            filter: 'blur(0.5px)',
            willChange: 'transform, opacity'
          }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'loop',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;

