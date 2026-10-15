import fs from 'node:fs'
import path from 'node:path'
import { render, screen } from '@testing-library/react'
import { findPlaceholders, inlineText, parseInline, parseLegalMarkdown, type Block, type Inline } from '@/lib/legal-markdown'
import { eirLegalDocs, eirInfoHref, eirLegalPagesLive, eirSupportIndexable, type EirLang, type EirLegalSlug } from '@/content/eir-legal'
import { readEirLegalSource } from '@/lib/eir-legal-docs'
import { LegalMarkdown } from '@/components/ventures/eir/LegalMarkdown'
import { EirLegalPage, eirLegalMetadata } from '@/components/ventures/eir/EirLegalPage'
import { EirSupportPage } from '@/components/ventures/eir/EirSupportPage'
import * as eirContent from '@/content/eir-content'
import { ventures } from '@/content/site-content'

const slugs: EirLegalSlug[] = ['privacy', 'terms']
const langs: EirLang[] = ['en', 'fr']

function allInline(blocks: Block[]): Inline[] {
  const out: Inline[] = []
  const walk = (nodes: Inline[]) =>
    nodes.forEach((node) => {
      out.push(node)
      if ('children' in node) walk(node.children)
    })
  for (const block of blocks) {
    if (block.type === 'heading' || block.type === 'paragraph' || block.type === 'quote') walk(block.children)
    if (block.type === 'list') block.items.forEach(walk)
    if (block.type === 'table') [block.header, ...block.rows].forEach((row) => row.forEach(walk))
  }
  return out
}

describe('legal Markdown reader', () => {
  it('reads headings, lists, tables and rules', () => {
    const doc = parseLegalMarkdown(
      [
        '# Title',
        '',
        '**Version:** `V-1`',
        '**Effective date:** [DATE]',
        '',
        '---',
        '',
        '## Contents',
        '',
        '1. First',
        '2. Second',
        '',
        '## 1. First',
        '',
        '- a',
        '- b',
        '',
        '| A | B |',
        '|---|---|',
        '| x | y |',
        '',
        '## 2. Second',
      ].join('\n')
    )
    expect(doc.title).toBe('Title')
    expect(doc.blocks.map((b) => b.type)).toEqual([
      'heading',
      'paragraph',
      'rule',
      'heading',
      'list',
      'heading',
      'list',
      'table',
      'heading',
    ])
    const contents = doc.blocks[4] as Extract<Block, { type: 'list' }>
    // The table of contents links to its sections
    expect(contents.items[0][0]).toMatchObject({ type: 'link', href: '#1-first' })
    expect(contents.items[1][0]).toMatchObject({ type: 'link', href: '#2-second' })
    // Line breaks inside a paragraph are kept
    const meta = doc.blocks[1] as Extract<Block, { type: 'paragraph' }>
    expect(meta.children.some((n) => n.type === 'br')).toBe(true)
  })

  it('keeps [placeholders] visible, nested ones too, and tells them from links', () => {
    const nodes = parseInline('a [incorporated under [PROVINCE]] b [site](https://x.ca) c https://y.ca/p.')
    expect(nodes[1]).toMatchObject({ type: 'placeholder' })
    expect(inlineText(nodes)).toBe('a [incorporated under [PROVINCE]] b site c https://y.ca/p.')
    expect(nodes.find((n) => n.type === 'link' && n.href === 'https://x.ca')).toBeTruthy()
    // A trailing full stop is not part of a bare link
    expect(nodes.find((n) => n.type === 'link' && n.href === 'https://y.ca/p')).toBeTruthy()
    expect(findPlaceholders('x [A] [B [C]] [l](u)')).toEqual(['[A]', '[B [C]]'])
  })

  it('reads bold, italic and code', () => {
    const nodes = parseInline('**bold** and *Act, 2004* and `code`')
    expect(nodes.map((n) => n.type)).toEqual(['strong', 'text', 'em', 'text', 'code'])
  })
})

// The draft texts are kept out of this public repository until the lawyer has approved them (owner, 2026-10-15), so these
// checks run only where the texts are present (the owner's machine, and the repository once the final texts are committed).
const eirLegalTextsPresent = fs.existsSync(path.join(process.cwd(), 'content', 'eir-legal'))

