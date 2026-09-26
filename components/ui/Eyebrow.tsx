import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

// Small tracked label with a leading rule, used above section headings
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-4 text-xs font-bold uppercase tracking-nav text-accent',
        className
      )}
    >
      <span className="block w-8 h-px bg-current" aria-hidden="true" />
      {children}
    </p>
  )
}
