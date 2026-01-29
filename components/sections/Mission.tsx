'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { missionContent } from '@/content/site-content'

export function Mission() {
  return (
    <Section id="overview" variant="light">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-xs font-bold uppercase tracking-nav text-accent mb-4">
          {missionContent.title}
        </h2>
        <p className="text-2xl md:text-3xl font-light text-text-main max-w-4xl mx-auto leading-relaxed">
          {missionContent.subtitle}
        </p>
      </AnimatedSection>

      <AnimatedStagger className="grid md:grid-cols-2 gap-8">
        {missionContent.cards.map((card, index) => (
          <AnimatedItem key={index}>
            <Card className="p-8 md:p-10 h-full">
              <h3 className="text-xl font-bold text-text-main mb-4">
                {card.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {card.description}
              </p>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}
