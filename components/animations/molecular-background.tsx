'use client';

import { motion } from 'framer-motion';

export function MolecularBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-400/20 dark:bg-navy-500/10 rounded-full blur-3xl" />

      {/* Animated molecular rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 dark:opacity-15"
      >
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-500"
            strokeDasharray="8 8"
          />
          <circle
            cx="300"
            cy="300"
            r="180"
            stroke="currentColor"
            strokeWidth="1"
            className="text-navy-400"
          />
          <circle cx="300" cy="50" r="8" className="fill-cyan-400" />
          <circle cx="300" cy="550" r="8" className="fill-cyan-400" />
          <circle cx="120" cy="300" r="6" className="fill-navy-400" />
          <circle cx="480" cy="300" r="6" className="fill-navy-400" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-15 dark:opacity-10"
      >
        <svg viewBox="0 0 450 450" fill="none" className="w-full h-full">
          <ellipse
            cx="225"
            cy="225"
            rx="200"
            ry="120"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-500"
            transform="rotate(45 225 225)"
          />
          <ellipse
            cx="225"
            cy="225"
            rx="200"
            ry="120"
            stroke="currentColor"
            strokeWidth="1"
            className="text-navy-400"
            transform="rotate(-45 225 225)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
