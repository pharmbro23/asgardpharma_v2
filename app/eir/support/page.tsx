import { EirSupportPage } from '@/components/ventures/eir/EirSupportPage'
import { eirInfoMetadata } from '@/components/ventures/eir/EirLegalPage'
import { eirSupport } from '@/content/eir-support'
import { eirSupportIndexable } from '@/content/eir-legal'

// Text: content/eir-support.ts
export const metadata = eirInfoMetadata({
  slug: 'support',
  lang: 'en',
  title: eirSupport.en.metaTitle,
  description: eirSupport.en.description,
  indexable: eirSupportIndexable,
})

export default function EirSupportEn() {
  return <EirSupportPage lang="en" />
}
