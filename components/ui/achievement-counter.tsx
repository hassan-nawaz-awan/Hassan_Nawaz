'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Achievement } from '@/types';
import { Icon } from '@/components/icon';

interface AchievementCounterProps {
  achievement: Achievement;
  index: number;
}

export function AchievementCounter({ achievement, index }: AchievementCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = achievement.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= achievement.value) {
        setCount(achievement.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, achievement.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white mb-4 shadow-lg shadow-cyan-500/20">
        <Icon name={achievement.icon} className="w-7 h-7" />
      </div>
      <div className="text-4xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white">
        {count}
        {achievement.suffix || ''}
      </div>
      <p className="mt-2 text-sm font-medium text-navy-500 dark:text-navy-400 uppercase tracking-wider">
        {achievement.label}
      </p>
    </motion.div>
  );
}
