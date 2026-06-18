'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ResearchProject } from '@/types';
import { Icon } from '@/components/icon';

interface ResearchCardProps {
  project: ResearchProject;
  index: number;
}

export function ResearchCard({ project, index }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-card rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon name={project.icon} className="w-24 h-24 text-cyan-500" />
      </div>

      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-500/20">
          <Icon name={project.icon} className="w-6 h-6" />
        </div>

        <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
          {project.subtitle}
        </p>
        <h3 className="text-xl lg:text-2xl font-display font-bold text-navy-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.publications.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-2">
              Publications
            </p>
            <ul className="space-y-1">
              {project.publications.map((pub, i) => (
                <li key={i} className="text-sm text-navy-600 dark:text-navy-300">
                  • {pub}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-navy-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Learn more
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
