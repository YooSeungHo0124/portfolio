'use client'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { ContactSection } from '@/components/ContactSection'
import { projects, experiences, skillsByCategory, aboutContent } from '@/data'

export default function Home() {
  const skillsArray = Object.entries(skillsByCategory).map(([key, skills]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    skills: skills
  }))
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header name="Seung Ho Yu" onNavClick={handleNavClick} />

      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <Hero
            name="Seung Ho Yu"
            title="AI/ML Engineer & Full-Stack Developer"
            description={aboutContent.introduction}
            profileImage={undefined}
            onViewProjects={() => handleNavClick('projects')}
            onContact={() => handleNavClick('contact')}
          />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">프로젝트</h2>
              <p className="text-lg text-gray-600">
                현업에서 진행한 프로젝트부터 학부 시절 연구 프로젝트까지
              </p>
            </div>
            <ProjectsGrid
              projects={projects as any}
              featuredFirst={true}
              groupByCategory={false}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">기술 스택</h2>
              <p className="text-lg text-gray-600">
                다양한 기술을 활용하여 문제를 해결합니다
              </p>
            </div>
            <SkillsSection
              categories={skillsArray}
              title=""
              description=""
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">경력</h2>
              <p className="text-lg text-gray-600">
                현재까지의 경험과 성장 과정
              </p>
            </div>
            <ExperienceTimeline
              experiences={experiences as any}
              title=""
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <ContactSection
            email={aboutContent.email}
            github={aboutContent.github}
            linkedin={aboutContent.linkedin}
            additionalLinks={[]}
            onContactClick={() => window.location.href = `mailto:${aboutContent.email}`}
          />
        </section>
      </main>
    </div>
  )
}