describe.skipIf(!eirLegalTextsPresent)('Eir Count legal texts', () => {
  for (const slug of slugs) {
    for (const lang of langs) {
      const doc = eirLegalDocs[slug][lang]
      describe(`${slug} (${lang})`, () => {
        const source = eirLegalTextsPresent ? readEirLegalSource(slug, lang) : ''

        it('has no notes for the owner, lawyer or translator', () => {
          expect(source).not.toMatch(/Drafting note|Note de rédaction|Note for the owner|DRAFT FOR|PROJET À FAIRE|delete before/i)
          expect(source.split('\n').filter((line) => line.trim().startsWith('>'))).toEqual([])
        })

        it('reads cleanly: a title and no Markdown left over in the text', () => {
          const parsed = parseLegalMarkdown(source)
          expect(parsed.title.length).toBeGreaterThan(5)
          const leftovers = allInline(parsed.blocks).filter(
            (node) => node.type === 'text' && /\*\*|`|^#|\]\(/.test(node.value)
          )
          expect(leftovers).toEqual([])
        })

        if (doc.status === 'final') {
          it('is final, so every [placeholder] has been filled in', () => {
            expect(findPlaceholders(source)).toEqual([])
          })
        } else {
          it('is a draft, so it shows the draft notice and stays out of search results', () => {
            render(<EirLegalPage slug={slug} lang={lang} />)
            expect(screen.getByRole('note')).toHaveTextContent(lang === 'fr' ? 'Projet, pas encore en vigueur' : 'Draft, not yet in effect')
            expect(eirLegalMetadata(slug, lang).robots).toMatchObject({ index: false })
          })
        }
      })
    }

    it(`${slug}: English and French have the same sections`, () => {
      const count = (lang: EirLang) =>
        parseLegalMarkdown(readEirLegalSource(slug, lang)).blocks.filter((b) => b.type === 'heading' && b.level === 2).length
      expect(count('fr')).toBe(count('en'))
    })
  }

  it('every text file exists in content/eir-legal', () => {
    for (const slug of slugs)
      for (const lang of langs)
        expect(fs.existsSync(path.join(process.cwd(), 'content', 'eir-legal', eirLegalDocs[slug][lang].file))).toBe(true)
  })

  it('renders placeholders as marks and tables as tables', () => {
    const { container } = render(
      <LegalMarkdown blocks={parseLegalMarkdown(readEirLegalSource('privacy', 'en')).blocks} />
    )
    expect(container.querySelectorAll('mark').length).toBeGreaterThan(10)
    expect(container.querySelectorAll('table').length).toBeGreaterThan(2)
    expect(container.querySelector('h1')).toBeNull()
  })
})

describe('Eir Count support page', () => {
  it('links to the stores, the policies and the support email in both languages', () => {
    for (const lang of langs) {
      const { container, unmount } = render(<EirSupportPage lang={lang} />)
      // next/link drops the trailing slash outside the Next build (which adds it back: trailingSlash)
      const hrefs = Array.from(container.querySelectorAll('a')).map((a) => a.getAttribute('href')?.replace(/\/$/, ''))
      expect(hrefs).toContain('https://apps.apple.com/account/subscriptions')
      expect(hrefs).toContain('https://play.google.com/store/account/subscriptions')
      // The draft privacy policy and terms are held back: no links to them until the texts are final
      for (const legal of slugs) {
        const href = eirInfoHref(legal, lang).replace(/\/$/, '')
        if (eirLegalPagesLive) expect(hrefs).toContain(href)
        else expect(hrefs).not.toContain(href)
      }
      expect(hrefs.some((h) => h?.startsWith('mailto:info@asgardpharma.ca'))).toBe(true)
      unmount()
    }
  })

  it('stays out of search results until the legal texts are final', () => {
    const allFinal = slugs.every((slug) => langs.every((lang) => eirLegalDocs[slug][lang].status === 'final'))
    expect(eirSupportIndexable).toBe(allFinal)
  })
})

describe('Eir Count marketing claims', () => {
  const eirCard = ventures.find((v) => v.slug === 'eir')
  const copy = JSON.stringify(eirContent) + JSON.stringify(eirCard)

  it('makes no claim the apps or the paperwork do not support', () => {
    for (const banned of [
      /improvement program/i,
      /opt-in/i,
      /\$360/,
      /\$30\/month/,
      /every pill/i,
      /at a glance/i,
      /nothing leaves/i,
      /nothing is uploaded/i,
      /never contacted/i,
      /trained in-house/i,
      /PIPEDA|PHIPA|complian|certif/i,
    ])
      expect(copy).not.toMatch(banned)
  })

  it('states the price in CAD with taxes, renewal and the new-subscriber trial', () => {
    const pricing = JSON.stringify(eirContent.eirPricing)
    expect(pricing).toMatch(/CAD/)
    expect(pricing).toMatch(/applicable taxes/)
    expect(pricing).toMatch(/renews/)
    expect(pricing).toMatch(/new subscribers/i)
    expect(pricing).toMatch(/App Store or Google Play/)
    expect(pricing).toMatch(/per store/)
  })
})
