/**
 * Portfolio Data Types
 * Comprehensive TypeScript interfaces for portfolio content
 */

/**
 * Skill interface for organizing technical competencies
 */
export interface Skill {
  name: string;
  nameKo: string;
  category: 'language' | 'framework' | 'tool' | 'platform' | 'methodology';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string; // SVG or emoji representation
  yearsOfExperience?: number;
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
  id: string;
  title: string;
  titleKo: string;
  description: string;
  descriptionKo: string;
  period: {
    start: string; // YYYY.MM format
    end: string | 'ongoing'; // YYYY.MM or 'ongoing'
  };
  featured: boolean;
  position?: string; // Role in the project
  positionKo?: string;

  // Technical details
  technologies: TechStackItem[];
  techDetails?: {
    frontend?: string[];
    backend?: string[];
    ml?: string[];
    devops?: string[];
    database?: string[];
  };

  // Achievements and outcomes
  achievements?: string[];
  achievementsKo?: string[];
  keyMetrics?: {
    label: string;
    labelKo: string;
    value: string;
  }[];

  // Project information
  company?: string;
  companyKo?: string;
  team?: {
    size: number;
    role: string;
    roleKo: string;
  };

  // Links and media
  github?: string;
  liveUrl?: string;
  images?: {
    thumbnail?: string;
    banner?: string;
    screenshots?: string[];
  };

  // Additional context
  award?: string;
  awardKo?: string;
  problemStatement?: string;
  problemStatementKo?: string;
  solution?: string;
  solutionKo?: string;
  tags?: string[];
}

/**
 * Work experience interface
 */
export interface Experience {
  id: string;
  title: string;
  titleKo: string;
  company: string;
  companySummary?: string;
  companySummaryKo?: string;
  position: string;
  positionKo: string;

  period: {
    start: string; // YYYY.MM
    end: string | 'current'; // YYYY.MM or 'current'
  };

  description: string;
  descriptionKo: string;

  // Responsibilities
  responsibilities: string[];
  responsibilitiesKo: string[];

  // Achievements
  achievements?: string[];
  achievementsKo?: string[];

  // Technical context
  technologies?: string[];
  projects?: string[]; // IDs of related projects

  // Additional info
  location?: string;
  employment_type?: 'Full-time' | 'Part-time' | 'Internship' | 'Contract' | 'Freelance';
}

/**
 * About section content
 */
export interface AboutContent {
  introduction: string;
  introductionKo: string;

  summary: string;
  summaryKo: string;

  // Personal details
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;

  // Interests and values
  interests: string[];
  interestsKo: string[];

  // Highlights
  highlights: string[];
  highlightsKo: string[];
}

/**
 * Portfolio configuration
 */
export interface PortfolioConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  author: {
    name: string;
    nameKo: string;
    title: string;
    titleKo: string;
    image?: string;
  };
  defaultLanguage: 'en' | 'ko';
  theme?: 'light' | 'dark' | 'system';
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
