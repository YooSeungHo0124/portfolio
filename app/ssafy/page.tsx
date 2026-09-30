import type { Metadata } from 'next'
import { ProjectCollectionPage } from '@/components/ProjectCollectionPage'
import { ssafyProjects } from '@/data/ssafy-content'

export const metadata: Metadata = {
  title: 'SSAFY | 유승호',
  description: 'SSAFY 12개월 과정의 팀 프로젝트 기록 — RAG, 금융 API, CI/CD, 실시간 채팅',
}

export default function SsafyPage() {
  return (
    <ProjectCollectionPage
      eyebrowText="SSAFY · Samsung Software Academy · 2024.07 — 2025.06"
      headline={
        <>
          AI를 넘어,
          <br />
          <span className="text-brand">서비스 전체를 만드는 법.</span>
        </>
      }
      intro="삼성 청년 소프트웨어 아카데미 12개월 동안 네 개의 팀 프로젝트를 진행했습니다. RAG 기반 학습 서비스, 금융 API 서비스, Jenkins CI/CD 인프라, 실시간 채팅과 챗봇까지 — 설계부터 배포까지 직접 맡은 부분을 기록했습니다."
      note="각 프로젝트의 발표 자료(PDF)에서 팀원이 식별되는 장은 제외했습니다."
      projects={ssafyProjects}
    />
  )
}
