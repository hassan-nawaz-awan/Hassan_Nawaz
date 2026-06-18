'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { siteConfig, socialLinks } from '@/data';
import { ParticleBackground } from '@/components/animations/particle-background';
import { MolecularBackground } from '@/components/animations/molecular-background';
import { Icon } from '@/components/icon';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-navy-950"
    >
      <MolecularBackground />
      <ParticleBackground />

      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Incoming PhD Student at HKUST
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-navy-900 dark:text-white mb-4">
              {siteConfig.heroName}
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-cyan-600 dark:text-cyan-400 mb-6">
              {siteConfig.tagline}
            </p>

            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-xl leading-relaxed mb-8">
              {siteConfig.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-navy-100 transition-colors"
              >
                View Research
                <ArrowDown className="w-4 h-4" />
              </a>
              {/* TODO: Add your CV at public/cv.pdf before deploying */}
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg border-2 border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
                aria-label="Download CV (PDF)"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-navy-50 dark:bg-navy-900 text-navy-600 dark:text-navy-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 500 500" className="w-full h-full opacity-30 dark:opacity-20">
                  <circle
                    cx="250"
                    cy="250"
                    r="200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-cyan-500"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="140"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-navy-400"
                  />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 250 + 200 * Math.cos(rad);
                    const y = 250 + 200 * Math.sin(rad);
                    return <circle key={i} cx={x} cy={y} r="8" className="fill-cyan-400" />;
                  })}
                </svg>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-20 dark:opacity-15">
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 160 * Math.cos(rad);
                    const y = 200 + 160 * Math.sin(rad);
                    return (
                      <g key={i}>
                        <line
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-cyan-500"
                        />
                        <circle cx={x} cy={y} r="6" className="fill-navy-400" />
                      </g>
                    );
                  })}
                </svg>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20 dark:opacity-30 blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-navy-300 dark:border-navy-600 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-2.5 rounded-full bg-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
