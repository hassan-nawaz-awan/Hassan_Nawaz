import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Research } from '@/components/sections/research';
import { Publications } from '@/components/sections/publications';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Achievements } from '@/components/sections/achievements';
import { Conferences } from '@/components/sections/conferences';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Publications />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Conferences />
      <Gallery />
      <Contact />
    </>
  );
}
