'use client';

import { experiences } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { TimelineItem } from '@/components/ui/timeline-item';

export function Experience() {
  const timelineItems = experiences.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.organization,
    organization: item.organization,
    location: item.location,
    period: item.period,
    description: item.description,
    status: 'ongoing' as const,
  }));

  return (
    <Section id="experience" background="muted">
      <SectionHeading
        title="Experience"
        subtitle="Research and professional experience in computational chemistry and artificial intelligence."
      />

      <div className="max-w-3xl mx-auto">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} type="experience" />
        ))}
      </div>
    </Section>
  );
}
