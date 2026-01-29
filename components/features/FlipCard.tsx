'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface FlipCardProps {
  icon: React.ReactNode
  title: string
  description: string
  backTitle?: string
  backDescription: string
  className?: string
}

export function FlipCard({
  icon,
  title,
  description,
  backTitle,
  backDescription,
  className,
}: FlipCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Reduced motion: show both sides stacked
  if (prefersReducedMotion) {
    return (
      <div className={cn('w-full', className)}>
        <div className="bg-white rounded-xl p-8 border border-black/5 shadow-lg">
          <div className="mb-4 text-accent">{icon}</div>
          <h3 className="text-xl font-bold text-text-main tracking-tight mb-2 uppercase">
            {title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            {description}
          </p>
          <hr className="border-text-main/10 my-4" />
          <p className="text-text-main/80 text-sm leading-relaxed">
            {backDescription}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('group [perspective:1000px] w-full cursor-pointer', className)}>
      <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center border border-black/5 shadow-lg">
          <div className="mb-6 text-accent">{icon}</div>
          <h3 className="text-xl md:text-2xl font-bold text-text-main tracking-tight mb-4 uppercase">
            {title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-text-main rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 uppercase">
            {backTitle || title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {backDescription}
          </p>
          <div className="mt-6 w-12 h-1 bg-accent rounded-full" />
        </div>
      </div>
    </div>
  )
}
