import type { Metadata } from 'next'
import { ProjectCollectionPage } from '@/components/ProjectCollectionPage'
import { otherProjects } from '@/data/projects-content'

export const metadata: Metadata = {
  title: 'Projects | 유승호',
  description: '인턴, 공모전, 교육, 연구 프로젝트 — 컴퓨터 비전과 의료 영상 처리의 기초',
}

export default function ProjectsPage() {
  return (
    <ProjectCollectionPage
      eyebrowText="Projects · 2022.12 — 2023.12"
      headline={
        <>
          탐지·추적·영상처리,
          <br />
          <span className="text-brand">기초를 쌓은 프로젝트들.</span>
        </>
      }
      intro="주차장 CCTV 객체 탐지 인턴, 의료 인공지능 공모전, 영상처리 교육 프로젝트, X-ray 영상 rewindowing 연구. 이후 실시간 AI 시스템을 만드는 데 바탕이 된 작업입니다."
      projects={otherProjects}
    />
  )
}
