'use client'

import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { contactContent } from '@/content/site-content'

export function Contact() {
  const mailto = `mailto:${contactContent.email}`

  return (
    <Section id="contact" variant="light">
      <AnimatedSection className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
        <div className="lg:col-span-7">
          <Eyebrow className="mb-8">{contactContent.eyebrow}</Eyebrow>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-text-main mb-10">
            {contactContent.heading}
          </h2>
          <a
            href={mailto}
            className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-light tracking-tight text-text-main border-b border-text-main/20 pb-2 hover:border-accent hover:text-accent transition-colors break-all"
          >
            {contactContent.email}
            <ArrowUpRight className="flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <div className="lg:col-span-5">
          <p className="text-lg text-text-muted leading-relaxed mb-10">{contactContent.description}</p>
          <Button href={mailto} variant="primary">
            {contactContent.ctaText}
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  )
}
