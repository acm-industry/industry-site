'use client';
import React from 'react';
import { motion } from 'framer-motion';
import StarField from './StarField';
import { Construction } from 'lucide-react';

const WorkInProgress: React.FC = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-[var(--background)] rounded-xl shadow-lg">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <motion.div
          className="mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        >
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-yellow-400 bg-[#1a2327] drop-shadow-[0_0_12px_rgba(255,207,82,0.5)]">
            <Construction size={36} color="#FFD600" />
          </span>
        </motion.div>
        <h2 className="text-3xl font-bold text-[var(--accent-gold)] drop-shadow-lg mb-2">Work in Progress</h2>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-md">
          This page is under construction.<br />Check back soon for updates!
        </p>
      </motion.div>
      <StarField numberOfStars={60} />
    </div>
  );
};

export default WorkInProgress; 