import type { NavItem } from '@/types'

// Navigation items
export const navItems: NavItem[] = [
  { label: 'Mission', href: '#overview', id: 'overview' },
  { label: 'History', href: '#history', id: 'history' },
  { label: 'Problem', href: '#problem', id: 'problem' },
  { label: 'Model', href: '#solution', id: 'solution' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

// Hero section content
export const heroContent = {
  eyebrow: 'Asgard Pharmaceuticals Inc. — Canada',
  headline: ['Fabless biologics', '& vaccine', 'manufacturing'],
  subtext: 'Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
  primaryCta: { text: 'Partner with us', href: '#contact' },
  secondaryCta: { text: 'Our model', href: '#solution' },
  stats: [
    { value: '1914', label: 'Connaught Labs founded as a public, not-for-profit vaccine maker' },
    { value: '$126M', label: 'Federal investment in the Biologics Manufacturing Centre' },
    { value: '1', label: 'Confirmed partner using that capacity today' },
  ],
}

// Overview/Mission section content
export const missionContent = {
  eyebrow: 'Our mission',
  statement: {
    prefix: 'To produce',
    accent: 'affordable pharmaceuticals',
    suffix: 'by licensing global innovations and utilizing Canadian biomanufacturing infrastructure.',
  },
  pillars: [
    {
      title: 'Affordability',
      description: 'We aim to challenge the dominance of US "Big Pharma" by reducing the burden of high cost vaccines & biologics on the Canadian taxpayer through leveraging domestic manufacturing capabilities.',
    },
    {
      title: 'Our Vision',
      description: "Become Canada's first agile, cost-efficient bridge for licensing, developing, and commercializing innovative foreign intellectual property in large molecule pharmaceuticals.",
    },
  ],
}

// History section content
export interface TimelineEntry {
  year: string
  title: string
  text: string
}

export const historyContent = {
  eyebrow: 'History',
  heading: {
    prefix: 'Canada was',
    accent: 'once a leader',
    suffix: 'in public vaccine manufacturing',
  },
  timeline: [
    {
      year: '1914',
      title: 'A public leader',
      text: 'Connaught Labs produces antitoxins as a public, not-for-profit institute tied to the University of Toronto.',
    },
    {
      year: '1990s',
      title: 'Sold off',
      text: 'Privatization and foreign acquisitions (Connaught → Sanofi, Armand Frappier → GSK) dismantle our domestic capacity.',
    },
    {
      year: '2020',
      title: 'Exposed',
      text: 'COVID-19 reveals that Canada can no longer produce its own vaccines when it matters most.',
    },
    {
      year: 'Today',
      title: 'Underutilized',
      text: 'The federal government invested $126 million in the Biologics Manufacturing Centre, which remains underutilized with only one confirmed partner.',
    },
  ] as TimelineEntry[],
  images: [
    { src: '/assets/images/history-connaught-vials.webp', blurKey: 'history-connaught-vials', alt: 'Connaught Laboratories vials' },
    { src: '/assets/images/history-scientist.webp', blurKey: 'history-scientist', alt: 'Scientist at Connaught Laboratories' },
    { src: '/assets/images/history-map.webp', blurKey: 'history-map', alt: 'Connaught Antitoxin Laboratories distribution map' },
    { src: '/assets/images/history-building.webp', blurKey: 'history-building', alt: 'Connaught Medical Research Laboratories campus' },
  ],
}

// Icon keys for problem and solution items
export type IconKey = 'cost' | 'sovereignty' | 'supply' | 'bottleneck' | 'rebuild' | 'capacity' | 'slash' | 'gouging'

export interface FeatureItem {
  iconKey: IconKey
  title: string
  description: string
}

// Problem section content
export const problemContent = {
  eyebrow: 'The problem',
  heading: 'Canadians pay more, and control less.',
  items: [
    {
      iconKey: 'cost',
      title: 'Cost',
      description: 'Even with public and private coverage, patients still pay high out-of-pocket costs, while taxpayers foot inflated bills driven by pharma pricing power.',
    },
    {
      iconKey: 'sovereignty',
      title: 'Fragile health sovereignty',
      description: 'Canada relies on foreign pharma giants, with little control over supply, pricing, or production.',
    },
    {
      iconKey: 'supply',
      title: 'Vulnerable supply chains',
      description: 'Pandemics and geopolitics have exposed our inability to produce critical medicines when it matters most.',
    },
    {
      iconKey: 'bottleneck',
      title: 'Innovation bottleneck',
      description: 'Cutting-edge therapies abroad are delayed or unavailable in Canada due to lack of domestic licensing and trial pathways.',
    },
  ] as FeatureItem[],
  feature: {
    image: '/assets/images/challenge.webp',
    alt: 'The Biologics Manufacturing Centre',
    value: '$126M',
    caption: 'of public manufacturing capacity, with one confirmed partner.',
  },
}

// Solution / model section content
export const modelContent = {
  eyebrow: 'Our model',
  heading: 'Fabless, by design.',
  intro: "Like a fabless chipmaker, we don't build factories. We bring proven science to Canada and put existing public infrastructure to work.",
  steps: [
    {
      number: '01',
      title: 'License',
      text: 'Late-phase global innovations, licensed for Canadian development and commercialization.',
    },
    {
      number: '02',
      title: 'Manufacture',
      text: 'Produced in idle domestic facilities like the Biologics Manufacturing Centre.',
    },
    {
      number: '03',
      title: 'Deliver',
      text: 'Affordable, locally made biologics for patients and healthcare systems.',
    },
  ],
  outcomes: [
    {
      iconKey: 'rebuild',
      title: 'Rebuild domestic biotech',
      description: 'License late-phase global innovations and invest in Canadian-led development and commercialization, building a resilient domestic pipeline.',
    },
    {
      iconKey: 'capacity',
      title: 'Deploy idle capacity',
      description: 'Facilities like the Biologics Manufacturing Centre (BMC) represent untapped national capacity.',
    },
    {
      iconKey: 'slash',
      title: 'Slash costs',
      description: 'Avoid traditional R&D overhead and global distribution markups to offer affordable, locally made biologics.',
    },
    {
      iconKey: 'gouging',
      title: 'Eliminate price gouging',
      description: 'Minimizing cost allows minimizing excessive markups to patients while still offering high-quality medicines.',
    },
  ] as FeatureItem[],
  image: { src: '/assets/images/solution.webp', alt: 'Pipette dispensing into sample vials in a laboratory' },
}

// Why Asgard section content
export interface Belief {
  text: string
  accentPhrase: string
}

export const whyAsgardContent = {
  eyebrow: 'What we believe',
  intro: 'If drug development is supported by taxpayer dollars, then the public deserves access to its rewards—not just private shareholders.',
  beliefs: [
    {
      text: 'We believe that public funding should yield public returns.',
      accentPhrase: 'public returns',
    },
    {
      text: 'We believe in a resilient, self-sufficient Canadian pharmaceutical system, free of foreign interference, ready for pandemics and supply chain shocks.',
      accentPhrase: 'resilient, self-sufficient',
    },
  ] as Belief[],
}

// Contact section content
export const contactContent = {
  eyebrow: 'Contact',
  heading: 'Join the mission',
  description: "Whether you hold promising IP, operate manufacturing capacity, or share our vision for Canadian health sovereignty, we'd love to hear from you.",
  email: 'info@asgardpharma.ca',
  ctaText: 'Contact Us',
}

// Footer content
export const footerContent = {
  company: 'Asgard Pharmaceuticals Inc.',
  tagline: 'Fabless biologics & vaccine manufacturing for Canada.',
}
