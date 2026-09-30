'use client'

import Link from 'next/link'
import { ssafyProjects } from '@/data/ssafy-content'
import { otherProjects } from '@/data/projects-content'
import type { ProjectContent } from '@/components/ProjectDetail'
import { Mail, Phone, ArrowUpRight, Plus, Award, BadgeCheck, Languages, Shield } from 'lucide-react'
import { EMAILS, PHONE } from '@/lib/contact'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const eyebrow = 'font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-label'
const navItems = [
  { href: '#history', label: 'History' },
  { href: '#daton', label: 'Daton' },
  { href: '#ssafy', label: 'SSAFY' },
  { href: '#projects', label: 'Projects' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Direction' },
]

const datonCards = [
  {
    id: 'cctv-system',
    tag: 'System',
    title: '온프레미스 실시간 CCTV 관제',
    line: 'C++/Python 하이브리드 · 공유메모리 IPC · 고정 배치 TensorRT · Motion Gating · 이벤트 플러그인',
    numbers: [
      { v: '4×48GB', l: 'RTX PRO 5000 Blackwell' },
      { v: '10→1fps', l: 'Motion Gating' },
      { v: '60→0건', l: 'IPC 교착 재현 실패' },
    ],
  },
  {
    id: 'vlm-secondary',
    tag: 'VLM',
    title: 'VLM 기반 2차 판정',
    line: '학습을 거듭해도 남는 탐지 오탐을 2B급 VLM으로 재검증. 프롬프트·파서·서빙 스택을 동일 조건 실측으로 개선',
    numbers: [
      { v: '1.24→0.755s', l: 'TRT-LLM A/B' },
      { v: '86.7→95.1%', l: '화재 정확도*' },
      { v: '74→92.4%', l: '화재 recall*' },
    ],
  },
  {
    id: 'translation-distill',
    tag: 'Distillation',
    title: '7B → 0.6B 증류 번역 모델',
    line: 'VLM의 영어 판정 근거를 관제 요원용 한국어로. 시퀀스 레벨 증류 + GGUF 양자화 상시 서빙',
    numbers: [
      { v: '7B→0.6B', l: '교사 → 학생' },
      { v: '259,857', l: '증류 학습 쌍' },
      { v: '0.23s', l: '문장당 중앙 지연' },
    ],
  },
  {
    id: 'llm-router',
    tag: 'LLM Router',
    title: '관제 채팅 어시스턴트 라우터',
    line: '자연어 명령을 시스템 액션으로. 생성형 → 분류 헤드(single forward)로 재설계',
    numbers: [
      { v: '125→1회', l: '모델 순차 실행' },
      { v: '3,000→16~32', l: '입력 토큰' },
      { v: '72,714건', l: '학습 데이터' },
    ],
  },
  {
    id: 'training-infra',
    tag: 'Training',
    title: 'GPU 서버 학습 파이프라인',
    line: 'AI-Hub 등 33개 데이터셋 수집·정제, 하이퍼파라미터 탐색, 검출 모델 6종 학습, 모델 레지스트리',
    numbers: [
      { v: '1,473,609', l: 'train 이미지' },
      { v: '6종', l: 'YOLO26x 검출 모델' },
      { v: '0.9701', l: '지게차 mAP50-95' },
    ],
  },
  {
    id: 'rt-film',
    tag: 'Gov. Project',
    title: 'RT 필름 자동판독 (H사)',
    line: '정부과제. DICOM RT 필름에서 VLM OCR로 납문자 판독, 결함 후보 검출. 진행 중',
    numbers: [
      { v: '8만 장+', l: '전수 분석' },
      { v: '31.3→63.8%', l: 'IQI 판독률' },
      { v: '진행 중', l: '결함 검출 평가' },
    ],
  },
  {
    id: 'engineering-log',
    tag: 'Troubleshooting',
    title: '문제 해결 기록',
    line: '실제로 겪은 이슈 25건을 증상 → 원인 → 해결 → 측정값으로. 가설이 틀렸던 사례도 포함',
    numbers: [
      { v: '25건', l: '이슈 기록' },
      { v: '60→0건', l: 'IPC 교착 재현' },
      { v: '7→0건', l: 'Torn Frame 재현' },
    ],
  },
]

const journey = [
  {
    date: '2025.12 — NOW',
    title: 'Daton · 멀티모달연구소 팀러닝팀 연구원',
    desc: '온프레미스 CCTV 관제 · 비파괴 검사 필름 OCR 및 이상감지',
  },
  {
    date: '2024.07.01 — 2025.06',
    title: '삼성 청년 소프트웨어 아카데미 (SSAFY)',
    desc: '웹·핀테크 팀 프로젝트 · AWS / Docker / Jenkins · RAG · 챗봇 · 멀티모달 API',
  },
  {
    date: '2023.09.01 — 2023.12.21',
    title: '베스텔라랩 · 연구개발팀 인턴',
    desc: 'YOLOv8 + ByteTrack 주차 검증 · 주차 구역 관계식으로 이중주차·가림 차량 유추',
  },
  {
    date: '2023.09 — 2023.12',
    title: '고려대학교 CURT · Mediapipe 객체 탐지',
    desc: '1-stage / 2-stage 탐지 방식 비교 · 손실함수 이해 · 실시간 탐지 구현',
  },
  {
    date: '2023.03.04 — 2023.07.22',
    title: '딥러닝 기반 실시간 영상처리 시스템 구현 과정 (160H)',
    desc: '충청권 ICT 이노베이션 스퀘어 · 차종 분류와 번호판 OCR 조별 프로젝트',
  },
  {
    date: '2023.03 — 2023.06',
    title: '고려대학교 CURT · DANN 논문 분석',
    desc: 'Domain Adaptation 수학적 분석 · 도메인 차이로 인한 성능 저하 원인 · Matlab 구현',
  },
  {
    date: '2022.12.24 — 2023.01.21',
    title: '아스텔(주) · X-ray 이미지 개선',
    desc: 'GMM 기반 rewindowing으로 히스토그램 특이값을 제외하고 필요한 영역 추출',
  },
  {
    date: '2019.04.22 — 2020.11.22',
    title: '육군 병장 만기전역',
    desc: '기갑',
  },
  {
    date: '2018.03.01 — 2024.02.23',
    title: '고려대학교 세종캠퍼스 · 데이터계산과학',
    desc: '응용수리과학부 · 학점 3.72 / 4.5',
  },
]

// "2023.09.01 — 2023.12.21" / "2023.03 — 2023.06" / "2025.12 — NOW" → "4개월", "1년 7개월"
function durationLabel(range: string): string {
  const [from, to] = range.split('—').map((v) => v.trim())
  const toMs = (v: string, isEnd: boolean) => {
    if (v === 'NOW') {
      const n = new Date()
      return Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())
    }
    const [y, m, d] = v.split('.').map(Number)
    if (d) return Date.UTC(y, m - 1, d)
    return isEnd ? Date.UTC(y, m, 0) : Date.UTC(y, m - 1, 1) // month only: whole month
  }
  const days = (toMs(to, true) - toMs(from, false)) / 86400000 + 1
  const months = Math.max(1, Math.round(days / 30.44))
  const y = Math.floor(months / 12)
  const m = months % 12
  if (y === 0) return `${m}개월`
  return m === 0 ? `${y}년` : `${y}년 ${m}개월`
}

