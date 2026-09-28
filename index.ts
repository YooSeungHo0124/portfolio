/**
 * Portfolio Data - Main Export
 *
 * This is the primary export file for all portfolio data and configuration.
 * All data is properly typed with TypeScript interfaces for type safety.
 *
 * Usage:
 * import { projects, experiences, skills, aboutContent } from '@/portfolio';
 */

// Data exports
export { projects } from './data/projects';
export { experiences } from './data/experiences';
export {
  skills,
  skillsByCategory,
  skillsByProficiency,
  topSkills
} from './data/skills';
export {
  aboutContent,
  highlights,
  personalInfo,
  keywords,
  keywordsKo
} from './data/about';

// Configuration exports
export {
  portfolioConfig,
  navigation,
  socialLinks,
  featuredProjectIds,
  recentProjectIds,
  metadata,
  contactFormConfig,
  analyticsConfig,
  themeColors,
  i18n
} from './data/config';

// Type imports
import type { TechStackItem } from './types/index';

// Type exports
export type {
  Project,
  Experience,
  Skill,
  AboutContent,
  PortfolioConfig,
  PortfolioData,
  TechStackItem
} from './types/index';

/**
 * Helper function to get a project by ID
 */
import { projects } from './data/projects';

export function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}

/**
 * Helper function to get featured projects
 */
import { featuredProjectIds } from './data/config';

export function getFeaturedProjects() {
  return projects.filter(project => featuredProjectIds.includes(project.id));
}

/**
 * Helper function to get recent projects
 */
import { recentProjectIds } from './data/config';

export function getRecentProjects() {
  return projects.filter(project => recentProjectIds.includes(project.id));
}

/**
 * Helper function to get experience by company
 */
import { experiences } from './data/experiences';

export function getExperienceByCompany(company: string) {
  return experiences.find(exp => exp.company === company);
}

/**
 * Helper function to get current experience
 */
export function getCurrentExperience() {
  return experiences.find(exp => exp.period.end === 'current');
}

/**
 * Helper function to get skills by category
 */
import { skills } from './data/skills';

export function getSkillsByProficiency(proficiency: 'expert' | 'advanced' | 'intermediate' | 'beginner') {
  return skills.filter(skill => skill.proficiency === proficiency);
}

/**
 * Helper function to search projects by technology
 */
export function searchProjectsByTech(techName: string) {
  return projects.filter(project =>
    project.technologies.some((tech: any) =>
      tech.name.toLowerCase().includes(techName.toLowerCase())
    )
  );
}

/**
 * Helper function to get all unique technologies used
 */
export function getAllUniqueTechnologies() {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach((tech: TechStackItem) => {
      techSet.add(tech.name);
    });
  });
  return Array.from(techSet).sort();
}

/**
 * Statistics helper
 */
export function getPortfolioStats() {
  return {
    totalProjects: projects.length,
    featuredProjects: projects.filter(p => p.featured).length,
    totalExperiences: experiences.length,
    totalSkills: skills.length,
    expertSkills: skills.filter(s => s.proficiency === 'expert').length,
    totalTechnologies: getAllUniqueTechnologies().length,
    yearsOfExperience: Math.max(
      ...skills
        .filter(s => s.yearsOfExperience)
        .map(s => s.yearsOfExperience || 0)
    )
  };
}
