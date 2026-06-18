import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
