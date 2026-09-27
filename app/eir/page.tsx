import type { Metadata } from 'next'
import { ComingSoon } from '@/components/sections'
import { ventures } from '@/content/site-content'

const venture = ventures.find((v) => v.slug === 'eir')!

export const metadata: Metadata = {
  title: venture.name,
  description: venture.description,
}

export default function Eir() {
  return <ComingSoon venture={venture} />
}
