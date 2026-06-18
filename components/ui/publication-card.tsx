'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';
import { Publication } from '@/types';

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export function PublicationCard({ publication, index }: PublicationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
            {publication.year}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-navy-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {publication.title}
          </h3>
          <p className="mt-1 text-sm text-navy-600 dark:text-navy-300">{publication.authors}</p>
          <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
            {publication.journal}
          </p>

          <div className="mt-4 p-4 rounded-lg bg-navy-50 dark:bg-navy-900/50 border border-navy-100 dark:border-navy-800">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-navy-600 dark:text-navy-300 italic">
                {publication.citation}
              </p>
            </div>
          </div>

          {publication.doi && (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-mono text-navy-500 dark:text-navy-400">
                DOI: {publication.doi}
              </span>
              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  View paper
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
