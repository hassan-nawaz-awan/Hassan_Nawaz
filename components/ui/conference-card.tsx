'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Presentation } from 'lucide-react';
import { Conference } from '@/types';

interface ConferenceCardProps {
  conference: Conference;
  index: number;
}

export function ConferenceCard({ conference, index }: ConferenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400">
          <Presentation className="w-3.5 h-3.5" />
          {conference.type}
        </span>
        <span className="text-sm font-semibold text-navy-500 dark:text-navy-400">
          {conference.date}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {conference.title}
      </h3>

      <div className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400 mb-3">
        <MapPin className="w-4 h-4" />
        {conference.location}
      </div>

      <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
        {conference.description}
      </p>
    </motion.div>
  );
}
