import { AboutContent } from '../types/index';

export const aboutContent: AboutContent = {
  introduction: 'Full-stack AI engineer with expertise in computer vision, deep learning, and real-time systems. Passionate about building intelligent solutions that solve real-world problems.',
  introductionKo: '컴퓨터 비전, 딥러닝, 실시간 시스템에 전문성을 가진 풀스택 AI 엔지니어. 실제 문제를 해결하는 지능형 솔루션 개발에 열정을 가지고 있습니다.',

  summary: `Experienced software engineer and AI researcher with 3+ years of hands-on experience in machine learning, computer vision, and full-stack development. Currently working as a Research Engineer at Daton Multimodal Research Institute, developing real-time CCTV monitoring systems and automated quality control solutions.

Completed intensive 12-month Samsung SSAFY bootcamp where I led multiple cross-functional teams and shipped 4 production-quality projects, including award-winning AI tutoring system. Strong foundation in system design, data engineering, and emerging AI technologies like RAG and LLMs.

Known for problem-solving mindset, attention to detail, and ability to learn and adapt quickly. Comfortable working across the full technology stack from hardware (IoT/embedded) to cloud infrastructure, with a focus on scalability, reliability, and user experience.`,

  summaryKo: `머신러닝, 컴퓨터 비전, 풀스택 개발에 3년 이상의 실무 경험을 보유한 소프트웨어 엔지니어 및 AI 연구자. 현재 데이톤 멀티모달연구소 연구원으로 근무하며 실시간 CCTV 모니터링 시스템 및 자동화된 품질관리 솔루션 개발 중.

삼성 SSAFY 12개월 집중식 부트캠프를 완료했으며, 여러 교차 기능 팀을 리드하고 수상 경력이 있는 AI 튜터링 시스템을 포함한 4개의 프로덕션 수준 프로젝트를 배포. 시스템 설계, 데이터 엔지니어링, RAG 및 LLM과 같은 새로운 AI 기술에 대한 견고한 기초.

문제 해결 능력, 세부 사항에 대한 관심, 빠르게 학습하고 적응하는 능력으로 알려져 있습니다. 하드웨어(IoT/임베디드)에서 클라우드 인프라까지 전체 기술 스택에서 일할 수 있으며, 확장성, 안정성, 사용자 경험에 중점.`,

  email: 'shyu@daton.ai',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  blog: 'https://blog.example.com',

  interests: [
    'Artificial Intelligence & Machine Learning',
    'Computer Vision & Real-time Processing',
    'Scalable System Design',
    'Edge Computing & IoT',
    'Open Source Contribution',
    'Emerging Technologies & Research'
  ],

  interestsKo: [
    '인공지능 및 머신러닝',
    '컴퓨터 비전 및 실시간 처리',
    '확장 가능한 시스템 설계',
    '엣지 컴퓨팅 및 IoT',
    '오픈소스 기여',
    '새로운 기술 및 연구'
  ],

  highlights: [
    {
      label: '3+ Years',
      labelKo: '3년 이상',
      value: 'Professional experience in AI/ML and full-stack development'
    },
    {
      label: '4 Major Projects',
      labelKo: '4개 주요 프로젝트',
      value: 'Shipped during SSAFY with team leadership roles'
    },
    {
      label: '2 Government Projects',
      labelKo: '2개 정부과제',
      value: 'Real-time CCTV and automated quality control systems'
    },
    {
      label: 'Multiple Awards',
      labelKo: '다수의 수상 경력',
      value: 'Including Medical AI Competition Excellence Award'
    },
    {
      label: '95%+ Accuracy',
      labelKo: '95% 이상 정확도',
      value: 'Achieved in computer vision production systems'
    },
    {
      label: 'Full-stack Expertise',
      labelKo: '풀스택 전문성',
      value: 'Frontend, Backend, ML, DevOps across multiple frameworks'
    }
  ].map(h => ({
    ...h,
    highlightValue: h.value
  })),

  highlightsKo: [
    'AI/ML 및 풀스택 개발 3년 이상의 전문성',
    'SSAFY에서 팀 리더십 역할을 수행하며 4개의 주요 프로젝트 배포',
    '실시간 CCTV 및 자동화된 품질관리 시스템 정부과제 진행',
    '의료 AI 경진대회 우수상을 포함한 다수의 수상 경력',
    '컴퓨터 비전 프로덕션 시스템에서 95% 이상의 정확도 달성',
    '다양한 프레임워크를 활용한 풀스택 전문성 (프론트엔드, 백엔드, ML, DevOps)'
  ]
};

