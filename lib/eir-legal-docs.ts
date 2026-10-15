import fs from 'node:fs'
import path from 'node:path'
import { eirLegalDocs, type EirLang, type EirLegalSlug } from '@/content/eir-legal'
import { parseLegalMarkdown, type LegalDocument } from '@/lib/legal-markdown'

export const EIR_LEGAL_DIR = path.join(process.cwd(), 'content', 'eir-legal')

// Read at build time (the site is a static export), so the pages carry the text itself
export function readEirLegalSource(slug: EirLegalSlug, lang: EirLang): string {
  return fs.readFileSync(path.join(EIR_LEGAL_DIR, eirLegalDocs[slug][lang].file), 'utf8')
}

export function loadEirLegalDoc(slug: EirLegalSlug, lang: EirLang): LegalDocument {
  return parseLegalMarkdown(readEirLegalSource(slug, lang))
}
