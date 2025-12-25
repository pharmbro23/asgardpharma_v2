// Navigation items
export const navItems = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'History', href: '#history', id: 'history' },
    { label: 'Problem', href: '#problem', id: 'problem' },
    { label: 'Solution', href: '#solution', id: 'solution' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

// Overview section cards
export const overviewCards = [
    {
        title: 'Affordability',
        description: 'We aim to challenge the dominance of US "Big Pharma" by reducing the burden of high cost vaccines & biologics on the Canadian taxpayer through leveraging domestic manufacturing capabilities.',
    },
    {
        title: 'Our Vision',
        description: 'Become Canada\'s first agile, cost-efficient bridge for licensing, developing, and commercializing innovative foreign intellectual property in large molecule pharmaceuticals.',
    },
];

// History section content
export const historyContent = {
    headingParts: {
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
    ],
    images: [
        '/assets/images/history-connaught-vials.png',
        '/assets/images/history-scientist.png',
        '/assets/images/history-map.png',
        '/assets/images/history-building.png',
    ],
};

// Problem section flip cards
export const problemCards = [
    {
        iconKey: 'cost',
        title: 'Cost',
        description: 'High out-of-pocket costs',
        backDescription: 'Even with public and private coverage, patients still pay high out-of-pocket costs—while taxpayers foot inflated bills driven by pharma pricing power.',
        staggerDelay: 0,
    },
    {
        iconKey: 'sovereignty',
        title: 'Fragile Health Sovereignty',
        description: 'Reliance on foreign giants',
        backDescription: 'Canada relies on foreign pharma giants, with little control over supply, pricing, or production.',
        staggerDelay: 200,
    },
    {
        iconKey: 'supply',
        title: 'Vulnerable Supply Chains',
        description: 'Exposed inability to produce',
        backDescription: 'Pandemics and geopolitics have exposed our inability to produce critical medicines when it matters most.',
        staggerDelay: 400,
    },
    {
        iconKey: 'bottleneck',
        title: 'Innovation Bottleneck',
        description: 'Delayed therapies',
        backDescription: 'Cutting-edge therapies abroad are delayed or unavailable in Canada due to lack of domestic licensing and trial pathways.',
        staggerDelay: 600,
    },
];

// Solution section flip cards
export const solutionCards = [
    {
        iconKey: 'rebuild',
        title: 'Rebuild Domestic Biotech',
        description: 'Resilient domestic pipeline',
        backDescription: 'License late-phase global innovations and invest in Canadian-led development and commercialization, building a resilient domestic pipeline.',
        staggerDelay: 0,
    },
    {
        iconKey: 'capacity',
        title: 'Deploy Idle Capacity',
        description: 'Untapped national capacity',
        backDescription: 'Facilities like the Biologics Manufacturing Centre (BMC) represent untapped national capacity.',
        staggerDelay: 200,
    },
    {
        iconKey: 'slash',
        title: 'Slash Costs',
        description: 'Affordable biologics',
        backDescription: 'Avoid traditional R&D overhead and global distribution markups to offer affordable, locally made biologics for both patients and healthcare systems.',
        staggerDelay: 400,
    },
    {
        iconKey: 'gouging',
        title: 'Eliminate Price Gouging',
        description: 'Minimize excessive markups',
        backDescription: 'Minimizing cost allows minimizing excessive markups to patients while still offering high-quality medicines.',
        staggerDelay: 600,
    },
];

// Why Asgard section cards
export const whyAsgardCards = [
    {
        text: 'We believe that public funding should yield public returns.',
        accentPhrase: 'public returns',
    },
    {
        text: 'We believe in a resilient, self-sufficient Canadian pharmaceutical system, free of foreign interference, ready for pandemics and supply chain shocks.',
        accentPhrase: 'resilient, self-sufficient',
    },
];

// Contact section content
export const contactContent = {
    heading: 'JOIN THE MISSION',
    description: 'Interested in partnering with Asgard Pharma? We\'d love to hear from you.',
    email: 'info@asgardpharma.ca',
    ctaText: 'Contact Us',
};
