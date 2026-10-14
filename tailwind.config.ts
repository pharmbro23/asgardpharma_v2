import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F5F5F0',
        'bg-secondary': '#E0E0E0',
        'accent': '#A8A09A',
        'text-main': '#1A1A1A',
        'text-muted': '#666666',
        // Eir Count brand, matching the app: Western hemlock green and gold since 2026-10-01
        // (was #1F5442 / #B08D57 sampled from the first logo set); eir-deep is the app's camera-band colour
        'eir-green': '#457A65',
        'eir-gold': '#B08D56',
        'eir-deep': '#15221C',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        brand: ['var(--font-jost)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'logo': '0.2em',
        'nav': '0.15em',
        'cta': '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
