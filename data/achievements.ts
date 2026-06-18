import { Achievement } from '@/types';

// TODO: Update these numbers with your current research metrics before deploying.
export const achievements: Achievement[] = [
  {
    id: 'publications',
    value: 3,
    label: 'Publications',
    icon: 'FileText',
  },
  {
    id: 'citations',
    value: 12,
    suffix: '+',
    label: 'Citations',
    icon: 'Quote',
  },
  {
    id: 'conferences',
    value: 5,
    suffix: '+',
    label: 'Conferences',
    icon: 'Presentation',
  },
  {
    id: 'projects',
    value: 8,
    suffix: '+',
    label: 'Research Projects',
    icon: 'FolderKanban',
  },
  {
    id: 'awards',
    value: 2,
    label: 'Awards & Honors',
    icon: 'Award',
  },
];
