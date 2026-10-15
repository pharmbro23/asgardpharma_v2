// A small Markdown reader for the Eir Count legal pages (content/eir-legal/*.md).
// It covers what the legal texts use: headings, paragraphs (single line breaks kept),
// bullet and numbered lists, tables, rules, block quotes, **bold**, *italic*, `code`,
// [links](url), bare https:// links, and [bracketed placeholders], which are kept
// visible and marked so the owner can see what is still to be filled in.

export type Inline =
  | { type: 'text'; value: string }
  | { type: 'strong'; children: Inline[] }
  | { type: 'em'; children: Inline[] }
  | { type: 'code'; value: string }
  | { type: 'link'; href: string; children: Inline[] }
  | { type: 'placeholder'; children: Inline[] }
  | { type: 'br' }

export type Block =
  | { type: 'heading'; level: 1 | 2 | 3 | 4; id: string; children: Inline[] }
  | { type: 'paragraph'; children: Inline[] }
  | { type: 'list'; ordered: boolean; start: number; items: Inline[][] }
  | { type: 'table'; header: Inline[][]; rows: Inline[][][] }
  | { type: 'quote'; children: Inline[] }
  | { type: 'rule' }

export interface LegalDocument {
  title: string
  blocks: Block[]
}

const URL_RE = /^https?:\/\/[^\s<>()]+/
const TRAILING_PUNCTUATION = /[.,;:!?»"']+$/

function findClosingBracket(text: string, open: number): number {
  let depth = 0
  for (let i = open; i < text.length; i++) {
    if (text[i] === '[') depth++
    else if (text[i] === ']') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = []
  let buffer = ''
  const flush = () => {
    if (buffer) out.push({ type: 'text', value: buffer })
    buffer = ''
  }

  let i = 0
  while (i < text.length) {
    const ch = text[i]

    if (ch === '\n') {
      flush()
      out.push({ type: 'br' })
      i++
      continue
    }

    if (ch === '`') {
      const end = text.indexOf('`', i + 1)
      if (end > i) {
        flush()
        out.push({ type: 'code', value: text.slice(i + 1, end) })
        i = end + 1
        continue
      }
    }

    if (text.startsWith('**', i)) {
      const end = text.indexOf('**', i + 2)
      if (end > i + 2) {
        flush()
        out.push({ type: 'strong', children: parseInline(text.slice(i + 2, end)) })
        i = end + 2
        continue
      }
    }

    if (ch === '*' && text[i + 1] !== '*' && text[i + 1] !== ' ') {
      let end = i + 1
      while (end < text.length && !(text[end] === '*' && text[end + 1] !== '*' && text[end - 1] !== '*')) end++
      if (end < text.length && end > i + 1) {
        flush()
        out.push({ type: 'em', children: parseInline(text.slice(i + 1, end)) })
        i = end + 1
        continue
      }
    }

    if (ch === '[') {
      const close = findClosingBracket(text, i)
      if (close > i) {
        const inner = text.slice(i + 1, close)
        // [text](url) is a link; anything else in brackets is a placeholder to fill in
        if (text[close + 1] === '(') {
          const end = text.indexOf(')', close + 2)
          if (end > close) {
            flush()
            out.push({ type: 'link', href: text.slice(close + 2, end), children: parseInline(inner) })
            i = end + 1
            continue
          }
        }
        flush()
        out.push({ type: 'placeholder', children: parseInline(inner) })
        i = close + 1
        continue
      }
    }

    if (ch === 'h' && (i === 0 || /[\s(«]/.test(text[i - 1]))) {
      const match = URL_RE.exec(text.slice(i))
      if (match) {
        const url = match[0].replace(TRAILING_PUNCTUATION, '')
        flush()
        out.push({ type: 'link', href: url, children: [{ type: 'text', value: url }] })
        i += url.length
        continue
      }
    }

    buffer += ch
    i++
  }
  flush()
  return out
}

export function inlineText(nodes: Inline[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
        case 'code':
          return node.value
        case 'br':
          return ' '
        case 'placeholder':
          return `[${inlineText(node.children)}]`
        default:
          return inlineText(node.children)
      }
    })
    .join('')
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())
}

const BULLET = /^\s*[-*]\s+/
const NUMBERED = /^\s*(\d+)\.\s+/

