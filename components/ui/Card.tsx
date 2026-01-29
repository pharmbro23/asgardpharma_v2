import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-8',
        'border border-text-main/5',
        'shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  )
}
