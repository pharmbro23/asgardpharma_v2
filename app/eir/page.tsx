import type { Metadata } from 'next'
import { EirPage } from '@/components/ventures/eir/EirPage'

export const metadata: Metadata = {
  title: 'Eir: Private pill counting',
  description:
    'Eir counts tablets and capsules with an AI model that runs entirely on your phone. No uploads, no subscriptions, and no patient data leaving your pharmacy.',
}

export default function Eir() {
  return <EirPage />
}
