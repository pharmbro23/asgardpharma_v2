'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function SpotlightBackground({ children, className }: SpotlightBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Throttled mouse move handler using requestAnimationFrame
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return

    if (rafRef.current) return // Skip if a frame is already scheduled

    const target = e.currentTarget
    const clientX = e.clientX
    const clientY = e.clientY

    rafRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect()
      setMousePosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      })
      rafRef.current = null
    })
  }, [prefersReducedMotion])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  if (prefersReducedMotion) {
    return <div className={cn('relative', className)}>{children}</div>
  }

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight Effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 160, 154, 0.3), transparent 60%)`,
          }}
        />
      )}

      {children}
    </div>
  )
}