const recognition = [
  {
    kind: 'award',
    label: 'Award · 2023.11.08',
    org: '부산대학교병원',
    title: 'K-ium 의료인공지능경진대회 우수상',
    desc: '뇌혈관조영술 영상으로 뇌동맥류 여부와 발병 부위(21개 부위)를 판별하는 모델을 개발했습니다. 발병 부위 분류 정확도 97%, 발병 여부 AUROC 0.607 (test).',
    more: '전이학습과 데이터 증식으로 데이터 부족을 보완하고 과적합을 경계했습니다. 대회 후 최우수작 자료를 받아 비교하며, 모델 정확도 비교에만 집중해 이미지 검수와 전처리가 부족했음을 깨달았고 정제된 데이터의 중요성을 배웠습니다.',
  },
  {
    kind: 'cert',
    label: 'Certification · 2024.12.11',
    org: '한국산업인력공단',
    title: '정보처리기사',
    desc: '정보처리 분야 국가기술자격(기사).',
  },
  {
    kind: 'cert',
    label: 'Certification · 2024.12.13',
    org: '한국데이터산업진흥원',
    title: 'SQLD',
    desc: 'SQL 개발자 자격. 데이터 모델링과 SQL 활용.',
  },
  {
    kind: 'cert',
    label: 'Certification · 2026.08.28',
    org: '한국데이터산업진흥원',
    title: 'ADsP',
    desc: '데이터분석 준전문가. 데이터 이해와 분석 기획, 데이터 분석.',
  },
  {
    kind: 'lang',
    label: 'Language · 2024.03.16 → 2026.09.12',
    org: 'OPIc',
    title: 'OPIc IM3 → IM2',
    desc: '영어 말하기 평가. 2024.03.16 IM3, 2026.09.12 IM2 취득.',
  },
  {
    kind: 'mil',
    label: 'Military · 2019.04.22 — 2020.11.22',
    org: '육군 · 기갑',
    title: '병장 만기전역',
    desc: '약 1년 7개월 복무.',
  },
]

