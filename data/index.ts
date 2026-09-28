/**
 * Portfolio Data Export Index
 * Central export point for all portfolio data
 */

export { projects } from './projects';
export { experiences } from './experiences';
export { skills, skillsByCategory, skillsByProficiency, topSkills } from './skills';
export { aboutContent, highlights, personalInfo, keywords, keywordsKo } from './about';
export { portfolioConfig } from './config';

// Export types
export type { Project } from '../types/index';
export type { Experience } from '../types/index';
export type { Skill } from '../types/index';
export type { AboutContent } from '../types/index';
export type { PortfolioConfig, PortfolioData } from '../types/index';
