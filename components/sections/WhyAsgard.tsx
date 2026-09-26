'use client'

import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SpotlightBackground } from '@/components/features/SpotlightBackground'
import { whyAsgardContent } from '@/content/site-content'

function HighlightText({ text, accentPhrase }: { text: string; accentPhrase: string }) {
  const parts = text.split(accentPhrase)
  return (
    <>
      {parts[0]}
      <strong className="text-accent font-bold">{accentPhrase}</strong>
      {parts[1]}
    </>
  )
}

export function WhyAsgard() {
  return (
    <SpotlightBackground className="bg-text-main">
      <Section variant="dark" className="bg-transparent">
        <AnimatedSection className="max-w-5xl">
          <Eyebrow className="mb-10">{whyAsgardContent.eyebrow}</Eyebrow>
          <blockquote className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] text-bg-main">
            <span className="text-accent font-bold" aria-hidden="true">&ldquo;</span>
            {whyAsgardContent.intro}
            <span className="text-accent font-bold" aria-hidden="true">&rdquo;</span>
          </blockquote>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 gap-12 md:gap-16 mt-20 md:mt-28">
          {whyAsgardContent.beliefs.map((belief) => (
            <AnimatedItem key={belief.accentPhrase} className="border-t border-bg-main/20 pt-8">
              <p className="text-lg md:text-xl text-bg-main/80 leading-relaxed">
                <HighlightText text={belief.text} accentPhrase={belief.accentPhrase} />
              </p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Section>
    </SpotlightBackground>
  )
}
