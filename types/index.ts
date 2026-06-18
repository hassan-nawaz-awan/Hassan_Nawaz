export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  publications: string[];
  github?: string;
  link?: string;
  icon: string;
}

export interface Publication {
  id: string;
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
  url?: string;
  citation: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  status: 'completed' | 'ongoing' | 'incoming';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
}

export interface Achievement {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

export interface Conference {
  id: string;
  title: string;
  location: string;
  date: string;
  type: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
