'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { modelContent } from '@/content/site-content'
import { getIcon } from '@/lib/icons'
import blurData from '@/lib/blur-data.json'

export function Solution() {
  return (
    <Section id="solution" variant="gray">
      {/* Intro */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
        <AnimatedSection className="lg:col-span-6">
          <Eyebrow className="mb-8">{modelContent.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-text-main mb-8">
            {modelContent.heading}
          </h2>
          <p className="text-lg md:text-xl font-light text-text-main/80 leading-relaxed max-w-lg">
            {modelContent.intro}
          </p>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-6" delay={0.1}>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden group">
            <Image
              src={modelContent.image.src}
              alt={modelContent.image.alt}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={blurData.solution}
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Three-step flow */}
      <AnimatedStagger className="grid md:grid-cols-3 gap-4 md:gap-0 mb-20 md:mb-28">
        {modelContent.steps.map((step, index) => {
          const isLast = index === modelContent.steps.length - 1
          return (
            <AnimatedItem key={step.number} className="relative">
              <div
                className={
                  'h-full p-8 md:p-10 rounded-2xl md:rounded-none border ' +
                  (isLast
                    ? 'bg-text-main text-bg-main border-text-main md:rounded-r-2xl'
                    : 'bg-bg-main text-text-main border-text-main/10 ' +
                      (index === 0 ? 'md:rounded-l-2xl md:border-r-0' : 'md:border-r-0'))
                }
              >
                <span className="text-xs font-bold tracking-nav text-accent">{step.number}</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mt-6 mb-4">
                  {step.title}
                </h3>
                <p className={'leading-relaxed ' + (isLast ? 'text-bg-main/75' : 'text-text-muted')}>
                  {step.text}
                </p>
              </div>
              {!isLast && (
                <span
                  className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-accent text-bg-main items-center justify-center"
                  aria-hidden="true"
                >
                  <ArrowRight size={14} />
                </span>
              )}
            </AnimatedItem>
          )
        })}
      </AnimatedStagger>

      {/* Outcomes */}
      <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {modelContent.outcomes.map((outcome) => (
          <AnimatedItem key={outcome.iconKey} className="border-t border-text-main/20 pt-6">
            <span className="block text-text-main mb-6">{getIcon(outcome.iconKey, undefined, 28)}</span>
            <h3 className="text-base font-bold uppercase tracking-tight text-text-main mb-3">
              {outcome.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{outcome.description}</p>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}
