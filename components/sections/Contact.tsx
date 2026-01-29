'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { contactContent } from '@/content/site-content'

export function Contact() {
  return (
    <Section id="contact" variant="gray" className="text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-text-main mb-6">
          {contactContent.heading}
        </h2>
        <p className="text-lg text-text-muted mb-12 max-w-xl mx-auto">
          {contactContent.description}
        </p>
        <Button href={`mailto:${contactContent.email}`} variant="outline">
          {contactContent.ctaText}
        </Button>
      </AnimatedSection>
    </Section>
  )
}
