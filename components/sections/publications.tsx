'use client';

import { publications } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { PublicationCard } from '@/components/ui/publication-card';

export function Publications() {
  return (
    <Section id="publications" background="muted">
      <SectionHeading
        title="Publications"
        subtitle="Peer-reviewed publications, preprints, and manuscripts in computational chemistry and scientific AI."
      />

      <div className="space-y-6 max-w-4xl mx-auto">
        {publications.map((publication, index) => (
          <PublicationCard key={publication.id} publication={publication} index={index} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-navy-500 dark:text-navy-400">
        Replace these sample entries with your actual publications in{' '}
        <code className="px-2 py-1 rounded bg-navy-100 dark:bg-navy-800 font-mono">
          data/publications.ts
        </code>
      </p>
    </Section>
  );
}
