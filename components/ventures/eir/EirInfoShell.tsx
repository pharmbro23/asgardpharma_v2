import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, FilePenLine, Languages } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'
import { parseInline } from '@/lib/legal-markdown'
import { LegalInline } from './LegalMarkdown'
import {
  eirInfoChrome,
  eirInfoHref,
  eirVisibleInfoSlugs,
  eirLegalDocs,
  type EirInfoSlug,
  type EirLang,
} from '@/content/eir-legal'

const infoSlugs = eirVisibleInfoSlugs

// The privacy policy, terms and support links, shown at the foot of each of those pages
function EirInfoLinks({ current, lang }: { current: EirInfoSlug; lang: EirLang }) {
  const chrome = eirInfoChrome[lang]
  return (
    <nav aria-label={chrome.related} className="mt-20 border-t border-text-main/10 pt-10">
      <p className="mb-6 text-xs font-bold uppercase tracking-nav text-accent">{chrome.related}</p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {infoSlugs.map((slug) => {
          const draft = slug !== 'support' && eirLegalDocs[slug][lang].status === 'draft'
          const isCurrent = slug === current
          return (
            <li key={slug}>
              <Link
                href={eirInfoHref(slug, lang)}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'group flex h-full items-center justify-between gap-3 rounded-2xl border p-5 transition-colors',
                  isCurrent
                    ? 'border-eir-green bg-eir-green text-white'
                    : 'border-text-main/10 bg-white text-text-main hover:border-eir-green/40'
                )}
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-tight">{chrome.labels[slug]}</span>
                  {draft && (
                    <span
                      className={cn(
                        'mt-1 block text-[10px] font-bold uppercase tracking-nav',
                        isCurrent ? 'text-white/70' : 'text-eir-gold'
                      )}
                    >
                      {chrome.draftTag}
                    </span>
                  )}
                </span>
                <ArrowUpRight
                  size={16}
                  className={cn(
                    'flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                    isCurrent ? 'text-white/70' : 'text-eir-green'
                  )}
                />
              </Link>
            </li>
          )
        })}
      </ul>
      <p className="mt-8 text-xs text-text-muted">{chrome.aside}</p>
    </nav>
  )
}

interface EirInfoShellProps {
  slug: EirInfoSlug
  lang: EirLang
  title: string
  intro?: string
  draft?: boolean
  children: React.ReactNode
}

export function EirInfoShell({ slug, lang, title, intro, draft = false, children }: EirInfoShellProps) {
  const chrome = eirInfoChrome[lang]
  const otherLang = chrome.switchLang

  return (
    <div lang={lang} className="relative overflow-hidden bg-bg-main">
      {/* Same soft brand glow as the Eir page hero */}
      <div className="pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-eir-green/10 blur-3xl" />
      <section className="relative px-8 pt-32 pb-12 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center justify-between gap-4">
            <Link
              href="/eir/"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-nav text-eir-green"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {chrome.back}
            </Link>
            <Link
              href={eirInfoHref(slug, otherLang)}
              hrefLang={otherLang}
              lang={otherLang}
              className="inline-flex items-center gap-2 rounded-full border border-eir-green/25 bg-white/60 px-4 py-2 text-xs font-semibold text-eir-green transition-colors hover:bg-eir-green hover:text-white"
            >
              <Languages size={14} aria-hidden="true" />
              {chrome.switchLabel}
            </Link>
          </div>

          <Eyebrow className="mb-6 text-eir-gold">{chrome.labels[slug]}</Eyebrow>
          <h1 className="text-balance text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-text-main">
            {title}
          </h1>
          {intro && <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-main/80">{intro}</p>}

          {draft && (
            <div role="note" className="mt-10 flex gap-4 rounded-2xl border border-eir-gold/40 bg-eir-gold/10 p-5 md:p-6">
              <FilePenLine className="mt-0.5 h-6 w-6 flex-shrink-0 text-eir-gold" strokeWidth={1.75} aria-hidden="true" />
              <div>
                <p className="text-sm font-bold uppercase tracking-nav text-text-main">{chrome.draftTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-main/75">
                  <LegalInline nodes={parseInline(chrome.draftText)} />
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative px-8 pb-24">
        <div className="mx-auto max-w-3xl">
          {children}
          <EirInfoLinks current={slug} lang={lang} />
        </div>
      </section>
    </div>
  )
}
