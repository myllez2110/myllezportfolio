import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Infinity Cities',
    description: 'A simple project using API applications to browse cities infinitely (can not handle so much requests)',
    url: 'https://myllez2110.github.io/infinitycities/',
    technologies: ['React', 'TypeScript', 'Styled-Components', 'GH-Pages', 'Bolt'],
  },
  {
    id: 'project-2',
    title: 'Portfolio by MylleZ',
    description: 'The portfolio site you are currently using',
    url: 'https://myllez2110.github.io/myllezportfolio/',
    technologies: ['React', 'TypeScript', 'Tailwind', 'GH-Pages'],
  },
  {
    id: 'project-3',
    title: 'Metadata Remover',
    description: 'A very simple and minimal project to remove metadata from images.',
    url: 'https://myllez2110.github.io/keepAnon/',
    technologies: ['React', 'TypeScript', 'Tailwind', 'GH-Pages', 'Python', 'Flask'],
  }
];