import { ArrowRight, ArrowUpRight, Check, ShieldAlert, Smartphone } from 'lucide-react'
import { EirInfoShell } from './EirInfoShell'
import { eirSupport, eirSupportEmail } from '@/content/eir-support'
import type { EirLang } from '@/content/eir-legal'

const headingClass =
  'mt-16 mb-6 border-t border-text-main/10 pt-8 text-lg md:text-xl font-bold uppercase tracking-tight text-text-main'

export function EirSupportPage({ lang }: { lang: EirLang }) {
  const content = eirSupport[lang]
  const mailto = `mailto:${eirSupportEmail}?subject=${encodeURIComponent(content.contact.subject)}`

  return (
    <EirInfoShell slug="support" lang={lang} title={content.title} intro={content.intro}>
      {/* Contact */}
      <div className="relative overflow-hidden rounded-3xl bg-eir-deep p-8 text-white md:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-eir-green/40 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-nav text-eir-gold">{content.contact.label}</p>
          <a
            href={mailto}
            className="mt-3 block text-xl font-bold tracking-tight [overflow-wrap:anywhere] transition-colors hover:text-eir-gold sm:text-2xl md:text-4xl"
          >
            {eirSupportEmail}
          </a>
          <a
            href={mailto}
            className="group mt-8 inline-flex items-center gap-3 border border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-cta text-eir-green transition-colors hover:bg-transparent hover:text-white"
          >
            {content.contact.button}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-8 text-sm leading-relaxed text-white/60">{content.contact.note}</p>
        </div>
      </div>

      {/* What to include */}
      <h2 className={headingClass}>{content.include.heading}</h2>
      <ul className="space-y-4">
        {content.include.items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed text-text-main/80">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-eir-green text-white">
              <Check size={12} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-4 rounded-2xl border border-eir-gold/40 bg-eir-gold/10 p-5">
        <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-eir-gold" strokeWidth={1.75} aria-hidden="true" />
        <p className="text-sm leading-relaxed text-text-main/80">{content.include.caution}</p>
      </div>

      {/* Cancelling */}
      <h2 className={headingClass}>{content.cancel.heading}</h2>
      <p className="leading-relaxed text-text-main/80">{content.cancel.intro}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {content.cancel.stores.map((store) => (
          <div key={store.store} className="flex flex-col rounded-2xl border border-text-main/10 bg-white p-6 md:p-8">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-text-main">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eir-green/10 text-eir-green">
                <Smartphone size={18} strokeWidth={1.75} aria-hidden="true" />
              </span>
              {store.store}
            </p>
            <ol className="mb-6 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-text-main/80 marker:font-semibold marker:text-eir-green">
              {store.steps.map((step) => (
                <li key={step} className="pl-1">
                  {step}
                </li>
              ))}
            </ol>
            <a
              href={store.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-nav text-eir-green"
            >
              {store.link.text}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        ))}
      </div>
      <p className="mt-8 leading-relaxed text-text-main/80">{content.cancel.inApp}</p>
      <p className="mt-4 leading-relaxed text-text-main/80">{content.cancel.after}</p>
    </EirInfoShell>
  )
}
