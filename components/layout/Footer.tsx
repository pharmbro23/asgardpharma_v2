import Image from 'next/image'
import Link from 'next/link'
import { contactContent, footerContent, homeNavItems, ventures } from '@/content/site-content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-main text-bg-main pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Company Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-10 h-10 rounded-full bg-bg-main p-1">
                <Image src="/logo.svg" alt="" width={32} height={32} className="w-full h-full" />
              </span>
              <span className="text-2xl font-bold tracking-logo uppercase">Asgard</span>
            </div>
            <p className="text-sm text-bg-main/60 max-w-xs leading-relaxed">{footerContent.tagline}</p>
          </div>

          {/* Ventures */}
          <nav className="md:col-span-3" aria-label="Ventures">
            <h4 className="text-xs font-bold uppercase tracking-nav text-accent mb-6">Ventures</h4>
            <ul className="space-y-3">
              {ventures.map((venture) => (
                <li key={venture.slug}>
                  <Link href={venture.href} className="text-sm text-bg-main/70 hover:text-bg-main transition-colors">
                    {venture.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-nav text-accent mb-6">Company</h4>
            <ul className="space-y-3">
              {homeNavItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm text-bg-main/70 hover:text-bg-main transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-sm text-bg-main/70 hover:text-bg-main transition-colors"
                >
                  {contactContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-main/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-bg-main/50">
          <p>&copy; {currentYear} {footerContent.company} All rights reserved.</p>
          <p className="uppercase tracking-nav">Made in Canada</p>
        </div>
      </div>
    </footer>
  )
}