export function parseLegalMarkdown(source: string): LegalDocument {
  const lines = source.replace(/\r\n?/g, '\n').split('\n')
  const blocks: Block[] = []
  const usedIds = new Map<string, number>()
  let title = ''

  const uniqueId = (text: string) => {
    const base = slugify(text) || 'section'
    const seen = usedIds.get(base) ?? 0
    usedIds.set(base, seen + 1)
    return seen ? `${base}-${seen + 1}` : base
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      i++
      continue
    }

    const heading = /^(#{1,4})\s+(.*)$/.exec(trimmed)
    if (heading) {
      const level = heading[1].length as 1 | 2 | 3 | 4
      const children = parseInline(heading[2])
      const text = inlineText(children)
      if (level === 1 && !title) title = text
      blocks.push({ type: 'heading', level, id: uniqueId(text), children })
      i++
      continue
    }

    if (/^-{3,}$/.test(trimmed) || /^\*{3,}$/.test(trimmed)) {
      blocks.push({ type: 'rule' })
      i++
      continue
    }

    if (trimmed.startsWith('|')) {
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i]))
        i++
      }
      const isSeparator = (cells: string[]) => cells.every((cell) => /^:?-{3,}:?$/.test(cell))
      const [headerCells, maybeSeparator, ...rest] = rows
      const body = maybeSeparator && isSeparator(maybeSeparator) ? rest : rows.slice(1)
      blocks.push({
        type: 'table',
        header: headerCells.map((cell) => parseInline(cell)),
        rows: body.map((row) => row.map((cell) => parseInline(cell))),
      })
      continue
    }

    if (trimmed.startsWith('>')) {
      const quoted: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoted.push(lines[i].trim().replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'quote', children: parseInline(quoted.join('\n')) })
      continue
    }

    const bullet = BULLET.test(line)
    const numbered = NUMBERED.exec(line)
    if (bullet || numbered) {
      const ordered = !bullet
      const start = numbered ? Number(numbered[1]) : 1
      const items: string[] = []
      while (i < lines.length) {
        const current = lines[i]
        if (!current.trim()) break
        const isItem = ordered ? NUMBERED.test(current) : BULLET.test(current)
        if (isItem) {
          items.push(current.replace(ordered ? NUMBERED : BULLET, ''))
        } else if (/^\s+\S/.test(current) && items.length) {
          // An indented continuation line belongs to the item above
          items[items.length - 1] += ` ${current.trim()}`
        } else {
          break
        }
        i++
      }
      blocks.push({ type: 'list', ordered, start, items: items.map((item) => parseInline(item)) })
      continue
    }

    const paragraph: string[] = []
    while (i < lines.length) {
      const current = lines[i]
      const t = current.trim()
      if (
        !t ||
        /^#{1,4}\s/.test(t) ||
        /^-{3,}$/.test(t) ||
        t.startsWith('|') ||
        t.startsWith('>') ||
        BULLET.test(current) ||
        NUMBERED.test(current)
      )
        break
      paragraph.push(t)
      i++
    }
    blocks.push({ type: 'paragraph', children: parseInline(paragraph.join('\n')) })
  }

  linkContentsLists(blocks)
  return { title, blocks }
}

// A numbered list whose items match later "N. Title" headings (the documents' own
// table of contents) gets each item linked to its section.
function linkContentsLists(blocks: Block[]) {
  const headings = new Map<string, string>()
  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 2) headings.set(inlineText(block.children).trim(), block.id)
  }
  for (const block of blocks) {
    if (block.type !== 'list' || !block.ordered) continue
    const ids = block.items.map((item, index) => headings.get(`${block.start + index}. ${inlineText(item).trim()}`))
    if (ids.every(Boolean)) {
      block.items = block.items.map((item, index) => [{ type: 'link', href: `#${ids[index]}`, children: item }])
    }
  }
}

// Every [bracketed] span that is not a link, outermost first (nested ones are inside it)
export function findPlaceholders(source: string): string[] {
  const found: string[] = []
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== '[') continue
    const close = findClosingBracket(source, i)
    if (close < 0) continue
    if (source[close + 1] !== '(') found.push(source.slice(i, close + 1))
    i = close
  }
  return found
}
