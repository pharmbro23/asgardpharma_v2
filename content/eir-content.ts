import type { NavItem } from '@/types'

// Eir product page (/eir/)

// Absolute links, so they also work from the policy and support pages under /eir/
export const eirNavItems: NavItem[] = [
  { label: 'Why Eir', href: '/eir/#problem', id: 'problem' },
  { label: 'How it works', href: '/eir/#how', id: 'how' },
  { label: 'Privacy', href: '/eir/#privacy', id: 'privacy' },
  { label: 'Compare', href: '/eir/#compare', id: 'compare' },
  { label: 'FAQ', href: '/eir/#faq', id: 'faq' },
]

const earlyAccessHref = 'mailto:info@asgardpharma.ca?subject=Eir%20Count%20early%20access'

export const eirHero = {
  eyebrow: 'Eir Count by Asgard Pharmaceuticals',
  headline: ['Zero-cloud', 'pill counting', 'on your phone'],
  subtext:
    'Eir Count counts tablets and capsules with AI that runs entirely on your phone. No photo is ever uploaded to be counted, so even a label that slips into the frame stays in your pharmacy. Eir counts; you check.',
  primaryCta: { text: 'Get early access', href: earlyAccessHref },
  secondaryCta: { text: 'How it works', href: '#how' },
  highlights: ['Zero-cloud counting', 'Counts offline', '14-day free trial', 'Built in Canada'],
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
  | 'team'
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
      text: 'Spread one medication on a counting tray, keep labels out of the frame, and hold your phone above it.',
    },
    {
      icon: 'chip',
      title: 'Counted on your phone',
      text: "Eir Count's AI estimates how many tablets or capsules are on the tray, on the phone itself. No upload, no server, no waiting on Wi-Fi.",
    },
    {
      icon: 'verify',
      title: 'Verify and dispense',
      text: 'Each pill Eir counted is marked with a dot, so you can check the count against the tray. Eir Count is a counting aid: you verify every count before dispensing.',
    },
  ] as EirPoint[],
}

export const eirPrivacy = {
  eyebrow: 'Edge AI. Zero cloud.',
  heading: 'What happens on the counter stays on the counter.',
  intro:
    "Eir Count runs its AI at the edge: on the phone in your hand, not in a data centre. Counting has no upload step to secure, so a label that slips into the frame stays in the pharmacy. Privacy isn't a setting you have to find. It's how Eir Count is built.",
  diagram: {
    phone: { title: 'Your phone', text: 'Photo, model and count' },
    cloud: { title: 'Cloud servers', text: 'Not used for counting' },
  },
  points: [
    {
      icon: 'upload',
      title: 'No upload to count',
      text: 'Photos are counted and kept on your phone. They leave it only if you share or export them, and you choose how long they are kept.',
    },
    {
      icon: 'offline',
      title: 'Counts offline',
      text: 'Counting needs no internet connection, so it keeps working in the back room or a dead zone. Your subscription is re-checked when the phone is back online.',
    },
    {
      icon: 'team',
      title: 'Shared only with your team',
      text: "Optional pharmacy sharing sends counts only to your own pharmacy's devices, over the store Wi-Fi, encrypted with your pharmacy's own key. No accounts, no server in between.",
    },
    {
      icon: 'canada',
      title: 'Built in Canada',
      text: 'Designed, developed and supported by Asgard Pharmaceuticals in Canada, with Canadian health-privacy law in mind.',
    },
  ] as EirPoint[],
  finePrint:
    "Photos and patient details stay in your pharmacy unless you choose to share them. The app does go online to check your subscription with Apple or Google, and on Android, Google's barcode scanner sends Google technical usage data (never your photos or barcodes).",
  finePrintLink: { text: 'Read the privacy policy', href: '/eir/privacy/' },
}

