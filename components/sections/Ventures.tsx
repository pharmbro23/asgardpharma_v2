'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { VentureVisual } from '@/components/features/VentureVisual'
import { ventures, homeContent } from '@/content/site-content'
import { cn } from '@/lib/utils'

export function Ventures() {
  const content = homeContent.ventures

  return (
    <Section id="ventures" variant="light">
      <AnimatedSection className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-end mb-16 md:mb-20">
        <div className="lg:col-span-7">
          <Eyebrow className="mb-8">{content.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-text-main">
            {content.heading}
          </h2>
        </div>
        <p className="lg:col-span-5 text-lg text-text-muted leading-relaxed">{content.intro}</p>
      </AnimatedSection>

      <AnimatedStagger className="grid md:grid-cols-3 gap-6">
        {ventures.map((venture, index) => (
          <AnimatedItem key={venture.slug}>
            <Link
              href={venture.href}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-text-main/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <VentureVisual slug={venture.slug} />
              </div>
              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold tracking-nav text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-bold uppercase tracking-nav px-3 py-1 rounded-full',
                      venture.status === 'Active'
                        ? 'bg-text-main text-bg-main'
                        : 'bg-bg-secondary text-text-muted'
                    )}
                  >
                    {venture.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-text-main mb-2">
                  {venture.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-nav text-text-muted mb-4">
                  {venture.category}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-8">{venture.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-cta text-text-main group-hover:text-accent transition-colors">
                  {venture.status === 'Active' ? 'Explore' : 'Learn more'}
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}
