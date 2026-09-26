import type { Metadata } from 'next'
import { ComingSoon } from '@/components/sections'
import { ventures } from '@/content/site-content'

const venture = ventures.find((v) => v.slug === 'pillai')!

export const metadata: Metadata = {
  title: venture.name,
  description: venture.description,
}

export default function Pillai() {
  return <ComingSoon venture={venture} />
}
