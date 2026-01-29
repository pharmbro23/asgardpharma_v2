import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { historyContent } from '@/content/site-content'
import blurData from '@/lib/blur-data.json'

function HighlightText({ text, highlights }: { text: string; highlights: string[] }) {
  let result = text
  highlights.forEach((phrase) => {
    result = result.replace(
      phrase,
      `<strong class="text-bg-main font-semibold">${phrase}</strong>`
    )
  })
  return <span dangerouslySetInnerHTML={{ __html: result }} />
}

const blurMap: Record<string, string> = blurData

const imageBlurKeys = [
  'history-connaught-vials',
  'history-scientist',
  'history-map',
  'history-building',
]

export function History() {
  return (
    <Section id="history" variant="dark">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-bg-main mb-12 leading-tight">
            {historyContent.heading.prefix}{' '}
            <span className="text-accent">{historyContent.heading.accent}</span>{' '}
            {historyContent.heading.suffix}
          </h2>

          <ul className="space-y-8">
            {historyContent.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                <p className="text-bg-main/80 leading-relaxed">
                  <HighlightText text={bullet.text} highlights={bullet.highlights} />
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {historyContent.images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl group"
            >
              <Image
                src={src}
                alt={`History image ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL={blurMap[imageBlurKeys[index]]}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
