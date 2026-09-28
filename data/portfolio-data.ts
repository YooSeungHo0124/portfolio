import type { PortfolioConfig, Project, Skill, Experience } from '@/types'

export const portfolioConfig: PortfolioConfig = {
  name: 'Your Name',
  title: 'Software Developer',
  description: 'Welcome to my portfolio',
  email: 'your.email@example.com',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
  ],
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL'],
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Developer',
    description: 'Description of your work',
    startDate: '2023.01',
    endDate: 'current',
    current: true,
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description',
    tags: ['React', 'Next.js'],
    featured: true,
    github: 'https://github.com/username/project',
    link: 'https://example.com',
  },
]
