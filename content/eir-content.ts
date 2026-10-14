import type { NavItem } from '@/types'

// Eir product page (/eir/)

export const eirNavItems: NavItem[] = [
  { label: 'Why Eir', href: '#problem', id: 'problem' },
  { label: 'How it works', href: '#how', id: 'how' },
  { label: 'Privacy', href: '#privacy', id: 'privacy' },
  { label: 'Compare', href: '#compare', id: 'compare' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

const earlyAccessHref = 'mailto:info@asgardpharma.ca?subject=Eir%20Count%20early%20access'

export const eirHero = {
  eyebrow: 'Eir Count by Asgard Pharmaceuticals',
  headline: ['Zero-cloud', 'pill counting', 'on your phone'],
  subtext:
    'Eir Count counts tablets and capsules with AI that runs entirely on your phone. Photos stay on your phone, so a patient label that slips into the frame stays in your pharmacy.',
  primaryCta: { text: 'Get early access', href: earlyAccessHref },
  secondaryCta: { text: 'How it works', href: '#how' },
  highlights: ['Zero-cloud AI', 'Works offline', '14 days free', 'Built in Canada'],
}

export type EirIconKey =
  | 'confidential'
  | 'border'
  | 'exposed'
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
  heading: 'Cloud counting apps send your photos out the door.',
  intro:
    "Many pill-counting apps upload every photo of your counting tray to a remote AI server to do the counting. Pharmacy counters are busy: a vial label, a bag tag, a hard copy or a screen ends up in the frame. With a cloud app, that patient information leaves your pharmacy with the photo, and nobody has to make a mistake for it to happen.",
  points: [
    {
      icon: 'confidential',
      title: 'One label in the frame',
      text: "A patient's name, Rx number or medication caught in the corner of a photo is personal health information, now sitting on someone else's server.",
    },
    {
      icon: 'border',
      title: 'Data leaves Canada',
      text: 'Large AI providers commonly process requests on servers abroad, outside the reach of Canadian privacy protections.',
    },
    {
      icon: 'exposed',
      title: "You can't unsend a photo",
      text: "Once it's uploaded, you can't see where it's kept, who can open it, how long it stays, or whether it trains someone else's AI. Your pharmacy is still accountable for it.",
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
      text: "Eir Count's AI, trained in-house by Asgard, finds and counts every pill on the phone itself. No upload, no server, no waiting on Wi-Fi.",
    },
    {
      icon: 'verify',
      title: 'Verify and dispense',
      text: 'Each detected pill is highlighted, so you can confirm the count at a glance before dispensing.',
    },
  ] as EirPoint[],
}

export const eirPrivacy = {
  eyebrow: 'Edge AI. Zero cloud.',
  heading: 'What happens on the counter stays on the counter.',
  intro:
    "Eir Count runs its AI at the edge: on the phone in your hand, not in a data centre. Counting has no upload step to secure, so a label that slips into the frame stays in the pharmacy. Privacy isn't a setting you have to find. It's how Eir Count is built.",
  points: [
    {
      icon: 'upload',
      title: 'Nothing is uploaded',
      text: 'Photos are counted and kept on your phone. Nothing leaves the phone unless you choose to share it.',
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
  heading: 'Eir Count vs. cloud counting apps',
  columns: ['Typical cloud app', 'Eir Count'],
  rows: [
    { label: 'Where counting happens', cloud: 'Remote AI servers', eir: 'On your phone' },
    { label: 'Photos leave the device', cloud: 'Yes, with every count', eir: 'Only if you choose to share' },
    { label: 'A patient label caught in the frame', cloud: 'Uploaded with the photo', eir: 'Stays on your phone' },
    { label: 'Internet required', cloud: 'Yes', eir: 'No' },
    { label: 'Where data is processed', cloud: 'Often outside Canada', eir: 'Inside your pharmacy' },
    { label: 'Pricing', cloud: 'Monthly subscription plus AI credits', eir: '$5 a month, unlimited counts' },
    { label: 'AI model', cloud: 'General-purpose, third-party', eir: 'Purpose-trained for pill counting' },
  ],
}

export const eirPricing = {
  eyebrow: 'Pricing',
  heading: 'Free for 14 days. Then $5 a month.',
  text: 'One simple plan with unlimited counts and every feature. No per-count credits, no surprise bills, and you can cancel any time. Running more than one store? Pharmacy and group licences are priced per store.',
  plan: {
    name: 'Eir Count',
    price: '$5',
    period: '/month',
    note: 'After a 14-day free trial',
    includes: [
      '14 days free to try',
      'Unlimited counts',
      'Every count processed on your phone',
      'No per-count AI credits',
      'Cancel any time',
    ],
  },
  comparison: {
    value: '$360+',
    label: 'a year for a typical $30/month cloud counting subscription. Eir Count is $60 a year.',
  },
}

export const eirFaq = {
  eyebrow: 'FAQ',
  heading: 'Questions, answered',
  items: [
    {
      q: 'Does Eir Count send my photos anywhere?',
      a: 'Not to count them. Counting happens entirely on your phone, and nothing leaves it unless you choose to share it, for example by emailing an export or joining the improvement program.',
    },
    {
      q: 'What if a patient label ends up in the photo?',
      a: "It stays on your phone. Eir Count never uploads photos to count them, so whatever is in the frame stays in your pharmacy. You also choose how long photos are kept on the phone, from two weeks to forever.",
    },
    {
      q: 'Do I need an internet connection?',
      a: 'No. The counting model runs on the device, so Eir Count works without Wi-Fi or mobile data.',
    },
    {
      q: 'What is the improvement program?',
      a: 'An optional way to help us train better models by sharing some of your counting photos with Asgard. It is off by default, you can leave at any time, and nothing is shared unless you turn it on.',
    },
    {
      q: 'How much does Eir Count cost?',
      a: '$5 a month after a 14-day free trial, with unlimited counts and no per-count AI credits. You can cancel any time.',
    },
    {
      q: 'Do you offer pharmacy or group pricing?',
      a: "Yes. Pharmacy licences are priced per store, with discounts for groups. Email info@asgardpharma.ca and we'll put a quote together.",
    },
    {
      q: 'Does Eir Count replace pharmacist verification?',
      a: 'No. Eir Count is a counting aid. It highlights every pill it detects so you can check the count quickly, but the pharmacist remains responsible for verifying each prescription.',
    },
    {
      q: 'Which phones will Eir Count support?',
      a: 'Supported devices will be announced at launch. Join the early access list and we will let you know.',
    },
  ],
}

export const eirCta = {
  heading: 'Be the first to count with Eir.',
  text: "Eir Count is in development. Join the early access list and we'll let you know when it's ready for your pharmacy.",
  cta: { text: 'Get early access', href: earlyAccessHref },
}
