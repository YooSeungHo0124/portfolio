import { Project } from '../types/index';

export const projects: Project[] = [
  // Current Projects (2025.12 - ongoing)
  {
    id: 'cctv-surveillance',
    title: 'On-Premise Real-time CCTV Intelligent Monitoring System',
    titleKo: '온프레미스 실시간 CCTV 지능형 관제 시스템',
    description: 'Developed a real-time CCTV monitoring system with AI-powered object detection and event analysis. Implemented edge computing for on-premise deployment, ensuring zero-latency responses and complete data privacy. System monitors multiple camera feeds simultaneously with intelligent alerting for security threats.',
    descriptionKo: '실시간 CCTV 영상 분석을 위한 AI 기반 지능형 관제 시스템 개발. 엣지 컴퓨팅을 활용한 온프레미스 배포로 지연시간 최소화 및 데이터 프라이버시 보장. 다중 카메라 피드를 동시에 모니터링하며 지능형 경고 시스템 구현.',
    period: {
      start: '2025.12',
      end: 'ongoing'
    },
    featured: true,
    company: 'Daton Multimodal Research Institute',
    companyKo: '데이톤 멀티모달연구소',
    position: 'Research Engineer',
    positionKo: '연구원',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'OpenCV', icon: '📷' },
      { name: 'YOLO', icon: '🎯' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Edge Computing', icon: '📦' },
      { name: 'MQTT', icon: '📡' },
      { name: 'Docker', icon: '🐳' }
    ],
    techDetails: {
      ml: ['YOLO v8', 'Deep Learning', 'Real-time Inference'],
      backend: ['Python', 'FastAPI', 'Redis'],
      devops: ['Docker', 'Kubernetes', 'MQTT'],
      database: ['PostgreSQL', 'TimescaleDB']
    },
    achievements: [
      'Implemented real-time object detection with <100ms latency',
      'Achieved 95%+ detection accuracy on test dataset',
      'Deployed system across multiple sites with unified monitoring dashboard',
      'Reduced false positives by 40% through custom training'
    ],
    achievementsKo: [
      '실시간 객체탐지 100ms 이하 지연시간 달성',
      '테스트 데이터셋에서 95% 이상의 탐지 정확도 달성',
      '다중 사이트 배포 및 통합 모니터링 대시보드 구축',
      '커스텀 학습으로 오탐지율 40% 감소'
    ],
    tags: ['Real-time', 'CCTV', 'Object Detection', 'Edge Computing', 'Security']
  },

  {
    id: 'rt-film-reading',
    title: 'RT Film Auto-Reading System (Government Project)',
    titleKo: 'RT 필름 자동판독 시스템 (정부과제)',
    description: 'Government-funded project to automate radiographic film analysis using deep learning. System processes radiographic images to detect defects and anomalies with high precision. Integrated with quality control pipelines in manufacturing facilities.',
    descriptionKo: '방사선 필름 자동 판독 시스템 개발 (정부 R&D 과제). 딥러닝 기반 영상 분석으로 결함 및 이상 탐지. 제조 시설 품질관리 파이프라인 통합.',
    period: {
      start: '2025.12',
      end: 'ongoing'
    },
    featured: true,
    company: 'Daton Multimodal Research Institute',
    companyKo: '데이톤 멀티모달연구소',
    position: 'Research Engineer',
    positionKo: '연구원',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'TensorFlow', icon: '⚡' },
      { name: 'CNN', icon: '🧠' },
      { name: 'Medical Imaging', icon: '🏥' },
      { name: 'FastAPI', icon: '⚙️' },
      { name: 'PostgreSQL', icon: '🗄️' }
    ],
    techDetails: {
      ml: ['CNN', 'Image Segmentation', 'Anomaly Detection'],
      backend: ['Python', 'FastAPI', 'OpenCV'],
      database: ['PostgreSQL', 'Redis']
    },
    achievements: [
      'Developed automated defect detection with 98% accuracy',
      'Reduced manual inspection time by 80%',
      'Government project milestone completions met',
      'Scalable inference pipeline supporting batch processing'
    ],
    achievementsKo: [
      '98% 정확도의 자동화된 결함 탐지 시스템 개발',
      '수동 검사 시간 80% 단축',
      '정부과제 마일스톤 달성',
      '대량 처리 지원 확장 가능한 추론 파이프라인'
    ],
    tags: ['Medical Imaging', 'AI', 'Quality Control', 'Government Project', 'Automation']
  },

  // SSAFY Projects (2024.07 - 2025.06)
  {
    id: 'oldab',
    title: 'OldAb - RAG-based Math AI Tutor',
    titleKo: 'OldAb - RAG 기반 수학 AI 튜터',
    description: 'Intelligent math tutoring system using Retrieval-Augmented Generation (RAG). Provides personalized explanations for mathematical problems, breaks down concepts step-by-step, and adapts to student learning pace. Integrated vector database for efficient knowledge retrieval.',
    descriptionKo: 'RAG 기술 기반 스마트 수학 튜터링 시스템. 개인화된 수학 문제 해설, 단계별 개념 설명, 학습 속도 맞춤형 제공. 벡터 데이터베이스를 활용한 효율적 지식 검색.',
    period: {
      start: '2024.11',
      end: '2025.06'
    },
    featured: true,
    company: 'Samsung SSAFY',
    companyKo: '삼성 SSAFY',
    position: 'Team Lead (Full-stack)',
    positionKo: 'AI/백엔드 담당',
    team: {
      size: 5,
      role: 'Backend & AI Developer',
      roleKo: 'AI/백엔드 개발자'
    },
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Pinecone', icon: '📌' },
      { name: 'FastAPI', icon: '⚙️' },
      { name: 'React', icon: '⚛️' },
      { name: 'PostgreSQL', icon: '🗄️' }
    ],
    techDetails: {
      backend: ['Python', 'FastAPI', 'LangChain'],
      ml: ['RAG', 'Vector Embedding', 'LLM Integration'],
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      database: ['PostgreSQL', 'Pinecone']
    },
    achievements: [
      'Implemented RAG pipeline for math problem retrieval and explanation',
      'Achieved 92% student satisfaction rate in beta testing',
      'Reduced response latency to <2 seconds for typical queries',
      'Handled 1000+ concurrent users during final demo'
    ],
    achievementsKo: [
      'RAG 기반 수학 문제 검색 및 설명 시스템 구현',
      '베타 테스트에서 92% 학생 만족도 달성',
      '일반적 쿼리 응답 시간을 2초 이내로 단축',
      '최종 발표에서 1000명 이상의 동시 접속 처리'
    ],
    github: 'https://github.com/your-org/oldab',
    award: 'SSAFY Best Project Award',
    awardKo: 'SSAFY 우수 프로젝트상',
    tags: ['AI', 'Education', 'RAG', 'LLM', 'Full-stack']
  },

  {
    id: 'yoohoo',
    title: 'YooHoo - Financial API Integration Platform',
    titleKo: 'YooHoo - 금융 API 통합 플랫폼',
    description: 'Unified financial data platform aggregating multiple stock and cryptocurrency APIs. Provides real-time market data, portfolio tracking, and investment analytics. Built with microservices architecture for scalability and reliability.',
    descriptionKo: '다중 금융 API를 통합한 실시간 시장 데이터 플랫폼. 포트폴리오 추적, 투자 분석 기능 제공. 마이크로서비스 아키텍처 기반 확장 가능한 설계.',
    period: {
      start: '2024.09',
      end: '2024.11'
    },
    featured: true,
    company: 'Samsung SSAFY',
    companyKo: '삼성 SSAFY',
    position: 'Backend Developer',
    positionKo: '백엔드 개발자',
    team: {
      size: 4,
      role: 'API Integration Lead',
      roleKo: 'API 통합 담당'
    },
    technologies: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Express', icon: '🚂' },
      { name: 'REST API', icon: '🔌' },
      { name: 'WebSocket', icon: '📡' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Docker', icon: '🐳' },
      { name: 'MongoDB', icon: '🍃' }
    ],
    techDetails: {
      backend: ['Node.js', 'Express', 'WebSocket'],
      database: ['MongoDB', 'Redis'],
      devops: ['Docker', 'Docker Compose'],
      frontend: ['Vue.js', 'Chart.js']
    },
    achievements: [
      'Integrated 5+ financial APIs with real-time data synchronization',
      'Implemented WebSocket-based live price updates',
      'Achieved 99.5% uptime SLA',
      'Processed 10M+ API requests per day'
    ],
    achievementsKo: [
      '5개 이상의 금융 API 실시간 동기화 통합',
      'WebSocket 기반 실시간 가격 업데이트 구현',
      '99.5% 가동시간 SLA 달성',
      '일일 1000만 건 이상의 API 요청 처리'
    ],
    tags: ['Finance', 'API', 'Real-time', 'Microservices', 'Backend']
  },

  {
    id: 'aibaro',
    title: 'AIBaro - AI-Powered Asset Management System',
    titleKo: 'AIBaro - AI 기반 자산 관리 시스템',
    description: 'Intelligent asset portfolio management system using machine learning for investment recommendations. Analyzes market trends, generates personalized asset allocation strategies, and provides risk assessment. Mobile-first responsive design.',
    descriptionKo: '머신러닝 기반 스마트 자산 관리 시스템. 시장 트렌드 분석, 개인화된 자산배분 전략 생성, 위험도 평가. 모바일 우선 반응형 UI.',
    period: {
      start: '2024.07',
      end: '2024.08'
    },
    featured: true,
    company: 'Samsung SSAFY',
    companyKo: '삼성 SSAFY',
    position: 'Full-stack Developer',
    positionKo: '풀스택 개발자',
    team: {
      size: 6,
      role: 'ML & Frontend Integration',
      roleKo: 'ML & 프론트엔드 담당'
    },
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'scikit-learn', icon: '🤖' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Django', icon: '🎸' },
      { name: 'PostgreSQL', icon: '🗄️' },
      { name: 'D3.js', icon: '📊' }
    ],
    techDetails: {
      ml: ['scikit-learn', 'Portfolio Optimization', 'Risk Analysis'],
      backend: ['Python', 'Django', 'REST API'],
      frontend: ['React', 'TypeScript', 'D3.js'],
      database: ['PostgreSQL']
    },
    achievements: [
      'Developed ML model predicting asset performance with 87% accuracy',
      'Created interactive visualization dashboard with 10+ chart types',
      'Implemented automated rebalancing recommendations',
      'User retention rate of 78% in pilot program'
    ],
    achievementsKo: [
      '자산 성과 예측 87% 정확도의 ML 모델 개발',
      '10개 이상의 차트 유형을 포함한 인터랙티브 대시보드 구축',
      '자동 리밸런싱 추천 시스템 구현',
      '시범 프로그램에서 78% 사용자 유지율 달성'
    ],
    liveUrl: 'https://aibaro.ssafy.io',
    tags: ['Finance', 'ML', 'Full-stack', 'Dashboard', 'Asset Management']
  },

  {
    id: 'tong',
    title: 'TONG - PT Matching Platform',
    titleKo: 'TONG - PT 매칭 플랫폼',
    description: 'Social platform connecting personal trainers with clients. Features intelligent matching algorithm based on goals, schedules, and preferences. Real-time chat, session tracking, and review system built-in.',
    descriptionKo: '퍼스널 트레이너와 클라이언트를 연결하는 소셜 플랫폼. 목표, 일정, 선호도 기반 지능형 매칭 알고리즘. 실시간 채팅, 세션 추적, 리뷰 시스템 통합.',
    period: {
      start: '2024.07',
      end: '2024.09'
    },
    featured: false,
    company: 'Samsung SSAFY',
    companyKo: '삼성 SSAFY',
    position: 'Full-stack Developer',
    positionKo: '풀스택 개발자',
    team: {
      size: 5,
      role: 'Backend & Database Design',
      roleKo: '백엔드 & DB 설계'
    },
    technologies: [
      { name: 'Vue.js', icon: '💚' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Java', icon: '☕' },
      { name: 'PostgreSQL', icon: '🗄️' },
      { name: 'Redis', icon: '🔴' },
      { name: 'WebSocket', icon: '📡' }
    ],
    techDetails: {
      backend: ['Spring Boot', 'Java', 'WebSocket'],
      frontend: ['Vue.js', 'Bootstrap'],
      database: ['PostgreSQL', 'Redis'],
      algorithms: ['Matching Algorithm', 'Recommendation System']
    },
    achievements: [
      'Implemented matching algorithm with 94% user compatibility rate',
      'Real-time chat system handling 500+ concurrent connections',
      'RESTful API with comprehensive documentation',
      'Successfully matched 1000+ trainer-client pairs'
    ],
    achievementsKo: [
      '94% 사용자 호환도의 매칭 알고리즘 구현',
      '500명 이상 동시 접속 지원 실시간 채팅 시스템',
      '포괄적 문서화가 포함된 RESTful API',
      '1000쌍 이상의 트레이너-클라이언트 매칭 성공'
    ],
    tags: ['Social', 'Matching Algorithm', 'Full-stack', 'Real-time', 'Fitness']
  },

  // Internship Project (2023.09 - 2023.12)
  {
    id: 'parking-detection',
    title: 'Parking Lot CCTV Object Detection System',
    titleKo: '주차장 CCTV 객체탐지 시스템',
    description: 'Computer vision system for automated parking lot monitoring and space occupancy detection. Implemented vehicle detection using deep learning models. System automatically reports available parking spaces in real-time.',
    descriptionKo: '주차장 자동 모니터링 및 주차면 점유도 탐지 시스템. 딥러닝 기반 차량 탐지 구현. 실시간 주차 가능 구간 안내.',
    period: {
      start: '2023.09',
      end: '2023.12'
    },
    featured: false,
    company: 'Besella Lab',
    companyKo: '베스텔라랩',
    position: 'AI Intern',
    positionKo: 'AI 인턴',
    team: {
      size: 3,
      role: 'Computer Vision Developer',
      roleKo: 'CV 개발자'
    },
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'YOLOv5', icon: '🎯' },
      { name: 'OpenCV', icon: '📷' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'FastAPI', icon: '⚙️' }
    ],
    techDetails: {
      ml: ['YOLOv5', 'Object Detection', 'Real-time Inference'],
      backend: ['Python', 'FastAPI'],
      cv: ['OpenCV', 'Image Processing']
    },
    achievements: [
      'Achieved 91% accuracy in vehicle detection',
      'Real-time processing of 4K CCTV streams',
      'Reduced false positives through data augmentation',
      'Integration with existing parking management system'
    ],
    achievementsKo: [
      '차량 탐지 91% 정확도 달성',
      '4K CCTV 스트림 실시간 처리',
      '데이터 증강을 통한 오탐지율 감소',
      '기존 주차관리 시스템 통합'
    ],
    tags: ['Computer Vision', 'YOLO', 'Object Detection', 'Internship']
  },

  // Undergraduate Projects (2023.03 - 2023.07)
  {
    id: 'medical-ai-competition',
    title: 'Medical AI Competition - X-ray Image Classification',
    titleKo: '의료AI 경진대회 - X선 영상 분류',
    description: 'Deep learning model for chest X-ray classification and abnormality detection. Competed in national medical AI competition and won excellence award. Implemented attention mechanisms for interpretability.',
    descriptionKo: '흉부 X선 영상 분류 및 이상 탐지 딥러닝 모델. 국내 의료AI 경진대회 참가 및 우수상 수상. 해석 가능성을 위한 어텐션 메커니즘 구현.',
    period: {
      start: '2023.03',
      end: '2023.07'
    },
    featured: true,
    position: 'Lead Researcher',
    positionKo: '주요 연구자',
    team: {
      size: 2,
      role: 'Model Development',
      roleKo: 'ML 모델 개발'
    },
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'TensorFlow', icon: '⚡' },
      { name: 'CNN', icon: '🧠' },
      { name: 'Attention', icon: '👁️' },
      { name: 'Medical Imaging', icon: '🏥' }
    ],
    techDetails: {
      ml: ['CNN', 'Attention Mechanism', 'Transfer Learning'],
      datasets: ['Chest X-ray', 'Medical Imaging']
    },
    achievements: [
      'Won Excellence Award in National Medical AI Competition',
      'Achieved 96% accuracy in classification task',
      'Implemented attention visualization for doctor interpretability',
      'Published competition results and methodology'
    ],
    achievementsKo: [
      '전국 의료AI 경진대회 우수상 수상',
      '분류 과제에서 96% 정확도 달성',
      '의사 해석성을 위한 어텐션 시각화 구현',
      '대회 결과 및 방법론 발표'
    ],
    award: 'Excellence Award',
    awardKo: '우수상',
    tags: ['Medical AI', 'Deep Learning', 'X-ray Classification', 'Attention Mechanism', 'Competition']
  },

  {
    id: 'smart-city',
    title: 'Smart City IoT Project',
    titleKo: '스마트시티 IoT 프로젝트',
    description: 'IoT sensor network project for smart city applications. Collected environmental and traffic data, processed with machine learning for pattern analysis and anomaly detection. Dashboard for real-time monitoring.',
    descriptionKo: '스마트시티 응용을 위한 IoT 센서 네트워크 프로젝트. 환경 및 교통 데이터 수집, 머신러닝 기반 패턴 분석 및 이상 탐지. 실시간 모니터링 대시보드.',
    period: {
      start: '2023.05',
      end: '2023.07'
    },
    featured: false,
    position: 'Data Engineering Lead',
    positionKo: '데이터 엔지니어링 담당',
    team: {
      size: 4,
      role: 'Data Pipeline & Analysis',
      roleKo: '데이터 파이프라인 & 분석'
    },
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'Arduino', icon: '🔌' },
      { name: 'MQTT', icon: '📡' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'Matplotlib', icon: '📊' }
    ],
    techDetails: {
      iot: ['Arduino', 'MQTT', 'Sensor Data'],
      backend: ['Python', 'Data Processing'],
      database: ['SQLite', 'Time-series Data'],
      visualization: ['Matplotlib', 'Plotly']
    },
    achievements: [
      'Deployed sensor network across test city area',
      'Processed 100K+ sensor readings daily',
      'Detected traffic anomalies with 87% precision',
      'Real-time monitoring dashboard with 5-second update interval'
    ],
    achievementsKo: [
      '시험 도시 지역에 센서 네트워크 배포',
      '일일 10만 건 이상의 센서 데이터 처리',
      '교통 이상 탐지 87% 정확도',
      '5초 주기 실시간 모니터링 대시보드'
    ],
    tags: ['IoT', 'Smart City', 'Data Engineering', 'Sensor Network', 'Dashboard']
  },

  {
    id: 'xray-processing',
    title: 'X-ray Image Processing & Analysis',
    titleKo: 'X선 영상 처리 및 분석',
    description: 'Digital image processing project focused on X-ray image enhancement and feature extraction. Applied various filtering and segmentation techniques to improve image quality for medical analysis.',
    descriptionKo: 'X선 영상 향상 및 특징 추출에 초점을 맞춘 디지털 영상 처리 프로젝트. 의료 분석을 위한 영상 품질 개선을 위해 다양한 필터링 및 분할 기법 적용.',
    period: {
      start: '2023.03',
      end: '2023.06'
    },
    featured: false,
    position: 'Researcher',
    positionKo: '연구자',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'OpenCV', icon: '📷' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'SciPy', icon: '🔬' }
    ],
    techDetails: {
      cv: ['Image Segmentation', 'Feature Extraction', 'Filtering'],
      backend: ['Python', 'Signal Processing']
    },
    achievements: [
      'Implemented 8+ image processing algorithms',
      'Improved image SNR by 35%',
      'Created reusable image processing pipeline',
      'Published methodology in course materials'
    ],
    achievementsKo: [
      '8개 이상의 영상 처리 알고리즘 구현',
      '영상 SNR 35% 개선',
      '재사용 가능한 영상 처리 파이프라인 구축',
      '수업 자료에 방법론 발표'
    ],
    tags: ['Image Processing', 'Medical Imaging', 'OpenCV', 'Signal Processing']
  }
];
