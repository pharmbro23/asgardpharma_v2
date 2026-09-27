import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { VentureVisual } from '@/components/features/VentureVisual'
import { contactContent, type Venture } from '@/content/site-content'

// Placeholder page for ventures that haven't launched yet
export function ComingSoon({ venture }: { venture: Venture }) {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 px-8">
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <Eyebrow className="mb-8">
            An Asgard venture · {venture.status}
          </Eyebrow>
          {venture.logo ? (
            <h1 className="mb-8">
              <Image
                src={venture.logo.wordmark}
                alt={venture.name}
                width={1306}
                height={314}
                priority
                className="w-auto h-auto max-w-full max-h-24 md:max-h-32"
              />
            </h1>
          ) : (
            <h1 className="text-[clamp(2.5rem,12vw,3.75rem)] md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-text-main mb-6">
              {venture.name}
            </h1>
          )}
          <p className="text-xs font-bold uppercase tracking-nav text-text-muted mb-8">{venture.category}</p>
          <p className="text-lg md:text-xl font-light text-text-main/80 leading-relaxed max-w-xl mb-12">
            {venture.description}
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href={`mailto:${contactContent.email}?subject=${encodeURIComponent(venture.name)}`}
              className="group inline-flex items-center gap-3 bg-text-main text-bg-main px-8 py-4 text-xs font-bold uppercase tracking-cta border border-text-main hover:bg-transparent hover:text-text-main transition-colors"
            >
              Get early access
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/#ventures"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-cta text-text-main hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              All ventures
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 group">
          {venture.logo ? (
            <Image
              src={venture.logo.icon}
              alt=""
              width={512}
              height={512}
              className="w-full max-w-sm mx-auto h-auto drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-text-main/5 shadow-sm">
              <VentureVisual venture={venture} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
