'use client'

import Image from 'next/image'
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  CircleDollarSign,
  CloudOff,
  Cpu,
  FileLock2,
  Globe,
  MapPin,
  Plus,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  ToggleRight,
  WifiOff,
  X,
} from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { EirPhone } from './EirPhone'
import {
  eirHero,
  eirProblem,
  eirHow,
  eirPrivacy,
  eirComparison,
  eirPricing,
  eirFaq,
  eirCta,
  type EirIconKey,
} from '@/content/eir-content'

const icons: Record<EirIconKey, typeof Camera> = {
  confidential: FileLock2,
  border: Globe,
  cost: CircleDollarSign,
  camera: Camera,
  chip: Cpu,
  verify: ScanSearch,
  upload: CloudOff,
  offline: WifiOff,
  optin: ToggleRight,
  canada: MapPin,
}

function Icon({ name, size = 24, className }: { name: EirIconKey; size?: number; className?: string }) {
  const Component = icons[name]
  return <Component size={size} strokeWidth={1.5} className={className} />
}

const headingClass = 'text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] text-balance'

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 bg-eir-green text-white px-8 py-4 text-xs font-bold uppercase tracking-cta border border-eir-green hover:bg-transparent hover:text-eir-green transition-colors"
    >
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-main pt-32 pb-20 md:pb-28 px-8">
      {/* Soft brand glow behind the phone */}
      <div className="pointer-events-none absolute -right-40 top-20 w-[40rem] h-[40rem] rounded-full bg-eir-green/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
        <AnimatedSection className="lg:col-span-7">
          <Image
            src="/assets/ventures/eir/logo.png"
            alt="Eir"
            width={1447}
            height={477}
            priority
            className="h-12 md:h-14 w-auto mb-10"
          />
          <Eyebrow className="mb-6 text-eir-gold">{eirHero.eyebrow}</Eyebrow>
          <h1 className="text-[clamp(2.25rem,10vw,3.25rem)] sm:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.92] text-text-main mb-8">
            {eirHero.headline.map((line, i) => (
              <span key={line} className={i === 0 ? 'block text-eir-green' : 'block'}>
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl font-light text-text-main/80 leading-relaxed max-w-xl mb-10">
            {eirHero.subtext}
          </p>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <PrimaryButton href={eirHero.primaryCta.href}>{eirHero.primaryCta.text}</PrimaryButton>
            <a
              href={eirHero.secondaryCta.href}
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-cta text-text-main hover:text-eir-green transition-colors"
            >
              {eirHero.secondaryCta.text}
              <span className="block w-12 h-px bg-current transition-all group-hover:w-16" />
            </a>
          </div>
          <ul className="flex flex-wrap gap-3">
            {eirHero.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-eir-green/20 bg-white/60 px-4 py-2 text-xs font-semibold text-eir-green"
              >
                <Check size={14} className="text-eir-gold" />
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-5" delay={0.15}>
          <EirPhone />
        </AnimatedSection>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <Section id="problem" variant="gray">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
        <AnimatedSection className="lg:col-span-6">
          <Eyebrow className="mb-8 text-eir-gold">{eirProblem.eyebrow}</Eyebrow>
          <h2 className={`${headingClass} text-text-main`}>{eirProblem.heading}</h2>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-6 lg:pt-16" delay={0.1}>
          <p className="text-lg text-text-main/75 leading-relaxed">{eirProblem.intro}</p>
        </AnimatedSection>
      </div>

      <AnimatedStagger className="grid md:grid-cols-3 gap-6">
        {eirProblem.points.map((point) => (
          <AnimatedItem key={point.title} className="bg-white rounded-2xl p-8 border border-text-main/5 shadow-sm">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-eir-gold/15 text-eir-gold mb-8">
              <Icon name={point.icon} />
            </span>
            <h3 className="text-lg font-bold uppercase tracking-tight text-text-main mb-3">{point.title}</h3>
            <p className="text-text-muted leading-relaxed">{point.text}</p>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}

function HowItWorks() {
  return (
    <Section id="how" variant="light">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <Eyebrow className="mb-8 justify-center text-eir-gold">{eirHow.eyebrow}</Eyebrow>
        <h2 className={`${headingClass} text-text-main`}>{eirHow.heading}</h2>
      </AnimatedSection>

      <AnimatedStagger className="relative grid md:grid-cols-3 gap-12 md:gap-8">
        <span className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-eir-green/20" aria-hidden="true" />
        {eirHow.steps.map((step, index) => (
          <AnimatedItem key={step.title} className="relative text-center">
            <span className="relative mx-auto flex w-16 h-16 items-center justify-center rounded-full bg-eir-green text-white mb-8 shadow-lg shadow-eir-green/20">
              <Icon name={step.icon} size={26} />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-eir-gold text-[10px] font-bold text-white flex items-center justify-center">
                {index + 1}
              </span>
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-text-main mb-3">{step.title}</h3>
            <p className="text-text-muted leading-relaxed max-w-xs mx-auto">{step.text}</p>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </Section>
  )
}

function PrivacyDiagram() {
  return (
    <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-10" aria-hidden="true">
      <div className="flex items-start justify-between gap-3">
        {/* Phone: everything happens here */}
        <div className="flex w-24 sm:w-32 flex-col items-center text-center">
          <span className="relative flex w-16 h-16 sm:w-24 sm:h-24 items-center justify-center rounded-2xl sm:rounded-3xl bg-bg-main text-eir-green">
            <Smartphone strokeWidth={1.25} className="w-8 h-8 sm:w-11 sm:h-11" />
            <span className="absolute -bottom-2 -right-2 flex w-7 h-7 sm:w-9 sm:h-9 items-center justify-center rounded-full bg-eir-gold text-white">
              <ShieldCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </span>
          </span>
          <p className="mt-5 text-[10px] sm:text-xs font-bold uppercase tracking-nav text-white">Your phone</p>
          <p className="text-[11px] sm:text-xs text-white/60 mt-1">Photo, model and count</p>
        </div>

        {/* Blocked path */}
        <div className="relative flex-grow min-w-[3rem] flex items-center h-16 sm:h-24">
          <span className="w-full border-t-2 border-dashed border-white/25" />
          <span className="absolute left-1/2 -translate-x-1/2 flex w-8 h-8 sm:w-9 sm:h-9 items-center justify-center rounded-full bg-eir-green border-2 border-white/30 text-white">
            <X size={16} />
          </span>
        </div>

        {/* Cloud: never reached */}
        <div className="flex w-24 sm:w-32 flex-col items-center text-center opacity-50">
          <span className="flex w-16 h-16 sm:w-24 sm:h-24 items-center justify-center rounded-2xl sm:rounded-3xl border-2 border-dashed border-white/40 text-white">
            <CloudOff strokeWidth={1.25} className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
          <p className="mt-5 text-[10px] sm:text-xs font-bold uppercase tracking-nav text-white">Cloud servers</p>
          <p className="text-[11px] sm:text-xs text-white/60 mt-1">Never contacted</p>
        </div>
      </div>
    </div>
  )
}

function Privacy() {
  return (
    <section id="privacy" className="bg-eir-green text-white py-24 md:py-32 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16 md:mb-20">
          <AnimatedSection className="lg:col-span-6">
            <Eyebrow className="mb-8 text-eir-gold">{eirPrivacy.eyebrow}</Eyebrow>
            <h2 className={`${headingClass} mb-8`}>{eirPrivacy.heading}</h2>
            <p className="text-lg text-white/75 leading-relaxed max-w-lg">{eirPrivacy.intro}</p>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6" delay={0.1}>
            <PrivacyDiagram />
          </AnimatedSection>
        </div>

        <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {eirPrivacy.points.map((point) => (
            <AnimatedItem key={point.title} className="border-t border-white/20 pt-6">
              <Icon name={point.icon} className="text-eir-gold mb-5" />
              <h3 className="text-base font-bold uppercase tracking-tight mb-3">{point.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{point.text}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}

function Comparison() {
  const [cloudLabel, eirLabel] = eirComparison.columns
  return (
    <Section id="compare" variant="light">
      <AnimatedSection className="max-w-3xl mb-14">
        <Eyebrow className="mb-8 text-eir-gold">{eirComparison.eyebrow}</Eyebrow>
        <h2 className={`${headingClass} text-text-main`}>{eirComparison.heading}</h2>
      </AnimatedSection>

      <AnimatedSection className="rounded-2xl border border-text-main/10 bg-white overflow-hidden">
        {/* Column headings */}
        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] text-xs font-bold uppercase tracking-nav">
          <div className="hidden md:block p-5" />
          <div className="p-5 text-text-muted">{cloudLabel}</div>
          <div className="p-5 bg-eir-green text-white flex items-center gap-2">
            <BadgeCheck size={16} className="text-eir-gold" />
            {eirLabel}
          </div>
        </div>
        {eirComparison.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] border-t border-text-main/10 text-sm"
          >
            <div className="col-span-2 md:col-span-1 px-5 pt-5 md:py-5 font-semibold text-text-main">{row.label}</div>
            <div className="px-5 py-4 md:py-5 text-text-muted flex items-start gap-2">
              <X size={16} className="mt-0.5 flex-shrink-0 text-text-main/30" />
              {row.cloud}
            </div>
            <div className="px-5 py-4 md:py-5 bg-eir-green/[0.06] text-eir-green font-semibold flex items-start gap-2">
              <Check size={16} className="mt-0.5 flex-shrink-0 text-eir-gold" />
              {row.eir}
            </div>
          </div>
        ))}
      </AnimatedSection>
    </Section>
  )
}

function Pricing() {
  const { plan, comparison } = eirPricing
  return (
    <Section variant="gray">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <AnimatedSection className="lg:col-span-6">
          <Eyebrow className="mb-8 text-eir-gold">{eirPricing.eyebrow}</Eyebrow>
          <h2 className={`${headingClass} text-text-main mb-8`}>{eirPricing.heading}</h2>
          <p className="text-lg text-text-main/75 leading-relaxed max-w-md mb-12">{eirPricing.text}</p>
          <div className="border-t border-text-main/15 pt-6 max-w-sm">
            <p className="text-5xl font-bold tracking-tighter text-text-main/30 line-through decoration-2">
              {comparison.value}
            </p>
            <p className="text-sm text-text-muted mt-2">{comparison.label}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-6" delay={0.1}>
          <div className="rounded-3xl bg-white border border-text-main/5 shadow-xl p-8 md:p-10 max-w-md lg:ml-auto">
            <Image src="/assets/ventures/eir/logo.png" alt="" width={1447} height={477} className="h-9 w-auto mb-8" />
            <p className="text-3xl font-bold tracking-tighter text-text-main">{plan.price}</p>
            <p className="text-sm text-eir-gold font-semibold mt-1 mb-8">{plan.note}</p>
            <ul className="space-y-4 mb-10">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-main/80">
                  <span className="mt-0.5 flex w-5 h-5 flex-shrink-0 items-center justify-center rounded-full bg-eir-green text-white">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryButton href={eirCta.cta.href}>{eirCta.cta.text}</PrimaryButton>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}

function Faq() {
  return (
    <Section id="faq" variant="light">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <AnimatedSection className="lg:col-span-4">
          <Eyebrow className="mb-8 text-eir-gold">{eirFaq.eyebrow}</Eyebrow>
          <h2 className={`${headingClass} text-text-main`}>{eirFaq.heading}</h2>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-8" delay={0.1}>
          <div className="divide-y divide-text-main/10 border-y border-text-main/10">
            {eirFaq.items.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-text-main [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    size={20}
                    className="flex-shrink-0 text-eir-green transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 pr-10 text-text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}

function FinalCta() {
  return (
    <section className="bg-eir-green text-white py-24 md:py-28 px-8">
      <AnimatedSection className="mx-auto max-w-4xl text-center">
        <Image
          src="/assets/ventures/eir/icon.png"
          alt=""
          width={512}
          height={512}
          className="w-20 h-20 mx-auto mb-10 rounded-[22%] shadow-xl shadow-black/20"
        />
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] text-balance mb-6">
          {eirCta.heading}
        </h2>
        <p className="text-lg text-white/75 leading-relaxed max-w-xl mx-auto mb-10">{eirCta.text}</p>
        <a
          href={eirCta.cta.href}
          className="group inline-flex items-center gap-3 bg-white text-eir-green px-8 py-4 text-xs font-bold uppercase tracking-cta border border-white hover:bg-transparent hover:text-white transition-colors"
        >
          {eirCta.cta.text}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </AnimatedSection>
    </section>
  )
}

export function EirPage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Privacy />
      <Comparison />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  )
}
