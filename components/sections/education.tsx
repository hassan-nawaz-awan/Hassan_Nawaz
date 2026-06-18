'use client';

import { education } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { TimelineItem } from '@/components/ui/timeline-item';

export function Education() {
  const timelineItems = education.map((item) => ({
    id: item.id,
    title: item.degree,
    subtitle: item.field,
    organization: item.institution,
    location: item.location,
    period: item.period,
    description: item.description,
    status: item.status,
  }));

  return (
    <Section id="education">
      <SectionHeading
        title="Education"
        subtitle="Academic journey from analytical chemistry to AI-enhanced quantum chemistry and beyond."
      />

      <div className="max-w-3xl mx-auto">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} type="education" />
        ))}
      </div>
    </Section>
  );
}
