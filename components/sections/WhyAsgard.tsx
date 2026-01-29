'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
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
    <SpotlightBackground>
      <Section variant="gray">
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;{whyAsgardContent.intro}&rdquo;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyAsgardContent.cards.map((card, index) => (
            <Card key={index} className="p-8 md:p-10 text-center">
              <p className="text-lg md:text-xl text-text-main leading-relaxed">
                <HighlightText text={card.text} accentPhrase={card.accentPhrase} />
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </SpotlightBackground>
  )
}
