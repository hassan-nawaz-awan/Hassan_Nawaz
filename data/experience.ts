import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'ra-xmu',
    role: 'Research Assistant',
    organization: 'Xiamen University',
    location: 'Xiamen, China',
    period: '2023 – Present',
    description: [
      'Develop machine learning potentials using ANI neural networks and TorchANI.',
      'Generate and benchmark quantum chemistry datasets with ORCA and MLatom.',
      'Build AI assistants for atomistic and quantum chemical simulations.',
    ],
  },
  {
    id: 'ai-researcher',
    role: 'AI Researcher',
    organization: 'Computational Chemistry & AI Lab',
    location: 'Xiamen, China',
    period: '2023 – Present',
    description: [
      'Design deep learning architectures for molecular property prediction.',
      'Implement active learning workflows to accelerate dataset construction.',
      'Publish and present findings at international conferences.',
    ],
  },
  {
    id: 'comp-chem',
    role: 'Computational Chemist',
    organization: 'Research Collaborations',
    location: 'Remote / International',
    period: '2022 – Present',
    description: [
      'Perform quantum chemical calculations and molecular dynamics simulations.',
      'Collaborate on cross-disciplinary projects combining AI and chemistry.',
      'Mentor junior students in computational tools and programming.',
    ],
  },
];
