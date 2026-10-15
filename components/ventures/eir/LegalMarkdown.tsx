import { Fragment } from 'react'
import type { Block, Inline } from '@/lib/legal-markdown'

const linkClass =
  'text-eir-green underline decoration-eir-green/30 underline-offset-2 [overflow-wrap:anywhere] hover:decoration-eir-green transition-colors'

export function LegalInline({ nodes }: { nodes: Inline[] }) {
  return <InlineNodes nodes={nodes} />
}

function InlineNodes({ nodes }: { nodes: Inline[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        switch (node.type) {
          case 'text':
            return <Fragment key={index}>{node.value}</Fragment>
          case 'br':
            return <br key={index} />
          case 'strong':
            return (
              <strong key={index} className="font-semibold text-text-main">
                <InlineNodes nodes={node.children} />
              </strong>
            )
          case 'em':
            return (
              <em key={index}>
                <InlineNodes nodes={node.children} />
              </em>
            )
          case 'code':
            return (
              <code key={index} className="rounded bg-text-main/[0.06] px-1 py-0.5 font-mono text-[0.85em] text-text-main">
                {node.value}
              </code>
            )
          case 'link': {
            const external = /^https?:/.test(node.href)
            return (
              <a
                key={index}
                href={node.href}
                className={linkClass}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <InlineNodes nodes={node.children} />
              </a>
            )
          }
          case 'placeholder':
            // Still to be filled in by the owner: keep the brackets and make them easy to spot
            return (
              <mark key={index} className="rounded-sm bg-eir-gold/20 px-0.5 text-inherit">
                [<InlineNodes nodes={node.children} />]
              </mark>
            )
        }
      })}
    </>
  )
}

function Table({ block }: { block: Extract<Block, { type: 'table' }> }) {
  return (
    <>
      {/* Wide screens: a real table */}
      <div className="hidden md:block my-8 overflow-hidden rounded-2xl border border-text-main/10 bg-white">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-eir-green/[0.06]">
              {block.header.map((cell, index) => (
                <th key={index} scope="col" className="p-4 align-bottom text-xs font-bold uppercase tracking-nav text-eir-green">
                  <InlineNodes nodes={cell} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-text-main/10">
                {row.map((cell, index) => (
                  <td key={index} className="p-4 align-top leading-relaxed text-text-main/80">
                    <InlineNodes nodes={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phones: one card per row, so nothing scrolls sideways */}
      <div className="md:hidden my-6 space-y-3">
        {block.rows.map((row, rowIndex) => (
          <dl key={rowIndex} className="rounded-2xl border border-text-main/10 bg-white p-5 space-y-3 text-sm">
            {row.map((cell, index) => (
              <div key={index}>
                <dt className="text-[10px] font-bold uppercase tracking-nav text-eir-gold mb-1">
                  <InlineNodes nodes={block.header[index] ?? []} />
                </dt>
                <dd className={index === 0 ? 'font-semibold text-text-main' : 'leading-relaxed text-text-main/80'}>
                  <InlineNodes nodes={cell} />
                </dd>
              </div>
            ))}
          </dl>
        ))}
      </div>
    </>
  )
}

export function LegalMarkdown({ blocks, skipTitle = true }: { blocks: Block[]; skipTitle?: boolean }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading': {
            if (block.level === 1) {
              if (skipTitle) return null
              return (
                <h2 key={index} id={block.id} className="mt-12 mb-6 text-3xl font-bold uppercase tracking-tighter text-text-main">
                  <InlineNodes nodes={block.children} />
                </h2>
              )
            }
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  id={block.id}
                  className="scroll-mt-28 mt-14 mb-5 border-t border-text-main/10 pt-8 text-lg md:text-xl font-bold uppercase tracking-tight text-text-main"
                >
                  <InlineNodes nodes={block.children} />
                </h2>
              )
            }
            return (
              <h3 key={index} id={block.id} className="scroll-mt-28 mt-8 mb-3 text-base md:text-lg font-semibold text-text-main">
                <InlineNodes nodes={block.children} />
              </h3>
            )
          }
          case 'paragraph':
            return (
              <p key={index} className="my-4 leading-relaxed text-text-main/80">
                <InlineNodes nodes={block.children} />
              </p>
            )
          case 'list': {
            const items = block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="pl-1 leading-relaxed">
                <InlineNodes nodes={item} />
              </li>
            ))
            return block.ordered ? (
              <ol
                key={index}
                start={block.start}
                className="my-4 list-decimal space-y-2 pl-8 text-text-main/80 marker:font-semibold marker:text-eir-green"
              >
                {items}
              </ol>
            ) : (
              <ul key={index} className="my-4 list-disc space-y-2 pl-5 text-text-main/80 marker:text-eir-green">
                {items}
              </ul>
            )
          }
          case 'table':
            return <Table key={index} block={block} />
          case 'quote':
            return (
              <blockquote key={index} className="my-6 border-l-2 border-eir-gold pl-5 leading-relaxed text-text-main/70">
                <InlineNodes nodes={block.children} />
              </blockquote>
            )
          case 'rule': {
            // A section heading already draws its own rule
            const next = blocks[index + 1]
            if (next?.type === 'heading' && next.level === 2) return null
            return <hr key={index} className="my-10 border-text-main/10" />
          }
        }
      })}
    </>
  )
}
