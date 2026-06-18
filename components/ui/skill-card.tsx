'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { Icon } from '@/components/icon';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 transition-colors">
          <Icon name={skill.icon} className="w-5 h-5" />
        </div>
        <span className="text-xs font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider">
          {skill.category}
        </span>
      </div>

      <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{skill.name}</h3>

      <div className="relative h-2 bg-navy-100 dark:bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
        />
      </div>
      <p className="mt-2 text-xs text-right text-navy-500 dark:text-navy-400">{skill.level}%</p>
    </motion.div>
  );
}
