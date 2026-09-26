'use client'

import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { problemContent } from '@/content/site-content'
import { getIcon } from '@/lib/icons'
import blurData from '@/lib/blur-data.json'

export function Challenge() {
  const { feature } = problemContent

  return (
    <Section id="problem" variant="light">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Heading + feature image */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <AnimatedSection>
              <Eyebrow className="mb-8">{problemContent.eyebrow}</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] text-text-main mb-10">
                {problemContent.heading}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={blurData.challenge}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-5xl md:text-6xl font-bold tracking-tighter text-bg-main">{feature.value}</p>
                  <p className="text-sm text-bg-main/80 mt-2 max-w-xs">{feature.caption}</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>

        {/* Problem list */}
        <AnimatedStagger className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-text-main/10 border border-text-main/10 rounded-2xl overflow-hidden self-start">
          {problemContent.items.map((item, index) => (
            <AnimatedItem
              key={item.iconKey}
              className="bg-bg-main p-8 md:p-10 group hover:bg-white transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-accent">{getIcon(item.iconKey, undefined, 32)}</span>
                <span className="text-xs font-bold tracking-nav text-text-main/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-text-main mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">{item.description}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </Section>
  )
}
