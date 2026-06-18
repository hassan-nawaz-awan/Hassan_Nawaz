import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 'phd',
    degree: 'PhD',
    field: 'Chemical and Biological Engineering',
    institution: 'Hong Kong University of Science and Technology',
    location: 'Hong Kong SAR',
    period: '2025 – 2029 (Expected)',
    description:
      'Incoming doctoral student focusing on advanced computational methods and artificial intelligence for molecular and materials science.',
    status: 'incoming',
  },
  {
    id: 'ms',
    degree: "Master's",
    field: 'AI and ML Enhanced Quantum and Computational Chemistry',
    institution: 'Xiamen University',
    location: 'Xiamen, China',
    period: '2023 – 2025',
    description:
      'Research on machine learning potentials, neural network force fields, and AI-assisted quantum chemistry under Prof. Pavlo O. Dral.',
    status: 'ongoing',
  },
  {
    id: 'bs',
    degree: 'Bachelor of Science',
    field: 'Analytical Chemistry',
    institution: 'University of Agriculture Faisalabad',
    location: 'Faisalabad, Pakistan',
    period: '2019 – 2023',
    description:
      'Foundation in analytical techniques, chemical instrumentation, and computational problem-solving.',
    status: 'completed',
  },
];
