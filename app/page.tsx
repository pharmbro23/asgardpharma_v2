import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Hero, Ventures, About, Contact } from '@/components/sections'
import { homeContent, ventures } from '@/content/site-content'

export default function Home() {
  return (
    <>
      <Hero content={homeContent.hero}>
        <ul className="grid grid-cols-1 sm:grid-cols-3 border-t border-text-main/15">
          {ventures.map((venture, index) => (
            <li key={venture.slug}>
              <Link
                href={venture.href}
                className="group flex items-start justify-between gap-4 pt-6 pb-2 sm:pr-8"
              >
                <span>
                  <span className="block text-xs font-bold tracking-nav text-accent mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="block text-lg md:text-xl font-bold uppercase tracking-tight text-text-main group-hover:text-accent transition-colors">
                    {venture.name}
                  </span>
                  <span className="block text-sm text-text-muted">{venture.category}</span>
                </span>
                <ArrowUpRight size={18} className="mt-6 flex-shrink-0 text-text-main/40 group-hover:text-accent transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </Hero>
      <Ventures />
      <About />
      <Contact content={homeContent.contact} />
    </>
  )
}
