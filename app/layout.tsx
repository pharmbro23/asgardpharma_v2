import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipNav } from '@/components/layout/SkipNav'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Asgard Pharma | Fabless Biologics & Vaccine Manufacturing',
    template: '%s | Asgard Pharma',
  },
  description: 'Asgard Pharmaceuticals Inc. - Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
  keywords: ['pharmaceuticals', 'biologics', 'vaccine manufacturing', 'Canada', 'healthcare'],
  authors: [{ name: 'Asgard Pharmaceuticals Inc.' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://asgardpharma.ca',
    siteName: 'Asgard Pharma',
    title: 'Asgard Pharma | Fabless Biologics & Vaccine Manufacturing',
    description: 'Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asgard Pharma | Fabless Biologics & Vaccine Manufacturing',
    description: 'Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
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
