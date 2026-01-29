import type { NavItem } from '@/types'

// Navigation items
export const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'History', href: '#history', id: 'history' },
  { label: 'Problem', href: '#problem', id: 'problem' },
  { label: 'Solution', href: '#solution', id: 'solution' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

// Hero section content
export const heroContent = {
  headline: 'FABLESS BIOLOGICS & VACCINE MANUFACTURING',
  subtext: 'Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.',
  ctaText: 'Get in Touch',
  ctaHref: '#contact',
}

// Overview/Mission section content
export const missionContent = {
  title: 'OUR MISSION',
  subtitle: 'To produce affordable pharmaceuticals by licensing global innovations and utilizing Canadian biomanufacturing infrastructure.',
  cards: [
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
export interface HistoryBullet {
  text: string
  highlights: string[]
}

export const historyContent = {
  heading: {
    prefix: 'Canada was',
    accent: 'once a leader',
    suffix: 'in public vaccine manufacturing',
  },
  bullets: [
    {
      text: 'In 1914, Connaught Labs produced antitoxins as a public, not-for-profit institute tied to the University of Toronto.',
      highlights: ['public, not-for-profit institute'],
    },
    {
      text: 'But by the 1990s, privatization and foreign acquisitions (Connaught → Sanofi, Armand Frappier → GSK) dismantled our domestic capacity, leaving Canada exposed during COVID 19.',
      highlights: ['privatization and foreign acquisitions', 'exposed'],
    },
    {
      text: 'In response, the federal government invested $126 million in the Biologics Manufacturing Centre (BMC) — which today remains underutilized, with only one confirmed partner.',
      highlights: ['remains underutilized'],
    },
  ] as HistoryBullet[],
  images: [
    '/assets/images/history-connaught-vials.webp',
    '/assets/images/history-scientist.webp',
    '/assets/images/history-map.webp',
    '/assets/images/history-building.webp',
  ],
}

// Icon keys for flip cards
export type IconKey = 'cost' | 'sovereignty' | 'supply' | 'bottleneck' | 'rebuild' | 'capacity' | 'slash' | 'gouging'

export interface FlipCardData {
  iconKey: IconKey
  title: string
  description: string
  backDescription: string
}

// Problem/Challenge section flip cards
export const problemCards: FlipCardData[] = [
  {
    iconKey: 'cost',
    title: 'Cost',
    description: 'High out-of-pocket costs',
    backDescription: 'Even with public and private coverage, patients still pay high out-of-pocket costs—while taxpayers foot inflated bills driven by pharma pricing power.',
  },
  {
    iconKey: 'sovereignty',
    title: 'Fragile Health Sovereignty',
    description: 'Reliance on foreign giants',
    backDescription: 'Canada relies on foreign pharma giants, with little control over supply, pricing, or production.',
  },
  {
    iconKey: 'supply',
    title: 'Vulnerable Supply Chains',
    description: 'Exposed inability to produce',
    backDescription: 'Pandemics and geopolitics have exposed our inability to produce critical medicines when it matters most.',
  },
  {
    iconKey: 'bottleneck',
    title: 'Innovation Bottleneck',
    description: 'Delayed therapies',
    backDescription: 'Cutting-edge therapies abroad are delayed or unavailable in Canada due to lack of domestic licensing and trial pathways.',
  },
]

// Solution section flip cards
export const solutionCards: FlipCardData[] = [
  {
    iconKey: 'rebuild',
    title: 'Rebuild Domestic Biotech',
    description: 'Resilient domestic pipeline',
    backDescription: 'License late-phase global innovations and invest in Canadian-led development and commercialization, building a resilient domestic pipeline.',
  },
  {
    iconKey: 'capacity',
    title: 'Deploy Idle Capacity',
    description: 'Untapped national capacity',
    backDescription: 'Facilities like the Biologics Manufacturing Centre (BMC) represent untapped national capacity.',
  },
  {
    iconKey: 'slash',
    title: 'Slash Costs',
    description: 'Affordable biologics',
    backDescription: 'Avoid traditional R&D overhead and global distribution markups to offer affordable, locally made biologics for both patients and healthcare systems.',
  },
  {
    iconKey: 'gouging',
    title: 'Eliminate Price Gouging',
    description: 'Minimize excessive markups',
    backDescription: 'Minimizing cost allows minimizing excessive markups to patients while still offering high-quality medicines.',
  },
]

// Why Asgard section content
export interface WhyAsgardCard {
  text: string
  accentPhrase: string
}

export const whyAsgardContent = {
  intro: "If drug development is supported by taxpayer dollars, then the public deserves access to its rewards—not just private shareholders.",
  cards: [
    {
      text: 'We believe that public funding should yield public returns.',
      accentPhrase: 'public returns',
    },
    {
      text: 'We believe in a resilient, self-sufficient Canadian pharmaceutical system, free of foreign interference, ready for pandemics and supply chain shocks.',
      accentPhrase: 'resilient, self-sufficient',
    },
  ] as WhyAsgardCard[],
}

// Contact section content
export const contactContent = {
  heading: 'JOIN THE MISSION',
  description: "Interested in partnering with Asgard Pharma? We'd love to hear from you.",
  email: 'info@asgardpharma.ca',
  ctaText: 'Contact Us',
}

// Footer content
export const footerContent = {
  company: 'Asgard Pharmaceuticals Inc.',
  socialLinks: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
  ],
}
