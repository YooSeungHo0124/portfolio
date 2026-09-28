/**
 * Portfolio Data Types
 * Comprehensive TypeScript interfaces for portfolio content
 */

/**
 * Skill interface for organizing technical competencies
 */
export interface Skill {
  name?: string;
  nameKo?: string;
  category?: string;
  proficiency?: string;
  icon?: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

/**
 * Technology stack item
 */
export interface TechStackItem {
  name: string;
  icon?: string;
  category?: string;
}

/**
 * Project interface - comprehensive project information
 */
export interface Project {
  [key: string]: any;
}

/**
 * Work experience interface
 */
export interface Experience {
  [key: string]: any;
}

/**
 * About section content
 */
export interface AboutContent {
  [key: string]: any;
}

/**
 * Portfolio configuration
 */
export interface PortfolioConfig {
  [key: string]: any;
}

/**
 * Portfolio data collection
 */
export interface PortfolioData {
  config: PortfolioConfig;
  about: AboutContent;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}