export const eirComparison = {
  eyebrow: 'Compare',
  heading: 'Eir Count vs. cloud counting apps',
  columns: ['Typical cloud app', 'Eir Count'],
  rows: [
    { label: 'Where counting happens', cloud: 'Remote AI servers', eir: 'On your phone' },
    { label: 'Photos uploaded to count them', cloud: 'Yes, with every count', eir: 'Never' },
    { label: 'A patient label caught in the frame', cloud: 'Uploaded with the photo', eir: 'Stays in your pharmacy' },
    { label: 'Internet needed to count', cloud: 'Yes', eir: 'No' },
    { label: 'Where photos are processed', cloud: 'Often outside Canada', eir: 'On your phone, in your pharmacy' },
    { label: 'Pricing', cloud: 'Monthly subscription plus AI credits', eir: 'CAD $5 a month, unlimited counts' },
    { label: 'AI model', cloud: 'General-purpose, third-party', eir: 'Purpose-trained for pill counting' },
  ],
}

export const eirPricing = {
  eyebrow: 'Pricing',
  heading: 'Free for 14 days. Then $5 a month.',
  text: 'One simple plan with unlimited counts and every feature, billed through the App Store or Google Play. No per-count credits. It renews automatically each month until you cancel, and you can cancel any time in your App Store or Google Play account.',
  plan: {
    name: 'Eir Count',
    currency: 'CAD',
    price: '$5',
    period: '/month',
    note: 'Plus applicable taxes',
    includes: [
      '14-day free trial for new subscribers',
      'Unlimited counts',
      'Every count processed on your phone',
      'No per-count AI credits',
      'Cancel any time in the App Store or Google Play',
    ],
    finePrint:
      'New subscribers get one 14-day free trial. When it ends, CAD $5.00 a month plus applicable taxes is charged to your App Store or Google Play account and renews monthly until you cancel. Deleting the app does not cancel the subscription.',
  },
  licences: {
    eyebrow: 'Pharmacies and groups',
    value: 'Priced per store',
    text: 'Running more than one pharmacy? Pharmacy and group licences are priced per store. Email us and we will put a quote together.',
    cta: { text: 'Ask for a quote', href: 'mailto:info@asgardpharma.ca?subject=Eir%20Count%20pharmacy%20licence' },
  },
}

export const eirFaq = {
  eyebrow: 'FAQ',
  heading: 'Questions, answered',
  items: [
    {
      q: 'Does Eir Count send my photos anywhere?',
      a: "Not to count them. Counting happens entirely on your phone. A photo leaves it only when you choose: when you share a count, export an audit report or email support, or when pharmacy sharing sends counts to your own pharmacy's devices over the store Wi-Fi, encrypted with your pharmacy's key.",
    },
    {
      q: 'Does the app send anything else?',
      a: "A little, and never your photos or patient details. It checks your subscription with Apple or Google. On Android, the barcode scanner is a Google component (ML Kit) that sends Google technical usage data about the scanner, never your photos or barcodes. Eir Count has no ads, no tracking and no accounts.",
      link: { text: 'Read the privacy policy', href: '/eir/privacy/' },
    },
    {
      q: 'What if a patient label ends up in the photo?',
      a: "It isn't uploaded. Eir Count never sends photos anywhere to count them, so whatever is in the frame stays in your pharmacy. Still, keep prescription labels and anything that identifies a patient out of the frame, because a photo goes wherever you choose to share or export it. You also choose how long photos are kept on the phone, from two weeks to forever.",
    },
    {
      q: 'Do I need an internet connection?',
      a: 'Not to count. The counting model runs on the device, so counting works without Wi-Fi or mobile data. The app checks your subscription with the App Store or Google Play whenever the phone is online; if a phone stays offline for several days, it will ask you to connect so counting can continue.',
    },
    {
      q: 'How much does Eir Count cost?',
      a: 'CAD $5 a month plus applicable taxes, with unlimited counts and no per-count AI credits. New subscribers get a 14-day free trial. The subscription renews automatically each month until you cancel, which you can do any time in your App Store or Google Play account.',
    },
    {
      q: 'Do you offer pharmacy or group pricing?',
      a: "Yes. Pharmacy and group licences are priced per store, with discounts for groups. Email info@asgardpharma.ca and we'll put a quote together.",
    },
    {
      q: 'Does Eir Count replace pharmacist verification?',
      a: 'No. Eir Count is a counting aid. It marks each pill it counted so you can check the count against the tray, and the pharmacist verifies every count before dispensing.',
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
