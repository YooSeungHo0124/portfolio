import { PortfolioConfig } from '../types/index';

export const portfolioConfig: PortfolioConfig = {
  siteName: 'AI Engineer Portfolio',
  siteDescription: 'Full-stack AI engineer specializing in computer vision, deep learning, and real-time systems. Showcasing projects, experience, and technical expertise.',
  siteUrl: 'https://portfolio.example.com',

  author: {
    name: 'Your Name',
    nameKo: '성함',
    title: 'AI Engineer & Researcher',
    titleKo: 'AI 엔지니어 & 연구원',
    image: '/images/profile.jpg'
  },

  defaultLanguage: 'en',
  theme: 'system' // 'light', 'dark', or 'system'
};

/**
 * Navigation structure
 */
export const navigation = [
  {
    label: 'Home',
    labelKo: '홈',
    href: '/',
    icon: 'home'
  },
  {
    label: 'About',
    labelKo: '소개',
    href: '/about',
    icon: 'user'
  },
  {
    label: 'Projects',
    labelKo: '프로젝트',
    href: '/projects',
    icon: 'briefcase'
  },
  {
    label: 'Experience',
    labelKo: '경력',
    href: '/experience',
    icon: 'award'
  },
  {
    label: 'Skills',
    labelKo: '기술',
    href: '/skills',
    icon: 'code'
  },
  {
    label: 'Contact',
    labelKo: '연락',
    href: '/contact',
    icon: 'mail'
  }
];

/**
 * Social media links
 */
export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    label: 'GitHub Profile'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
    label: 'LinkedIn Profile'
  },
  {
    platform: 'Email',
    url: 'mailto:shyu@daton.ai',
    icon: 'mail',
    label: 'Send Email'
  },
  {
    platform: 'Blog',
    url: 'https://blog.example.com',
    icon: 'rss',
    label: 'Technical Blog'
  }
];

/**
 * Featured projects to display on homepage
 */
export const featuredProjectIds = [
  'cctv-surveillance',
  'rt-film-reading',
  'oldab',
  'medical-ai-competition'
];

/**
 * Recently completed projects to highlight
 */
export const recentProjectIds = [
  'cctv-surveillance',
  'rt-film-reading'
];

/**
 * Site metadata
 */
export const metadata = {
  title: 'AI Engineer Portfolio - Full-stack AI Development',
  titleKo: 'AI 엔지니어 포트폴리오 - 풀스택 AI 개발',
  description: 'Professional portfolio of an AI engineer specializing in computer vision, deep learning, and full-stack development. View projects, experience, and technical skills.',
  descriptionKo: '컴퓨터 비전, 딥러닝, 풀스택 개발을 전문으로 하는 AI 엔지니어의 전문 포트폴리오. 프로젝트, 경력, 기술 능력을 확인하세요.',
  image: '/og-image.jpg',
  author: 'Your Name',
  authorKo: '성함',
};

/**
 * Contact form configuration
 */
export const contactFormConfig = {
  email: 'shyu@daton.ai',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Optional
  enableFormspree: false,
};

/**
 * Analytics configuration
 */
export const analyticsConfig = {
  googleAnalyticsId: 'GA_MEASUREMENT_ID', // Optional
  enableAnalytics: false,
};

/**
 * Theme colors (for consistent branding)
 */
export const themeColors = {
  primary: '#3B82F6', // Blue
  secondary: '#8B5CF6', // Purple
  accent: '#EC4899', // Pink
  success: '#10B981', // Green
  warning: '#F59E0B', // Amber
  error: '#EF4444', // Red
};

/**
 * Localization settings
 */
export const i18n = {
  defaultLanguage: 'en',
  languages: [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' }
  ],
  enableLanguageSwitcher: true,
};
