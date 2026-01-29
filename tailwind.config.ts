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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
