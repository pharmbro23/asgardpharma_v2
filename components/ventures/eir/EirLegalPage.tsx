import type { Metadata } from 'next'
import { EirInfoShell } from './EirInfoShell'
import { LegalMarkdown } from './LegalMarkdown'
import { loadEirLegalDoc } from '@/lib/eir-legal-docs'
import { eirInfoChrome, eirInfoHref, eirLegalDocs, type EirInfoSlug, type EirLang, type EirLegalSlug } from '@/content/eir-legal'

// Shared page metadata for the Eir Count privacy, terms and support pages
export function eirInfoMetadata({
  slug,
  lang,
  title,
  description,
  indexable,
  draft = false,
}: {
  slug: EirInfoSlug
  lang: EirLang
  title: string
  description: string
  indexable: boolean
  draft?: boolean
}): Metadata {
  return {
    title: draft ? `${title} (${eirInfoChrome[lang].draftTag.toLowerCase()})` : title,
    description,
    // Kept out of search results until the texts are final
    robots: { index: indexable, follow: true },
    alternates: {
      canonical: eirInfoHref(slug, lang),
      languages: { 'en-CA': eirInfoHref(slug, 'en'), 'fr-CA': eirInfoHref(slug, 'fr') },
    },
  }
}

export function eirLegalMetadata(slug: EirLegalSlug, lang: EirLang): Metadata {
  const doc = eirLegalDocs[slug][lang]
  return eirInfoMetadata({
    slug,
    lang,
    title: doc.metaTitle,
    description: doc.description,
    indexable: doc.status === 'final',
    draft: doc.status === 'draft',
  })
}

export function EirLegalPage({ slug, lang }: { slug: EirLegalSlug; lang: EirLang }) {
  const { title, blocks } = loadEirLegalDoc(slug, lang)
  const draft = eirLegalDocs[slug][lang].status === 'draft'

  return (
    <EirInfoShell slug={slug} lang={lang} title={title || eirLegalDocs[slug][lang].metaTitle} draft={draft}>
      <article className="text-[15px] md:text-base">
        <LegalMarkdown blocks={blocks} />
      </article>
    </EirInfoShell>
  )
}
