import type { Metadata } from 'next'
import { EirPage } from '@/components/ventures/eir/EirPage'

export const metadata: Metadata = {
  title: 'Eir Count: Zero-cloud pill counting',
  description:
    'Eir Count counts tablets and capsules with AI that runs entirely on your phone. Photos stay on your phone, so patient information stays in your pharmacy. $5 a month after a 14-day free trial.',
}

export default function Eir() {
  return <EirPage />
}
