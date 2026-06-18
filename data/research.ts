import { ResearchProject } from '@/types';

// TODO: Update GitHub URLs, project links, and publication details with real entries.
export const researchProjects: ResearchProject[] = [
  {
    id: 'aitomia',
    title: 'Aitomia',
    subtitle: 'AI Assistant for Atomistic & Quantum Simulations',
    description:
      'An intelligent research assistant that combines large language models with computational chemistry tools to help researchers design, run, and interpret atomistic and quantum chemical simulations through natural conversation.',
    technologies: ['LLMs', 'RAG', 'Quantum Chemistry', 'Molecular Dynamics', 'Python'],
    publications: ['Aitomia: A Natural Language Interface for Atomistic Simulations (In Preparation)'],
    github: 'https://github.com/aitomistic/aitomia',
    link: '#',
    icon: 'Bot',
  },
  {
    id: 'ani',
    title: 'ANI Neural Networks',
    subtitle: 'Machine Learning Potentials',
    description:
      'Development and benchmarking of ANI-style neural network potentials for predicting molecular energies and forces with quantum chemical accuracy at a fraction of the computational cost.',
    technologies: ['ANI', 'PyTorch', 'TorchANI', 'Molecular Dynamics', 'DFT'],
    publications: [
      'Benchmarking ANI Potentials for Organic Reaction Pathways (In Preparation)',
    ],
    github: 'https://github.com/hassan-nawaz/ani-potentials',
    link: '#',
    icon: 'Network',
  },
  {
    id: 'datasets',
    title: 'Quantum Chemistry Datasets',
    subtitle: 'Large-Scale Dataset Generation',
    description:
      'Curating and generating large-scale, diverse datasets of quantum chemical properties to train and validate next-generation machine learning potentials and foundation models.',
    technologies: ['ORCA', 'MLatom', 'Dataset Curation', 'Active Learning', 'HPC'],
    publications: [
      'A Curated Dataset for Machine Learning Potentials in Organic Chemistry (In Preparation)',
    ],
    github: 'https://github.com/hassan-nawaz/qm-datasets',
    link: '#',
    icon: 'Database',
  },
  {
    id: 'foundation',
    title: 'Foundation Models for Molecular Science',
    subtitle: 'General-Purpose AI for Chemistry',
    description:
      'Exploring the design of foundation models for molecular science that can transfer knowledge across chemical systems and tasks, from property prediction to reaction discovery.',
    technologies: ['Transformers', 'Self-Supervised Learning', 'Graph Neural Networks', 'Scientific AI'],
    publications: [
      'Towards Foundation Models for Molecular Discovery (Perspective, In Preparation)',
    ],
    github: 'https://github.com/hassan-nawaz/molecular-foundation',
    link: '#',
    icon: 'Atom',
  },
];
