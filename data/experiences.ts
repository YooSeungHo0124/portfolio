import { Experience } from '../types/index';

export const experiences: Experience[] = [
  {
    id: 'daton-current',
    title: 'Research Engineer - Multimodal AI Systems',
    titleKo: '연구원 - 멀티모달 AI 시스템',
    company: 'Daton Multimodal Research Institute',
    companySummary: 'AI research institute focused on multimodal learning and real-time computer vision systems',
    companySummaryKo: '멀티모달 학습과 실시간 컴퓨터 비전 시스템에 중점을 두는 AI 연구소',
    position: 'Research Engineer',
    positionKo: '연구원',
    employment_type: 'Full-time',
    period: {
      start: '2025.12',
      end: 'current'
    },
    description: 'Currently developing advanced real-time CCTV monitoring systems and automated film analysis solutions for critical infrastructure and quality control applications.',
    descriptionKo: '현재 중요 기반시설 및 품질관리 응용을 위한 고급 실시간 CCTV 모니터링 시스템 및 자동화된 필름 분석 솔루션 개발 중.',
    responsibilities: [
      'Design and implement real-time object detection pipelines for CCTV systems',
      'Develop edge computing solutions for on-premise deployment',
      'Research and optimize deep learning models for production environments',
      'Lead technical implementation of government-funded R&D projects',
      'Collaborate with cross-functional teams on system architecture'
    ],
    responsibilitiesKo: [
      'CCTV 시스템을 위한 실시간 객체탐지 파이프라인 설계 및 구현',
      '온프레미스 배포용 엣지 컴퓨팅 솔루션 개발',
      '프로덕션 환경 최적화된 딥러닝 모델 연구',
      '정부 R&D 과제의 기술 구현 주도',
      '시스템 아키텍처 관련 교차 기능 팀 협업'
    ],
    achievements: [
      'Deployed real-time monitoring system with <100ms latency',
      'Achieved 95%+ accuracy in object detection tasks',
      'Completed government project milestone targets ahead of schedule',
      'Mentored junior researchers on ML best practices'
    ],
    achievementsKo: [
      '100ms 이하 지연시간의 실시간 모니터링 시스템 배포',
      '객체탐지 95% 이상 정확도 달성',
      '정부과제 마일스톤 목표를 예정보다 앞서 완료',
      '주니어 연구원들에게 ML 모범 사례 지도'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'YOLO',
      'OpenCV',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'MQTT',
      'PostgreSQL'
    ],
    projects: [
      'cctv-surveillance',
      'rt-film-reading'
    ],
    location: 'Seoul, South Korea'
  },

  {
    id: 'ssafy-student',
    title: 'Software Developer - Full-Stack & AI',
    titleKo: '소프트웨어 개발자 - 풀스택 & AI',
    company: 'Samsung SSAFY (Software Society for AI-Fluent Youth)',
    companySummary: 'Samsung-sponsored intensive coding bootcamp and innovation program focusing on AI and software development',
    companySummaryKo: '삼성에서 후원하는 AI 및 소프트웨어 개발에 중점을 두는 집중식 코딩 부트캠프 및 혁신 프로그램',
    position: 'SSAFY Student Developer',
    positionKo: 'SSAFY 학생 개발자',
    employment_type: 'Full-time',
    period: {
      start: '2024.07',
      end: '2025.06'
    },
    description: 'Participated in 12-month intensive bootcamp covering full-stack development, AI/ML, and software engineering best practices. Completed 4 major projects with team leadership roles.',
    descriptionKo: '풀스택 개발, AI/ML, 소프트웨어 엔지니어링 모범 사례를 포괄하는 12개월 집중식 부트캠프에 참여. 팀 리더십 역할을 수행하는 4개의 주요 프로젝트 완료.',
    responsibilities: [
      'Develop full-stack web applications using modern frameworks',
      'Implement machine learning models for real-world problems',
      'Lead team sprints and technical decision-making',
      'Conduct code reviews and knowledge sharing sessions',
      'Participate in competitive hackathons and project competitions'
    ],
    responsibilitiesKo: [
      '최신 프레임워크를 사용한 풀스택 웹 애플리케이션 개발',
      '실제 문제 해결을 위한 머신러닝 모델 구현',
      '팀 스프린트 및 기술 의사결정 주도',
      '코드 리뷰 및 지식 공유 세션 진행',
      '경쟁적 해커톤 및 프로젝트 경쟁 참여'
    ],
    achievements: [
      'Won SSAFY Best Project Award for OldAb RAG tutoring system',
      'Successfully led 4 cross-functional development teams (4-6 members each)',
      'Mastered React, Vue.js, Node.js, Python, and Spring Boot',
      'Improved code quality through architectural best practices',
      'Completed 200+ coding challenges and 15+ mini projects'
    ],
    achievementsKo: [
      'OldAb RAG 튜터링 시스템으로 SSAFY 우수 프로젝트상 수상',
      '4개의 교차 기능 개발 팀 성공적으로 리드 (각 4-6명)',
      'React, Vue.js, Node.js, Python, Spring Boot 숙달',
      '아키텍처 모범 사례를 통한 코드 품질 개선',
      '200개 이상의 코딩 챌린지 및 15개 이상의 미니 프로젝트 완료'
    ],
    technologies: [
      'JavaScript/TypeScript',
      'Python',
      'Java',
      'React',
      'Vue.js',
      'Node.js',
      'Spring Boot',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker'
    ],
    projects: [
      'oldab',
      'yoohoo',
      'aibaro',
      'tong'
    ],
    location: 'Daejeon/Seoul, South Korea'
  },

  {
    id: 'besella-intern',
    title: 'AI Internship - Computer Vision',
    titleKo: 'AI 인턴십 - 컴퓨터 비전',
    company: 'Besella Lab',
    companySummary: 'Computer vision and AI research laboratory specializing in real-world applications',
    companySummaryKo: '실제 응용에 특화된 컴퓨터 비전 및 AI 연구소',
    position: 'AI Research Intern',
    positionKo: 'AI 연구 인턴',
    employment_type: 'Internship',
    period: {
      start: '2023.09',
      end: '2023.12'
    },
    description: 'Interned at computer vision research lab, working on object detection systems for parking lot monitoring. Gained practical experience in deep learning model development, training, and deployment.',
    descriptionKo: '컴퓨터 비전 연구소에서 인턴십을 진행하며 주차장 모니터링을 위한 객체탐지 시스템 개발. 딥러닝 모델 개발, 학습 및 배포의 실전 경험 획득.',
    responsibilities: [
      'Develop vehicle detection models using YOLOv5 and PyTorch',
      'Process and annotate training datasets',
      'Implement real-time inference pipeline for CCTV streams',
      'Optimize model performance through data augmentation',
      'Document methodology and results for technical reports'
    ],
    responsibilitiesKo: [
      'YOLOv5와 PyTorch를 사용한 차량 탐지 모델 개발',
      '학습 데이터셋 처리 및 주석 작업',
      'CCTV 스트림용 실시간 추론 파이프라인 구현',
      '데이터 증강을 통한 모델 성능 최적화',
      '기술 보고서용 방법론 및 결과 문서화'
    ],
    achievements: [
      'Developed vehicle detection model with 91% accuracy',
      'Successfully processed 4K video streams in real-time',
      'Reduced false positives by 40% through training optimization',
      'Published internship results in company technical blog'
    ],
    achievementsKo: [
      '91% 정확도의 차량 탐지 모델 개발',
      '4K 비디오 스트림의 실시간 처리 성공',
      '학습 최적화를 통한 오탐지율 40% 감소',
      '회사 기술 블로그에 인턴십 결과 발표'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'YOLOv5',
      'OpenCV',
      'CUDA',
      'NumPy',
      'Pandas'
    ],
    projects: [
      'parking-detection'
    ],
    location: 'Seoul, South Korea'
  },

  {
    id: 'university-projects',
    title: 'Undergraduate Researcher - AI & Image Processing',
    titleKo: '학부 연구원 - AI & 영상 처리',
    company: 'University Computer Science Department',
    companySummary: 'Academic research and project work during undergraduate studies',
    companySummaryKo: '학부 재학 중 진행한 학술 연구 및 프로젝트',
    position: 'Undergraduate Researcher',
    positionKo: '학부 연구원',
    employment_type: 'Part-time',
    period: {
      start: '2023.03',
      end: '2023.07'
    },
    description: 'Conducted research projects in medical AI, image processing, and IoT systems. Participated in national competition and developed foundational AI/ML skills.',
    descriptionKo: '의료 AI, 영상 처리 및 IoT 시스템의 연구 프로젝트 진행. 국내 경진대회 참가 및 기초 AI/ML 기술 개발.',
    responsibilities: [
      'Research and implement deep learning models for medical imaging',
      'Apply digital image processing techniques to X-ray analysis',
      'Design and build IoT sensor data collection system',
      'Write technical reports and project documentation',
      'Present findings at university symposiums and competitions'
    ],
    responsibilitiesKo: [
      '의료 영상용 딥러닝 모델 연구 및 구현',
      'X선 분석에 디지털 영상 처리 기법 적용',
      'IoT 센서 데이터 수집 시스템 설계 및 구축',
      '기술 보고서 및 프로젝트 문서 작성',
      '대학 심포지움 및 경진대회에서 연구 결과 발표'
    ],
    achievements: [
      'Won Excellence Award in National Medical AI Competition',
      'Achieved 96% accuracy in X-ray image classification',
      'Developed complete IoT monitoring system with 100K+ daily readings',
      'Published 3 technical reports on project methodologies'
    ],
    achievementsKo: [
      '전국 의료AI 경진대회에서 우수상 수상',
      'X선 영상 분류에서 96% 정확도 달성',
      '일일 10만 건 이상의 IoT 모니터링 시스템 개발',
      '프로젝트 방법론에 관한 3개의 기술 보고서 발표'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Arduino',
      'MATLAB'
    ],
    projects: [
      'medical-ai-competition',
      'smart-city',
      'xray-processing'
    ],
    location: 'South Korea'
  }
];
