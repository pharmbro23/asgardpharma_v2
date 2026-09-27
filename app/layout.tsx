import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipNav } from '@/components/layout/SkipNav'
import './globals.css'

// Self-hosted at build time: Inter for the site, Jost for the Asgard wordmark
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jost = Jost({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jost', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://asgardpharma.ca'),
  title: {
    default: 'Asgard | Ventures in Life Sciences',
    template: '%s | Asgard',
  },
  description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
  keywords: ['pharmaceuticals', 'biologics', 'vaccine manufacturing', 'Canada', 'healthcare'],
  authors: [{ name: 'Asgard Pharmaceuticals Inc.' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://asgardpharma.ca',
    siteName: 'Asgard Pharma',
    title: 'Asgard | Ventures in Life Sciences',
    description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Asgard Pharmaceuticals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asgard | Ventures in Life Sciences',
    description: 'Asgard builds focused ventures that change how medicines are made, valued and delivered.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-main text-text-main font-sans">
        <SkipNav />
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
