'use client'

import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SpotlightBackground } from '@/components/features/SpotlightBackground'
import { homeContent } from '@/content/site-content'

export function About() {
  const { about } = homeContent

  return (
    <SpotlightBackground className="bg-text-main">
      <Section id="about" variant="dark" className="bg-transparent">
        <AnimatedSection>
          <Eyebrow className="mb-10">{about.eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] text-bg-main max-w-5xl mb-20 md:mb-28">
            {about.statement.prefix} <span className="font-bold text-accent">{about.statement.accent}</span>{' '}
            {about.statement.suffix}
          </h2>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-3 gap-12 md:gap-16">
          {about.principles.map((principle, index) => (
            <AnimatedItem key={principle.title} className="border-t border-bg-main/20 pt-8">
              <div className="flex items-baseline gap-6 mb-4">
                <span className="text-xs font-bold tracking-nav text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-bg-main">{principle.title}</h3>
              </div>
              <p className="text-bg-main/70 leading-relaxed">{principle.description}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Section>
    </SpotlightBackground>
  )
}
