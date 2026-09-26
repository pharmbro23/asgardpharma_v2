# Asgard Pharma

**Fabless Biologics & Vaccine Manufacturing**

Asgard Pharmaceuticals Inc. is building a resilient Canadian pharmaceutical system by licensing global innovations and utilizing domestic biomanufacturing infrastructure.

[asgardpharma.ca](https://asgardpharma.ca)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library, Playwright |
| Deployment | Porkbun Static Hosting (GitHub Actions builds `main` → `deploy` branch) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run Next.js linter |
| `npm run test` | Run unit tests in watch mode |
| `npm run test:run` | Run unit tests once |
| `npm run test:e2e` | Run Playwright E2E tests |

## Project Structure

```
app/                  # Next.js App Router pages and layouts
components/
  layout/             # Header, Footer, SkipNav
  sections/           # Hero, Mission, History, Challenge, Solution, WhyAsgard, Contact
  features/           # FlipCard, SpotlightBackground
  ui/                 # Button, Card, Container, Section, Skeleton, AnimatedSection
content/              # Centralized site content (TypeScript)
lib/                  # Utilities, icon mappings, blur data
types/                # Shared TypeScript interfaces
public/assets/        # Images (WebP) and video
__tests__/            # Unit tests (Vitest)
e2e/                  # E2E tests (Playwright)
```

## Features

- Responsive design with mobile hamburger navigation
- Optimized video background with IntersectionObserver play/pause
- CSS-only flip card animations (no JavaScript timers)
- Scroll-based active navigation state
- WebP images with blur placeholders for instant loading
- Framer Motion scroll-reveal animations
- Reduced motion support (`prefers-reduced-motion`)
- Skip navigation link for accessibility
- Error boundaries with graceful fallback UI
- SEO metadata with Open Graph and Twitter cards

## License

Copyright Asgard Pharmaceuticals Inc. All rights reserved.
