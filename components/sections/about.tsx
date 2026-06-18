'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';

const researchInterests = [
  'Machine Learning Potentials',
  'Quantum Chemistry',
  'Molecular Simulation',
  'Scientific AI',
  'Computational Chemistry',
  'Foundation Models for Science',
];

export function About() {
  return (
    <Section id="about" background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading title="About Me" align="left" />
          <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
            {siteConfig.bio}
          </p>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-8">
            My work bridges cutting-edge machine learning with rigorous computational chemistry.
            I am passionate about building AI systems that can accelerate scientific discovery,
            from predicting molecular properties with quantum accuracy to creating intelligent
            assistants that democratize access to complex simulation tools.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-200 shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-800">
                <p className="text-3xl font-display font-bold text-cyan-600 dark:text-cyan-400">
                  MS
                </p>
                <p className="mt-1 text-sm font-medium text-navy-700 dark:text-navy-200">
                  Xiamen University
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">Current</p>
              </div>

              <div className="p-5 rounded-xl bg-navy-50 dark:bg-navy-900/30 border border-navy-100 dark:border-navy-800">
                <p className="text-3xl font-display font-bold text-navy-600 dark:text-navy-300">
                  PhD
                </p>
                <p className="mt-1 text-sm font-medium text-navy-700 dark:text-navy-200">
                  HKUST
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">Incoming</p>
              </div>

              <div className="p-5 rounded-xl bg-navy-50 dark:bg-navy-900/30 border border-navy-100 dark:border-navy-800">
                <p className="text-3xl font-display font-bold text-navy-600 dark:text-navy-300">
                  BS
                </p>
                <p className="mt-1 text-sm font-medium text-navy-700 dark:text-navy-200">
                  UAF
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">Completed</p>
              </div>

              <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-800">
                <p className="text-3xl font-display font-bold text-cyan-600 dark:text-cyan-400">
                  AI
                </p>
                <p className="mt-1 text-sm font-medium text-navy-700 dark:text-navy-200">
                  Researcher
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">Passion</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-navy-100 dark:border-navy-800">
              <p className="text-sm text-navy-500 dark:text-navy-400 uppercase tracking-wider font-semibold mb-3">
                Current Focus
              </p>
              <p className="text-navy-700 dark:text-navy-200">
                Developing AI assistants and machine learning potentials for atomistic and quantum
                chemical simulations under Prof. Pavlo O. Dral at Xiamen University.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
