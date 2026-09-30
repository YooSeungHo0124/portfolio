import type { Metadata } from 'next'
import { ProjectCollectionPage } from '@/components/ProjectCollectionPage'
import { datonProjects } from '@/data/daton-content'

export const metadata: Metadata = {
  title: 'Daton | 유승호',
  description: '온프레미스 실시간 AI 관제 제품과 정부과제 개발 기록 — 문제, 선택, 측정 결과',
}

export default function DatonPage() {
  return (
    <ProjectCollectionPage
      eyebrowText="Daton · Multimodal Research Lab · 2025.12 — NOW"
      headline={
        <>
          Building AI that runs
          <br />
          <span className="text-brand">on-premise, in real time.</span>
        </>
      }
      intro="실시간 CCTV 관제 제품의 추론 구조, VLM 2차 판정, 한국어 설명 모델, 관제 채팅 라우터, GPU 서버 학습 파이프라인, 그리고 정부과제 RT 필름 자동판독까지. 무엇을 만들었는지뿐 아니라 어디서 막혔고 무엇을 선택했는지를 측정값과 함께 기록했습니다."
      note="모든 수치는 측정 조건과 함께 적었고, 예상치와 진행 중인 항목은 그렇게 표시했습니다. 고객사는 익명화했습니다."
      projects={datonProjects}
    />
  )
}
