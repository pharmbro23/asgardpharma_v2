import type { Metadata } from 'next'
import { EirPage } from '@/components/ventures/eir/EirPage'

export const metadata: Metadata = {
  title: 'Eir Count: Zero-cloud pill counting',
  description:
    'Eir Count is a pill counting aid for pharmacies. Its AI counts tablets and capsules entirely on your phone, so photos are never uploaded to be counted. CAD $5 a month plus tax, with a 14-day free trial for new subscribers.',
}

export default function Eir() {
  return <EirPage />
}
