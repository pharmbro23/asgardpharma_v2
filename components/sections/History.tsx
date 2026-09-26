'use client'

import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { historyContent } from '@/content/site-content'
import blurData from '@/lib/blur-data.json'

const blurMap: Record<string, string> = blurData

export function History() {
  const { heading } = historyContent

  return (
    <Section id="history" variant="dark">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-20">
        <AnimatedSection className="lg:col-span-6">
          <Eyebrow className="mb-8">{historyContent.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-bg-main">
            {heading.prefix} <span className="text-accent">{heading.accent}</span> {heading.suffix}
          </h2>
        </AnimatedSection>

        {/* Archival image strip */}
        <AnimatedStagger className="lg:col-span-6 grid grid-cols-4 gap-2 md:gap-3">
          {historyContent.images.map((image, index) => (
            <AnimatedItem
              key={image.src}
              className={index % 2 === 0 ? 'lg:translate-y-6' : undefined}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  placeholder="blur"
                  blurDataURL={blurMap[image.blurKey]}
                />
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>

      {/* Timeline */}
      <AnimatedStagger className="grid md:grid-cols-4 relative">
        {/* Horizontal rail (desktop) */}
        <span className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-bg-main/20" aria-hidden="true" />
        {historyContent.timeline.map((entry, index) => {
          const isLast = index === historyContent.timeline.length - 1
          return (
            <AnimatedItem key={entry.year} className="relative pl-10 md:pl-0 md:pr-8 pb-12 md:pb-0">
              {/* Vertical rail (mobile) */}
              {!isLast && (
                <span className="md:hidden absolute left-[7px] top-4 bottom-0 w-px bg-bg-main/20" aria-hidden="true" />
              )}
              <span
                className={
                  'absolute left-0 md:static block w-[15px] h-[15px] rounded-full border-2 md:mb-8 ' +
                  (isLast ? 'bg-accent border-accent' : 'bg-text-main border-bg-main/60')
                }
                aria-hidden="true"
              />
              <p
                className={
                  'text-4xl md:text-5xl font-bold tracking-tighter mb-3 ' +
                  (isLast ? 'text-accent' : 'text-bg-main')
                }
              >
                {entry.year}
              </p>
              <h3 className="text-xs font-bold uppercase tracking-nav text-bg-main/60 mb-4">
                {entry.title}
              </h3>
              <p className="text-bg-main/75 leading-relaxed text-sm md:text-base">{entry.text}</p>
            </AnimatedItem>
          )
        })}
      </AnimatedStagger>
    </Section>
  )
}
