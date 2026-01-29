import { Linkedin, Twitter } from 'lucide-react'
import { contactContent, footerContent } from '@/content/site-content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-black/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          {/* Company Info */}
          <div className="mb-12 md:mb-0">
            <h4 className="text-2xl font-bold tracking-logo text-text-main uppercase mb-4">
              {footerContent.company}
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              &copy; {currentYear} ASGARD PHARMA. All rights reserved.
            </p>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-nav text-text-main mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-sm text-text-muted hover:text-text-main transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
