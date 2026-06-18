'use client';

import { skills } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { SkillCard } from '@/components/ui/skill-card';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technical toolkit spanning scientific computing, machine learning, and software engineering."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
}
