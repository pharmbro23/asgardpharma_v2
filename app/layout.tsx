import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipNav } from '@/components/layout/SkipNav'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Asgard | Ventures in Life Sciences',
    template: '%s | Asgard',
  },
  description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
  keywords: ['pharmaceuticals', 'biologics', 'vaccine manufacturing', 'Canada', 'healthcare'],
  authors: [{ name: 'Asgard Pharmaceuticals Inc.' }],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://asgardpharma.ca',
    siteName: 'Asgard Pharma',
    title: 'Asgard | Ventures in Life Sciences',
    description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asgard | Ventures in Life Sciences',
    description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg-main text-text-main font-sans">
        <SkipNav />
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
