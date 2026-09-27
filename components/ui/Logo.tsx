import { cn } from '@/lib/utils'

// Asgard "A" mark: an open A with a dot inside. Inherits colour from `currentColor`.
export function LogoMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 187 178" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M93.5 0 187 178h-44L93.5 76 44 178H0Z" />
      <circle cx="105" cy="138.5" r="13.3" />
    </svg>
  )
}

interface LogoProps {
  className?: string
  // Height of the mark in px; the wordmark scales with it
  size?: number
}

// Horizontal lockup: mark + ASGARD / PHARMACEUTICALS, both lines set to the same width
export function Logo({ className, size = 36 }: LogoProps) {
  const asgard = size * 0.62
  const pharma = asgard * 0.36

  return (
    <span className={cn('inline-flex items-center', className)} style={{ gap: size * 0.4 }}>
      <LogoMark className="flex-shrink-0" style={{ height: size, width: (size * 187) / 178 }} />
      <span className="flex flex-col font-brand leading-none" style={{ marginTop: size * 0.08 }}>
        <span
          className="font-normal uppercase"
          style={{ fontSize: asgard, letterSpacing: '0.2em', marginRight: '-0.2em' }}
        >
          Asgard
        </span>
        <span
          className="font-normal uppercase"
          style={{ fontSize: pharma, letterSpacing: '0.333em', marginRight: '-0.333em', marginTop: asgard * 0.22 }}
        >
          Pharmaceuticals
        </span>
      </span>
    </span>
  )
}
