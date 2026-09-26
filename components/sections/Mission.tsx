'use client'

import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { missionContent } from '@/content/site-content'

export function Mission() {
  const { statement } = missionContent

  return (
    <Section id="overview" variant="light">
      <AnimatedSection>
        <Eyebrow className="mb-10">{missionContent.eyebrow}</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-light text-text-main tracking-tight leading-[1.15] max-w-5xl mb-20 md:mb-28">
          {statement.prefix} <span className="font-bold text-accent">{statement.accent}</span>{' '}
          {statement.suffix}
        </h2>
      </AnimatedSection>

      <AnimatedStagger className="grid md:grid-cols-2 gap-12 md:gap-16">
        {missionContent.pillars.map((pillar, index) => (
          <AnimatedItem key={pillar.title} className="border-t border-text-main/15 pt-8">
            <div className="flex items-baseline gap-6 mb-4">
              <span className="text-xs font-bold tracking-nav text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-text-main">
                {pillar.title}
              </h3>
            </div>
            <p className="text-text-muted leading-relaxed md:pl-12">{pillar.description}</p>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}
