'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    organization: string;
    location: string;
    period: string;
    description: string | string[];
    status?: 'completed' | 'ongoing' | 'incoming';
  };
  index: number;
  type: 'education' | 'experience';
}

export function TimelineItem({ item, index, type }: TimelineItemProps) {
  const statusColors = {
    completed: 'bg-navy-400',
    ongoing: 'bg-cyan-500',
    incoming: 'bg-amber-500',
  };

  const statusLabels = {
    completed: 'Completed',
    ongoing: 'Ongoing',
    incoming: 'Incoming',
  };

  const descriptionArray = Array.isArray(item.description)
    ? item.description
    : [item.description];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 lg:pl-12 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-navy-200 dark:bg-navy-800" />

      <div
        className={`absolute left-[-5px] top-0 w-3 h-3 rounded-full border-2 border-white dark:border-navy-950 ${
          statusColors[item.status || 'completed']
        }`}
      />

      <div className="glass-card rounded-xl p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400">
            {type === 'education' ? (
              <GraduationCap className="w-5 h-5" />
            ) : (
              <Briefcase className="w-5 h-5" />
            )}
          </span>
          <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
            {item.period}
          </span>
          {item.status && (
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded-full text-white ${
                statusColors[item.status]
              }`}
            >
              {statusLabels[item.status]}
            </span>
          )}
        </div>

        <h3 className="text-xl font-display font-bold text-navy-900 dark:text-white">
          {item.title}
        </h3>
        <p className="text-navy-600 dark:text-navy-300 font-medium">{item.subtitle}</p>
        <p className="text-sm text-navy-500 dark:text-navy-400 mt-1">
          {item.organization} • {item.location}
        </p>
        <ul className="mt-3 space-y-1.5">
          {descriptionArray.map((point, i) => (
            <li
              key={i}
              className="text-navy-600 dark:text-navy-300 leading-relaxed flex items-start gap-2"
            >
              <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