// Structured highlights for easy rendering
export const highlights = [
  {
    title: 'Professional Experience',
    titleKo: '전문 경력',
    items: [
      {
        label: '3+ Years',
        labelKo: '3년 이상',
        description: 'Professional experience in AI/ML and full-stack development',
        descriptionKo: 'AI/ML 및 풀스택 개발 전문 경력'
      },
      {
        label: 'Current Role',
        labelKo: '현직',
        description: 'Research Engineer at Daton Multimodal Research Institute',
        descriptionKo: '데이톤 멀티모달연구소 연구원'
      },
      {
        label: 'SSAFY Graduate',
        labelKo: 'SSAFY 수료',
        description: 'Samsung bootcamp for AI-fluent software developers',
        descriptionKo: 'AI 소프트웨어 개발 삼성 부트캠프'
      }
    ]
  },
  {
    title: 'Technical Expertise',
    titleKo: '기술 전문성',
    items: [
      {
        label: 'AI/ML Stack',
        labelKo: 'AI/ML 기술스택',
        description: 'Python, PyTorch, TensorFlow, YOLO, LangChain, RAG',
        descriptionKo: 'Python, PyTorch, TensorFlow, YOLO, LangChain, RAG'
      },
      {
        label: 'Full-stack Dev',
        labelKo: '풀스택 개발',
        description: 'React, Vue.js, Node.js, Spring Boot, FastAPI',
        descriptionKo: 'React, Vue.js, Node.js, Spring Boot, FastAPI'
      },
      {
        label: 'DevOps & Infrastructure',
        labelKo: 'DevOps & 인프라',
        description: 'Docker, Kubernetes, PostgreSQL, MongoDB, AWS',
        descriptionKo: 'Docker, Kubernetes, PostgreSQL, MongoDB, AWS'
      }
    ]
  },
  {
    title: 'Key Achievements',
    titleKo: '주요 성과',
    items: [
      {
        label: 'Competition Award',
        labelKo: '경진대회 수상',
        description: 'Medical AI Competition Excellence Award (우수상)',
        descriptionKo: '의료 AI 경진대회 우수상'
      },
      {
        label: 'SSAFY Recognition',
        labelKo: 'SSAFY 수상',
        description: 'Best Project Award for OldAb RAG tutoring system',
        descriptionKo: 'OldAb RAG 튜터링 시스템 우수 프로젝트상'
      },
      {
        label: 'Production Systems',
        labelKo: '프로덕션 시스템',
        description: '95%+ accuracy in vision systems, 100ms latency real-time processing',
        descriptionKo: '95% 이상 비전 시스템 정확도, 100ms 지연시간 실시간 처리'
      }
    ]
  },
  {
    title: 'Project Leadership',
    titleKo: '프로젝트 리더십',
    items: [
      {
        label: '4 Major Projects',
        labelKo: '4개 주요 프로젝트',
        description: 'Led cross-functional teams (4-6 members each) during SSAFY',
        descriptionKo: 'SSAFY 중 교차 기능 팀 리드 (각 4-6명)'
      },
      {
        label: 'Government Projects',
        labelKo: '정부과제',
        description: '2 active R&D government-funded research projects',
        descriptionKo: '2개의 활성 정부 지원 R&D 연구 프로젝트'
      },
      {
        label: 'Mentorship',
        labelKo: '멘토링',
        description: 'Mentored junior researchers and team members on ML best practices',
        descriptionKo: '주니어 연구원들에게 ML 모범 사례 지도'
      }
    ]
  }
];

// Personal info
export const personalInfo = {
  name: 'Your Name',
  nameKo: '성함',
  title: 'AI Engineer & Researcher',
  titleKo: 'AI 엔지니어 & 연구원',
  location: 'Seoul, South Korea',
  locationKo: '대한민국 서울',
  email: 'shyu@daton.ai',
  phone: '+82-10-XXXX-XXXX', // Optional
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  blog: 'https://blog.example.com', // Optional
  profileImage: '/images/profile.jpg', // Optional
};

// Keywords and tags for SEO/search
export const keywords = [
  'AI Engineer',
  'Machine Learning',
  'Computer Vision',
  'Deep Learning',
  'Full-stack Developer',
  'Python',
  'PyTorch',
  'React',
  'Real-time Systems',
  'YOLO Object Detection',
  'RAG LLM',
  'Edge Computing',
  'IoT',
  'Data Engineering',
  'Research',
  'Seoul Korea'
];

export const keywordsKo = [
  'AI 엔지니어',
  '머신러닝',
  '컴퓨터 비전',
  '딥러닝',
  '풀스택 개발자',
  '파이썬',
  '파이토치',
  '리액트',
  '실시간 시스템',
  'YOLO 객체탐지',
  'RAG LLM',
  '엣지 컴퓨팅',
  'IoT',
  '데이터 엔지니어링',
  '연구',
  '서울 한국'
];
