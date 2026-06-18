'use client';

import { researchProjects } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { ResearchCard } from '@/components/ui/research-card';

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        title="Research"
        subtitle="Selected research projects at the intersection of artificial intelligence, quantum chemistry, and molecular science."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {researchProjects.map((project, index) => (
          <ResearchCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
