import type { Metadata } from 'next'
import {
  Hero,
  HeroStats,
  Mission,
  History,
  Challenge,
  Solution,
  WhyAsgard,
  Contact,
} from '@/components/sections'
import { heroContent } from '@/content/site-content'

export const metadata: Metadata = {
  title: 'Pharmaceutical Development',
  description: 'Fabless biologics & vaccine manufacturing: producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
}

export default function PharmaceuticalDevelopment() {
  return (
    <>
      {/* Background video removed for now; to restore it, add
          video={{ src: '/assets/video/background.mp4', tone: 'mono' }} */}
      <Hero content={heroContent}>
        <HeroStats stats={heroContent.stats} />
      </Hero>
      <Mission />
      <History />
      <Challenge />
      <Solution />
      <WhyAsgard />
      <Contact />
    </>
  )
}
