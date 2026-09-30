import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProjectDetail, type ProjectContent } from '@/components/ProjectDetail'
import { EMAILS, PHONE } from '@/lib/contact'

const eyebrow = 'font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-label'

export function ProjectCollectionPage({
  eyebrowText,
  headline,
  intro,
  note,
  projects,
}: {
  eyebrowText: string
  headline: React.ReactNode
  intro: string
  note?: string
  projects: ProjectContent[]
}) {
  return (
    <div className="min-h-screen bg-paper text-body">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 pb-32">
        <header className="flex items-center justify-between py-6 border-b border-line">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-ink hover:text-brand transition"
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> Portfolio
          </Link>
          <span className={eyebrow}>Seung Ho Yu · AI/ML Engineer</span>
        </header>

        <section className="py-16 md:py-20">
          <p className={`${eyebrow} mb-4`}>{eyebrowText}</p>
          <h1 className="text-[40px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.04em] text-ink mb-6">
            {headline}
          </h1>
          <p className="text-[16px] text-body leading-[1.8] max-w-[680px] mb-4">{intro}</p>
          {note && <p className="text-[13px] text-subtle leading-[1.7] max-w-[680px]">{note}</p>}
        </section>

        <nav className="border-y border-line py-6 mb-4">
          <p className={`${eyebrow} mb-4`}>Contents</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {projects.map((p, i) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="grid grid-cols-[28px_1fr] text-[14px] text-ink hover:text-brand transition"
                >
                  <span className="font-mono text-[12px] text-brand pt-[2px]">{String(i + 1).padStart(2, '0')}</span>
                  <span>{p.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {projects.map((p, i) => (
          <ProjectDetail key={p.id} p={p} index={i + 1} />
        ))}

        <footer className="border-t border-line-strong mt-16 pt-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-ink hover:text-brand transition"
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> Back to portfolio
          </Link>
          <div className="flex flex-col items-end gap-1 font-mono text-[12px]">
            {EMAILS.map((e) => (
              <a key={e} href={`mailto:${e}`} className="text-brand underline underline-offset-4">
                {e}
              </a>
            ))}
            <a href={`tel:${PHONE.tel}`} className="text-brand underline underline-offset-4">
              {PHONE.display}
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
