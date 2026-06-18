import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'muted' | 'gradient';
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  background = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 lg:py-28',
        background === 'muted' && 'bg-navy-50/50 dark:bg-navy-900/30',
        background === 'gradient' &&
          'bg-gradient-to-b from-navy-50/50 to-white dark:from-navy-950 dark:to-navy-900/50',
        className
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
