'use client';

import { achievements } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { AchievementCounter } from '@/components/ui/achievement-counter';

export function Achievements() {
  return (
    <Section id="achievements" background="gradient">
      <SectionHeading
        title="Achievements"
        subtitle="Research impact and academic milestones throughout my scientific journey."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCounter key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </Section>
  );
}
