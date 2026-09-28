import { Project } from '../types/index';

export const projects: Project[] = [
  // ========== 메인 프로젝트 1: 실시간 CCTV 관제 시스템 ==========
  {
    id: 'cctv-surveillance',
    title: '온프레미스 실시간 CCTV 지능형 관제 시스템',
    titleKo: '온프레미스 실시간 CCTV 지능형 관제 시스템',
    description: '9개월간 개발한 프로덕션급 CCTV 관제 플랫폼. 엣지 컴퓨팅 기반 온프레미스 배포로 100% 데이터 프라이버시 보장.',
    descriptionKo: '**배경**: 기존 수동 CCTV 관제의 문제점 - 24시간 인력 투입 필요, 실시간 대응 불가능, 월 인건비 $50K\n\n**솔루션**: 엣지 AI 기반 자동 관제 시스템\n- YOLO v8 실시간 객체 탐지로 자동 위협 감지\n- 다중 카메라 피드 동시 모니터링\n- 엣지 컴퓨팅으로 < 100ms 지연시간\n\n**기술 도전 & 해결**:\n1. **지연시간 문제**: 클라우드 API 호출 → 1초 이상 지연\n   → NVIDIA Jetson AGX Orin 기반 로컬 GPU 추론으로 < 100ms 달성\n2. **메모리 부족**: 고화질 영상(4K) × 4채널 동시 처리 불가\n   → 영상 전처리(1080p), 배치 처리로 메모리 50% 절감\n3. **오탐지율**: 초기 45% 오탐지\n   → 현장 데이터 5,000장 추가 학습, 배경 필터링으로 오탐지율 95% → 8% 감소\n\n**정량화된 성과**:\n- ✅ **비용**: 월 인건비 $50K → $8K (84% 절감)\n- ✅ **성능**: 감지 정확도 82% → 96% (F1-score 0.945)\n- ✅ **속도**: 평균 감지 시간 45초 → 8초 (5.6배 개선)\n- ✅ **확장성**: 초당 10,000개 이벤트 처리 능력\n- ✅ **신뢰성**: 99.8% 가용성, 5개 사이트 운영 중\n- ✅ **배포**: 7개 기관에 배포, 월 500만 건 영상 분석\n\n**배운 점**: 클라우드 vs 엣지 트레이드오프 이해, GPU 최적화의 중요성, 도메인별 데이터 큐레이션의 가치',
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

  // ========== 메인 프로젝트 2: RT 필름 자동판독 ==========
  {
    id: 'rt-film-reading',
    title: 'RT 필름 자동판독 시스템 (정부 R&D 과제)',
    titleKo: 'RT 필름 자동판독 시스템 (정부 R&D 과제)',
    description: '정부 과제 기반 방사선 검사 자동화. 98% 정확도의 딥러닝 모델로 수동 검사 시간 80% 단축.',
    descriptionKo: '**배경**: 비파괴 검사(NDT) 산업의 문제점 - 숙련된 검사자 부족, 검사 편차 큼, 월 검사 비용 $100K\n\n**솔루션**: CNN 기반 자동판독 시스템\n- ResNet-50 백본으로 결함 패턴 분류\n- 자동 이상 탐지 및 신뢰도 점수 제공\n- GUI 기반 사용자 인터페이스\n\n**기술 도전 & 해결**:\n1. **데이터 부족**: 양질의 라벨링 필터름 부족 (총 500장)\n   → Augmentation (회전, 노이즈, 밝기), 전이학습 적용으로 데이터 8배 확장\n2. **클래스 불균형**: 정상 vs 불량 = 8:2\n   → Focal loss 적용, 전략적 언더샘플링으로 해결\n3. **임상적 신뢰성**: 의료/제조업 규정 준수 필요\n   → 모든 판단에 신뢰도 점수 + 설명 가능한 AI(CAM) 시각화\n\n**정량화된 성과**:\n- ✅ **정확도**: 98% (96.5% 민감도, 99.2% 특이도)\n- ✅ **속도**: 검사 시간 2시간 → 15분 (8배 단축)\n- ✅ **비용**: 월 검사 비용 $100K → $18K (82% 절감)\n- ✅ **생산성**: 월 검사 건수 200건 → 1,600건 (8배 증대)\n- ✅ **정부 평가**: 기술 성숙도 TRL 6 → TRL 8 달성\n- ✅ **확장성**: 타 검사 시스템으로 모듈화 가능\n\n**배운 점**: 제한된 의료/산업 데이터로 학습시키는 전략, 규제 준수 필요성, 설명 가능성의 중요성',
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
  // ========== SSAFY 프로젝트들 (간략 표시) ==========
  {
    id: 'oldab',
    title: 'OldAb - RAG 기반 수학 AI 튜터',
    titleKo: 'OldAb - RAG 기반 수학 AI 튜터',
    description: 'SSAFY 우수 프로젝트상 수상. RAG 기반 수학 문제 자동 해설 시스템. 1000명 동시접속 처리, 92% 학생 만족도.',
    descriptionKo: 'RAG 기술로 수학 문제의 개인화된 설명을 자동 생성. LangChain + OpenAI + Pinecone 벡터DB 활용. SSAFY 최우수 프로젝트상 수상.',
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
    title: 'YooHoo - 금융 API 통합 플랫폼',
    titleKo: 'YooHoo - 금융 API 통합 플랫폼',
    description: '실시간 금융 데이터 플랫폼. 5개 금융 API 통합, WebSocket으로 실시간 가격 업데이트. 99.5% 가동시간 SLA 달성.',
    descriptionKo: '여러 금융 API를 통합한 실시간 시장 데이터 플랫폼. WebSocket으로 라이브 가격 업데이트, 포트폴리오 추적 기능. 일일 1,000만 건 API 요청 처리.',
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
    title: 'AIBaro - AI 기반 자산 관리 시스템',
    titleKo: 'AIBaro - AI 기반 자산 관리 시스템',
    description: 'ML 기반 자산 배분 추천 시스템. 87% 정확도의 자산 성과 예측 모델. 인터랙티브 대시보드로 시각화.',
    descriptionKo: 'scikit-learn으로 자산 성과 예측 (87% 정확도). 자동 리밸런싱 추천, D3.js 기반 인터랙티브 시각화. 78% 사용자 유지율 달성.',
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
    title: 'TONG - PT 매칭 플랫폼',
    titleKo: 'TONG - PT 매칭 플랫폼',
    description: 'PT와 클라이언트를 연결하는 소셜 플랫폼. 94% 호환도의 스마트 매칭 알고리즘. 500명 동시접속 실시간 채팅.',
    descriptionKo: 'Spring Boot + Vue.js 풀스택 프로젝트. 목표/일정 기반 94% 정확도 매칭 알고리즘, WebSocket 실시간 채팅, 1000쌍 매칭 성공.',
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

  // ========== 인턴십 & 학부 프로젝트 ==========
  {
    id: 'parking-detection',
    title: '주차장 CCTV 객체탐지 시스템',
    titleKo: '주차장 CCTV 객체탐지 시스템',
    description: 'Besella Lab 인턴십. YOLOv5로 차량 탐지 (91% 정확도), 4K 스트림 실시간 처리.',
    descriptionKo: 'YOLOv5 + PyTorch + OpenCV. 차량 탐지 91% 정확도, 4K CCTV 스트림 실시간 처리, 데이터 증강으로 오탐지율 40% 감소.',
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
    title: '의료AI 경진대회 - X선 영상 분류',
    titleKo: '의료AI 경진대회 - X선 영상 분류',
    description: '전국 의료AI 경진대회 우수상. CNN + Attention으로 X선 이상 탐지 (96% 정확도).',
    descriptionKo: 'TensorFlow CNN + Attention Mechanism. 흉부 X선 영상 분류 96% 정확도, 어텐션 시각화로 의사 해석성 제공. 국내 경진대회 우수상 수상.',
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
    title: '스마트시티 IoT 센서 네트워크',
    titleKo: '스마트시티 IoT 센서 네트워크',
    description: 'Arduino + MQTT 기반 IoT 센서 네트워크. 일일 10만 건 데이터 처리, 교통 이상 탐지 87% 정확도.',
    descriptionKo: 'Arduino 센서 + MQTT + Python 데이터 처리. 환경/교통 데이터 수집 및 패턴 분석, 실시간 대시보드, 이상 탐지 87% 정확도.',
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
    title: 'X선 영상 처리 및 분석',
    titleKo: 'X선 영상 처리 및 분석',
    description: '디지털 영상 처리. OpenCV로 8개 알고리즘 구현, SNR 35% 개선.',
    descriptionKo: 'Python + OpenCV로 X선 영상 향상 및 특징 추출. 8개 영상 처리 알고리즘 구현, 신호 품질 35% 개선, 재사용 가능한 파이프라인 구축.',
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
