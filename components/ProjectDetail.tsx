import React from 'react'

export type ProjectContent = {
  id: string
  title: string
  kicker?: string
  period?: string
  role?: string
  oneLiner: string
  stats: { value: string; label: string }[]
  problem: string
  approach: { title: string; body: string }[]
  architecture?: string
  challenges?: { problem: string; cause?: string; solution: string; result?: string }[]
  results: { metric: string; before?: string; after?: string; condition?: string }[]
  stack?: string[]
  lessons?: string[]
  links?: { label: string; url: string }[]
  slides?: { src: string; caption: string }[]
  pdf?: { href: string; label: string; pages?: number }
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const statCols: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
}

const eyebrow = 'font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-label'
const chip = 'inline-block border border-line-strong px-3 py-1 font-mono text-[12px] text-ink rounded-sm'

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-8 border-t border-line py-8">
      <p className={`${eyebrow} pt-1`}>{label}</p>
      <div>{children}</div>
    </div>
  )
}

export function ProjectDetail({ p, index }: { p: ProjectContent; index: number }) {
  const hasBeforeAfter = p.results.some((r) => r.before || r.after)
  return (
    <section id={p.id} className="border-t border-line-strong pt-16 pb-6 scroll-mt-6">
      <p className={`${eyebrow} mb-3`}>
        {String(index).padStart(2, '0')} {p.kicker ? `/ ${p.kicker}` : ''}
        {p.period ? ` · ${p.period}` : ''}
      </p>
      <h2 className="text-[30px] md:text-[34px] font-medium text-ink leading-tight mb-4">{p.title}</h2>
      <p className="text-[16px] text-body leading-[1.75] max-w-[680px] mb-2">{p.oneLiner}</p>
      {p.role && <p className="font-mono text-[12px] text-subtle mb-4">ROLE · {p.role}</p>}
      {((p.links && p.links.length > 0) || p.pdf) && (
        <div className="flex flex-wrap gap-3 mb-8">
          {p.pdf && (
            <a
              href={`${BASE}${p.pdf.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-3 py-1.5 font-mono text-[12px] text-ink hover:bg-ink hover:text-paper transition"
            >
              {p.pdf.label}
              {p.pdf.pages ? ` · ${p.pdf.pages}p` : ''} ↗
            </a>
          )}
          {p.links?.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line-strong px-3 py-1.5 font-mono text-[12px] text-ink hover:border-ink transition"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {p.stats.length > 0 && (
        <div
          className={`grid grid-cols-2 ${statCols[Math.min(p.stats.length, 5)] ?? 'md:grid-cols-4'} gap-px bg-line-strong border border-line-strong mb-10 mt-6`}
        >
          {p.stats.map((s) => (
            <div key={s.label} className="bg-paper p-4 md:p-5">
              <div className="text-[28px] font-medium tracking-[-0.03em] text-brand leading-none mb-2">{s.value}</div>
              <div className="text-[13px] text-subtle leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <Block label="Problem">
        <p className="text-[15px] text-body leading-[1.8] max-w-[680px]">{p.problem}</p>
      </Block>

      {p.architecture && (
        <Block label="Architecture">
          <pre className="font-mono text-[12px] leading-[1.6] text-body bg-paper border border-line-strong p-4 overflow-x-auto whitespace-pre">
            {p.architecture}
          </pre>
        </Block>
      )}

      <Block label="Approach">
        <ol className="space-y-6 max-w-[700px]">
          {p.approach.map((a, i) => (
            <li key={a.title} className="grid grid-cols-[28px_1fr] gap-2">
              <span className="font-mono text-[12px] text-brand pt-[3px]">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 className="text-[16px] font-medium text-ink mb-1">{a.title}</h4>
                <p className="text-[14px] text-body leading-[1.8]">{a.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {p.challenges && p.challenges.length > 0 && (
        <Block label="Challenges">
          <div className="space-y-4 max-w-[760px]">
            {p.challenges.map((c) => (
              <details key={c.problem} className="group border border-line-strong">
                <summary className="cursor-pointer list-none px-4 py-3 flex items-start gap-3">
                  <span className="font-mono text-[12px] text-brand pt-[3px] group-open:rotate-45 transition">+</span>
                  <span className="text-[15px] font-medium text-ink leading-snug">{c.problem}</span>
                </summary>
                <dl className="px-4 pb-4 pl-[44px] space-y-3 text-[14px] leading-[1.75]">
                  {c.cause && (
                    <div>
                      <dt className={`${eyebrow} mb-1`}>Cause</dt>
                      <dd className="text-body">{c.cause}</dd>
                    </div>
                  )}
                  <div>
                    <dt className={`${eyebrow} mb-1`}>Solution</dt>
                    <dd className="text-body">{c.solution}</dd>
                  </div>
                  {c.result && (
                    <div>
                      <dt className={`${eyebrow} mb-1`}>Result</dt>
                      <dd className="text-ink font-medium">{c.result}</dd>
                    </div>
                  )}
                </dl>
              </details>
            ))}
          </div>
        </Block>
      )}

      <Block label="Results">
        <div className="overflow-x-auto max-w-[820px]">
          <table className="w-full text-left text-[13.5px] border-collapse">
            <thead>
              <tr className="border-b border-line-strong font-mono text-[11px] uppercase tracking-[0.06em] text-label">
                <th className="py-2 pr-4 font-medium">Metric</th>
                {hasBeforeAfter && <th className="py-2 pr-4 font-medium">Before</th>}
                <th className="py-2 pr-4 font-medium">{hasBeforeAfter ? 'After' : 'Value'}</th>
                <th className="py-2 font-medium">Condition</th>
              </tr>
            </thead>
            <tbody>
              {p.results.map((r) => (
                <tr key={r.metric} className="border-b border-line align-top">
                  <td className="py-3 pr-4 text-ink">{r.metric}</td>
                  {hasBeforeAfter && <td className="py-3 pr-4 text-subtle">{r.before ?? '—'}</td>}
                  <td
                    className={`py-3 pr-4 ${
                      (r.after ?? r.before ?? '').length <= 28 ? 'font-medium text-brand' : 'text-ink'
                    }`}
                  >
                    {r.after ?? r.before ?? '—'}
                  </td>
                  <td className="py-3 text-subtle">{r.condition ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      {p.slides && p.slides.length > 0 && (
        <Block label="Slides">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[820px]">
            {p.slides.map((sl) => (
              <figure key={sl.src} className="border border-line-strong bg-paper">
                <a href={`${BASE}${sl.src}`} target="_blank" rel="noopener noreferrer" className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${BASE}${sl.src}`} alt={sl.caption} loading="lazy" className="w-full aspect-video object-cover" />
                </a>
                <figcaption className="px-3 py-2 text-[12.5px] text-subtle leading-snug">{sl.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Block>
      )}

      {p.lessons && p.lessons.length > 0 && (
        <Block label="Lessons">
          <ul className="space-y-2 max-w-[680px]">
            {p.lessons.map((l) => (
              <li key={l} className="flex gap-3 text-[14px] text-body leading-[1.75]">
                <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Block>
      )}

      {p.stack && p.stack.length > 0 && (
        <Block label="Stack">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className={chip}>
                {t}
              </span>
            ))}
          </div>
        </Block>
      )}
    </section>
  )
}