const recognitionIcon = { award: Award, cert: BadgeCheck, lang: Languages, mil: Shield } as const


function ProjectCardGrid({ items, base }: { items: ProjectContent[]; base: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {items.map((p, i) => (
        <Link
          key={p.id}
          href={`${base}#${p.id}`}
          className="group border border-line-strong p-6 flex flex-col hover:border-ink transition"
        >
          <p className={`${eyebrow} mb-3 flex justify-between gap-3`}>
            <span className="truncate">
              {String(i + 1).padStart(2, '0')} · {p.kicker ?? ''}
            </span>
            <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0 text-subtle group-hover:text-brand transition" />
          </p>
          <h4 className="text-[19px] font-medium text-ink mb-2 leading-snug">{p.title}</h4>
          {p.period && <p className="font-mono text-[11px] text-subtle mb-3">{p.period}</p>}
          <p className="text-[13.5px] text-subtle leading-[1.7] mb-5 line-clamp-3">{p.oneLiner}</p>
          <div className="grid grid-cols-3 gap-px bg-line-strong border border-line-strong mt-auto">
            {p.stats.slice(0, 3).map((n) => (
              <div key={n.label} className="bg-paper p-3">
                <div className="text-[15px] font-medium tracking-[-0.02em] text-brand leading-tight mb-2 break-keep">
                  {n.value}
                </div>
                <div className="text-[11.5px] text-subtle leading-snug line-clamp-2">{n.label}</div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-body flex flex-col lg:flex-row">
      {/* Left Sidebar (desktop) */}
      <aside className="hidden lg:flex lg:flex-col w-[240px] shrink-0 border-r border-line px-6 pt-14 pb-8 sticky top-0 h-screen overflow-y-auto">
        <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-line mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/profile.jpg`} alt="유승호" className="w-full h-full object-cover" />
        </div>
        <p className={`${eyebrow} leading-relaxed mb-3`}>
          AI/ML Engineer
          <br />& Researcher
        </p>
        <h1 className="text-[30px] font-medium text-ink mb-4">유승호</h1>
        <p className="text-[14px] text-body leading-relaxed mb-6">
          Mathematical rigor
          <br />
          for <span className="text-brand">intelligent systems.</span>
        </p>
        <p className="font-mono text-[11px] text-subtle tracking-wide mt-auto">
          DATON · 2025 — NOW
        </p>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden border-b border-line px-6 py-4 flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/profile.jpg`} alt="유승호" className="w-12 h-12 rounded-sm object-cover" />
        <div>
          <p className="text-[17px] font-medium text-ink leading-tight">유승호</p>
          <p className={eyebrow}>AI/ML Engineer & Researcher</p>
        </div>
      </div>

      {/* Main Content */}
      <main id="top" className="flex-1 min-w-0 px-6 md:px-10 xl:px-14">
        <div className="max-w-[940px] mx-auto">
          {/* Header */}
          <header className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2 py-6 border-b border-line">
            <div className={eyebrow}>AI/ML Engineer & Researcher</div>
            <nav className="2xl:hidden flex flex-wrap gap-x-5 gap-y-1 font-mono text-[12px] text-ink">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-brand transition">
                  {n.label}
                </a>
              ))}
            </nav>
          </header>

          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-[-0.04em] mb-8 text-ink">
              I build <span className="text-brand">reliable AI systems</span>
              <br />
              from mathematical foundations.
            </h2>
            <p className="text-[16px] text-body leading-[1.75] mb-8 max-w-[600px]">
              수학과 출신 개발자로, 컴퓨터 비전과 VLM/LLM을 실제 온프레미스 환경에서 동작하는 시스템으로 만듭니다.
              모델의 정확도뿐 아니라 지연시간, GPU 메모리, 처리량, 확장성까지 함께 설계합니다.
            </p>
            <a
              href="#daton"
              className="inline-block bg-ink text-paper px-6 py-3 text-[14px] font-medium hover:bg-body transition rounded-sm"
            >
              Daton 프로젝트 보기
            </a>
          </section>

          {/* Journey Section */}
          <section id="history" className="border-t border-line py-16 md:py-20">
            <div className="mb-12">
              <p className={`${eyebrow} mb-3`}>01 / History</p>
              <h3 className="text-[32px] font-medium text-ink mb-3">History</h3>
              <p className="text-[15px] text-subtle">학업 · 병역 · 연구 · 인턴 · 교육 · 현업까지, 걸어온 과정을 날짜순으로 정리했습니다.</p>
            </div>
            <div className="border-t border-line">
              {journey.map((j) => (
                <article
                  key={j.title}
                  className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-1 md:gap-8 border-b border-line py-6"
                >
                  <div className="pt-[3px]">
                    <p className="font-mono text-[12px] font-medium text-brand tracking-wide">{j.date}</p>
                    <p className="font-mono text-[11px] text-subtle mt-1">{durationLabel(j.date)}</p>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-medium text-ink mb-1">{j.title}</h4>
                    <p className="text-[14px] text-subtle leading-[1.6]">{j.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Daton Section */}
          <section id="daton" className="border-t border-line py-20 md:py-24">
            <div className="mb-10">
              <p className={`${eyebrow} mb-3`}>02 / Daton · 2025.12 — NOW</p>
              <h3 className="text-[32px] font-medium text-ink mb-3">Daton</h3>
              <p className="text-[15px] text-body leading-[1.8] max-w-[680px] mb-3">
                멀티모달연구소 연구원으로 온프레미스 실시간 AI 관제 제품과 정부과제(스마트공장)를 개발하고 있습니다. 모델을 학습하는 데서
                끝나지 않고 추론 구조, 서빙, 데이터, 운영 문제까지 다룹니다. 각 항목은 문제 → 선택 → 측정 결과 순서의 상세 기록으로 이어집니다.
              </p>
              <p className="text-[12px] text-subtle">* 통제된 500+500장 테스트셋 기준이며 실환경 수치가 아닙니다.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {datonCards.map((c, i) => (
                <Link
                  key={c.id}
                  href={`/daton#${c.id}`}
                  className="group border border-line-strong p-6 flex flex-col hover:border-ink transition"
                >
                  <p className={`${eyebrow} mb-3 flex justify-between`}>
                    <span>
                      {String(i + 1).padStart(2, '0')} · {c.tag}
                    </span>
                    <ArrowUpRight size={14} strokeWidth={1.5} className="text-subtle group-hover:text-brand transition" />
                  </p>
                  <h4 className="text-[19px] font-medium text-ink mb-2 leading-snug">{c.title}</h4>
                  <p className="text-[13.5px] text-subtle leading-[1.7] mb-5">{c.line}</p>
                  <div className="grid grid-cols-3 gap-px bg-line-strong border border-line-strong mt-auto">
                    {c.numbers.map((n) => (
                      <div key={n.l} className="bg-paper p-3">
                        <div className="text-[16px] font-medium tracking-[-0.02em] text-brand leading-none mb-2 whitespace-nowrap">
                          {n.v}
                        </div>
                        <div className="text-[11.5px] text-subtle leading-snug">{n.l}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/daton"
              className="inline-flex items-center gap-2 mt-8 font-mono text-[13px] text-brand underline underline-offset-4 hover:text-ink transition"
            >
              Daton 전체 기록 보기 <ArrowUpRight size={14} />
            </Link>
          </section>

          {/* SSAFY Section */}
          <section id="ssafy" className="border-t border-line py-16 md:py-20">
            <div className="mb-10">
              <p className={`${eyebrow} mb-3`}>03 / SSAFY · 2024.07 — 2025.06</p>
              <h3 className="text-[32px] font-medium text-ink mb-3">SSAFY</h3>
              <p className="text-[15px] text-body leading-[1.8] max-w-[680px]">
                삼성 청년 소프트웨어 아카데미 12개월 과정. 인턴 때 책임 연구원께 들은 “기술만이 아니라 개발을 넓게 이해하는 인재가
                필요하다”는 조언이 계기였습니다. RAG 서비스, 금융 API, CI/CD 인프라, 실시간 채팅과 챗봇까지 네 개의 팀 프로젝트를
                설계부터 배포까지 경험했습니다.
              </p>
            </div>
            <ProjectCardGrid items={ssafyProjects} base="/ssafy" />
            <Link
              href="/ssafy"
              className="inline-flex items-center gap-2 mt-8 font-mono text-[13px] text-brand underline underline-offset-4 hover:text-ink transition"
            >
              SSAFY 전체 기록 보기 <ArrowUpRight size={14} />
            </Link>
          </section>

          {/* Projects */}
          <section id="projects" className="border-t border-line py-16 md:py-20">
            <div className="mb-10">
              <p className={`${eyebrow} mb-3`}>04 / Projects</p>
              <h3 className="text-[32px] font-medium text-ink mb-3">Projects</h3>
              <p className="text-[15px] text-subtle">인턴, 공모전, 교육, 연구 — 탐지·추적·영상처리·의료 AI로 쌓은 기초입니다.</p>
            </div>
            <ProjectCardGrid items={otherProjects} base="/projects" />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-8 font-mono text-[13px] text-brand underline underline-offset-4 hover:text-ink transition"
            >
              Projects 전체 기록 보기 <ArrowUpRight size={14} />
            </Link>
          </section>

          {/* Recognition Section */}
          <section id="recognition" className="border-t border-line py-20 md:py-24">
            <div className="mb-12">
              <p className={`${eyebrow} mb-3`}>05 / Recognition</p>
              <h3 className="text-[32px] font-medium text-ink">Awards & credentials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recognition.map((r) => {
                const Icon = recognitionIcon[r.kind as keyof typeof recognitionIcon]
                return (
                  <article key={r.title} className="border border-line-strong p-6 md:p-7 flex gap-5">
                    <Icon size={24} strokeWidth={1.5} className="text-brand shrink-0 mt-1" />
                    <div className="min-w-0">
                      <p className={`${eyebrow} mb-2`}>{r.label}</p>
                      <h4 className="text-[20px] font-medium text-ink mb-1 leading-snug">{r.title}</h4>
                      <p className="font-mono text-[12px] text-subtle mb-3">{r.org}</p>
                      <p className="text-[14px] text-body leading-[1.75]">{r.desc}</p>
                      {r.more && (
                        <details className="group mt-3">
                          <summary className="inline-flex cursor-pointer items-center gap-1 font-mono text-[12px] text-brand hover:text-ink transition list-none">
                            <Plus size={13} className="transition group-open:rotate-45" />
                            배운 점
                          </summary>
                          <p className="mt-3 text-[14px] text-subtle leading-[1.75] border-l border-line-strong pl-4">
                            {r.more}
                          </p>
                        </details>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          {/* GitHub Section */}
          <section id="github" className="border-t border-line py-14 md:py-16">
            <p className={`${eyebrow} mb-3`}>06 / GitHub</p>
            <a
              href="https://github.com/YooSeungHo0124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[22px] font-medium text-ink hover:text-brand transition"
            >
              @YooSeungHo0124 <ArrowUpRight size={20} strokeWidth={1.5} />
            </a>
          </section>

          {/* Direction Section */}
          <section id="contact" className="border-t border-line py-20 md:py-24">
            <p className={`${eyebrow} mb-3`}>07 / Direction</p>
            <h3 className="text-[32px] font-medium text-ink leading-tight">
              From proof to <span className="text-brand">product.</span>
            </h3>
            <p className="text-[15px] text-body mt-6 leading-[1.8] max-w-[620px]">
              연구 단계에서 끝나는 인공지능이 아니라 실제 현장에서 사용할 수 있는 AI 시스템을 만드는 것이 제가 지향하는
              방향입니다. 새로운 기술을 사용하는 데 그치지 않고 원리를 이해하고 직접 구현하며, 실제 문제를 해결하는
              연구개발자로 성장하겠습니다.
            </p>
            <div className="mt-8 flex flex-col items-start gap-2 font-mono text-[13px]">
              {EMAILS.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="inline-flex items-center gap-2 text-brand underline underline-offset-4 hover:text-ink transition"
                >
                  {e} <ArrowUpRight size={14} />
                </a>
              ))}
              <a
                href={`tel:${PHONE.tel}`}
                className="inline-flex items-center gap-2 text-brand underline underline-offset-4 hover:text-ink transition"
              >
                {PHONE.display} <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="font-mono text-[11px] text-subtle mt-16">© 2026 SEUNG HO YU</p>
          </section>
        </div>
      </main>

      {/* Right Sidebar (xl+) */}
      <aside className="hidden 2xl:flex 2xl:flex-col w-[210px] shrink-0 border-l border-line pt-14 sticky top-0 h-screen overflow-y-auto">
        <nav className="px-6 mb-12">
          <p className={`${eyebrow} mb-4`}>Navigation</p>
          <div className="space-y-3 font-mono text-[12px]">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="block text-ink hover:text-brand transition">
                {n.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="px-6 mb-8">
          <p className="flex items-center gap-2 font-mono text-[12px] text-ink mb-1">
            <span className="h-[6px] w-[6px] rounded-full bg-brand-dot" />
            Open to opportunities
          </p>
          <p className="font-mono text-[11px] text-subtle">AI/ML · Vision · LLM/VLM</p>
        </div>

        <div className="border-t border-line">
          {EMAILS.map((e) => (
            <a
              key={e}
              href={`mailto:${e}`}
              className="flex items-center justify-between gap-2 border-b border-line px-6 py-3 font-mono text-[11px] text-ink hover:text-brand transition"
            >
              <span className="min-w-0 break-all">{e}</span>
              <Mail size={14} strokeWidth={1.5} className="shrink-0" />
            </a>
          ))}
          <a
            href={`tel:${PHONE.tel}`}
            className="flex items-center justify-between gap-2 border-b border-line px-6 py-3 font-mono text-[11px] text-ink hover:text-brand transition"
          >
            <span>{PHONE.display}</span>
            <Phone size={14} strokeWidth={1.5} className="shrink-0" />
          </a>
          <a
            href="https://github.com/YooSeungHo0124"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[12px] text-ink hover:text-brand transition"
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </aside>
    </div>
  )
}
