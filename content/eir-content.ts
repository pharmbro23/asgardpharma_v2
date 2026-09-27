import type { NavItem } from '@/types'

// Eir product page (/eir/)

export const eirNavItems: NavItem[] = [
  { label: 'Why Eir', href: '#problem', id: 'problem' },
  { label: 'How it works', href: '#how', id: 'how' },
  { label: 'Privacy', href: '#privacy', id: 'privacy' },
  { label: 'Compare', href: '#compare', id: 'compare' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

const earlyAccessHref = 'mailto:info@asgardpharma.ca?subject=Eir%20early%20access'

export const eirHero = {
  eyebrow: 'Eir by Asgard Pharmaceuticals',
  headline: ['Private pill', 'counting, right', 'on your phone'],
  subtext:
    "Eir counts tablets and capsules with an AI model that runs entirely on your device. No uploads, no subscriptions, and no patient data leaving your pharmacy.",
  primaryCta: { text: 'Get early access', href: earlyAccessHref },
  secondaryCta: { text: 'How it works', href: '#how' },
  highlights: ['On-device AI', 'Works offline', 'One-time purchase', 'Built in Canada'],
}

export type EirIconKey =
  | 'confidential'
  | 'border'
  | 'cost'
  | 'camera'
  | 'chip'
  | 'verify'
  | 'upload'
  | 'offline'
  | 'optin'
  | 'canada'

export interface EirPoint {
  icon: EirIconKey
  title: string
  text: string
}

export const eirProblem = {
  eyebrow: 'The problem',
  heading: 'Most counting apps send your photos somewhere else.',
  intro:
    "Many pill-counting apps use your phone's camera, then upload every photo to a third-party AI service to do the counting. Images of your counting tray, and sometimes a patient's label caught in the corner of the frame, leave the pharmacy and are processed on servers you don't control, often outside Canada.",
  points: [
    {
      icon: 'confidential',
      title: 'Patient confidentiality',
      text: "One stray prescription label in the frame puts a patient's name and medication on someone else's server.",
    },
    {
      icon: 'border',
      title: 'Data leaves Canada',
      text: 'Large AI providers commonly process requests on servers abroad, outside the reach of Canadian privacy protections.',
    },
    {
      icon: 'cost',
      title: 'Costs that never stop',
      text: 'Monthly subscriptions and per-photo AI credits add up to hundreds of dollars a year, for every pharmacy.',
    },
  ] as EirPoint[],
}

export const eirHow = {
  eyebrow: 'How it works',
  heading: 'Three steps. Zero uploads.',
  steps: [
    {
      icon: 'camera',
      title: 'Pour and point',
      text: 'Spread tablets or capsules on a counting tray and point your phone camera at them.',
    },
    {
      icon: 'chip',
      title: 'Counted on your phone',
      text: "Eir's model, trained in-house by Asgard, identifies and counts every pill directly on the device.",
    },
    {
      icon: 'verify',
      title: 'Verify and dispense',
      text: 'Each detected pill is highlighted, so you can confirm the count at a glance before dispensing.',
    },
  ] as EirPoint[],
}

export const eirPrivacy = {
  eyebrow: 'Privacy by design',
  heading: 'Your photos stay on your phone. Full stop.',
  intro:
    "Eir was built so that patient privacy isn't a setting you have to find. The model lives on the device, so there is nothing to send.",
  points: [
    {
      icon: 'upload',
      title: 'Nothing is uploaded',
      text: 'Photos are processed on your device and are never sent to Asgard or to any third party.',
    },
    {
      icon: 'offline',
      title: 'Works offline',
      text: 'Counting needs no internet connection, so it keeps working in the back room, the basement or a dead zone.',
    },
    {
      icon: 'optin',
      title: 'Improvements are opt-in',
      text: 'You can choose to share photos to help train future models. It is off by default and you can turn it off at any time.',
    },
    {
      icon: 'canada',
      title: 'Built in Canada',
      text: 'Designed, trained and supported by Asgard Pharmaceuticals, with Canadian health-privacy law in mind.',
    },
  ] as EirPoint[],
}

export const eirComparison = {
  eyebrow: 'Compare',
  heading: 'Eir vs. cloud counting apps',
  columns: ['Typical cloud app', 'Eir'],
  rows: [
    { label: 'Where counting happens', cloud: 'Remote AI servers', eir: 'On your phone' },
    { label: 'Photos leave the device', cloud: 'Yes, with every count', eir: 'Never, unless you opt in' },
    { label: 'Internet required', cloud: 'Yes', eir: 'No' },
    { label: 'Where data is processed', cloud: 'Often outside Canada', eir: 'Inside your pharmacy' },
    { label: 'Pricing', cloud: 'Monthly subscription and AI credits', eir: 'One-time purchase' },
    { label: 'AI model', cloud: 'General-purpose, third-party', eir: 'Purpose-trained for pill counting' },
  ],
}

export const eirPricing = {
  eyebrow: 'Pricing',
  heading: 'Pay once. Count forever.',
  text: 'Eir is a one-time purchase. No subscriptions, no per-count credits and no surprise bills.',
  plan: {
    name: 'Eir',
    price: 'One-time purchase',
    note: 'Pricing announced at launch',
    includes: [
      'Unlimited counts',
      'Every count processed on your device',
      'No monthly fees or AI credits',
      'Optional, opt-in improvement program',
    ],
  },
  comparison: {
    value: '$360+',
    label: 'what a typical $30/month counting subscription costs every year',
  },
}

export const eirFaq = {
  eyebrow: 'FAQ',
  heading: 'Questions, answered',
  items: [
    {
      q: 'Does Eir send my photos anywhere?',
      a: 'No. Counting happens entirely on your phone. Photos are never sent to Asgard or any third party unless you choose to join the improvement program.',
    },
    {
      q: 'Do I need an internet connection?',
      a: 'No. The counting model runs on the device, so Eir works without Wi-Fi or mobile data.',
    },
    {
      q: 'What is the improvement program?',
      a: 'An optional way to help us train better models by sharing some of your counting photos with Asgard. It is off by default, you can leave at any time, and nothing is shared unless you turn it on.',
    },
    {
      q: 'Is Eir a subscription?',
      a: 'No. You pay once for the app. There are no monthly fees and no per-count AI credits.',
    },
    {
      q: 'Does Eir replace pharmacist verification?',
      a: 'No. Eir is a counting aid. It highlights every pill it detects so you can check the count quickly, but the pharmacist remains responsible for verifying each prescription.',
    },
    {
      q: 'Which phones will Eir support?',
      a: 'Supported devices will be announced at launch. Join the early access list and we will let you know.',
    },
  ],
}

export const eirCta = {
  heading: 'Be the first to count with Eir.',
  text: "Eir is in development. Join the early access list and we'll let you know when it's ready for your pharmacy.",
  cta: { text: 'Get early access', href: earlyAccessHref },
}
