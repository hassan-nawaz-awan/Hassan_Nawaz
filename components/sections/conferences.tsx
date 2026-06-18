'use client';

import { conferences } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { ConferenceCard } from '@/components/ui/conference-card';

export function Conferences() {
  return (
    <Section id="conferences">
      <SectionHeading
        title="Conferences & Workshops"
        subtitle="Selected academic events, presentations, and scientific workshops."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {conferences.map((conference, index) => (
          <ConferenceCard key={conference.id} conference={conference} index={index} />
        ))}
      </div>
    </Section>
  );
}
