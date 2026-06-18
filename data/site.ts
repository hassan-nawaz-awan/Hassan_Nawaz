import { SocialLink } from '@/types';

// TODO: Update email and social URLs with your real contact information before deploying.
export const siteConfig = {
  name: 'Hassan Nawaz',
  heroName: 'Hassan Nawaz',
  tagline: 'AI for Chemistry • Quantum Machine Learning • Computational Chemistry',
  shortDescription:
    'Building next-generation AI systems for molecular science, quantum chemistry, and scientific discovery.',
  email: 'hassan.nawaz@example.com', // TODO: Replace with your real email address.
  title: "Master's Researcher in AI and Computational Chemistry",
  institution: 'Xiamen University',
  phdInstitution: 'Hong Kong University of Science and Technology',
  location: 'Xiamen, China',
  bio: `Hassan Nawaz is a researcher at the intersection of artificial intelligence and computational chemistry. He is currently completing his Master's degree in AI and Machine Learning Enhanced Quantum and Computational Chemistry at Xiamen University, China, where he works with Prof. Pavlo O. Dral on developing intelligent systems for atomistic and quantum chemical simulations. He will soon begin his PhD in Chemical and Biological Engineering at the Hong Kong University of Science and Technology (HKUST).`,
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: `mailto:${siteConfig.email}`,
    icon: 'Mail',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hassan-nawaz', // TODO: Replace with your real LinkedIn URL.
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hassan-nawaz', // TODO: Replace with your real GitHub URL.
    icon: 'Github',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=hassan-nawaz', // TODO: Replace with your real Google Scholar ID.
    icon: 'GraduationCap',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0000-0000-0000', // TODO: Replace with your real ORCID iD.
    icon: 'Fingerprint',
  },
];

// All section IDs must match the ids used in app/page.tsx and individual Section components.
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Conferences', href: '#conferences' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];
