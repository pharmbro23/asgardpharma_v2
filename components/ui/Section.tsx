import { cn } from '@/lib/utils'
import { Container } from './Container'

type SectionVariant = 'light' | 'dark' | 'gray'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  variant?: SectionVariant
  fullWidth?: boolean
}

const variantStyles: Record<SectionVariant, string> = {
  light: 'bg-bg-main text-text-main',
  dark: 'bg-text-main text-bg-main',
  gray: 'bg-bg-secondary text-text-main',
}

export function Section({
  id,
  children,
  className,
  variant = 'light',
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-32',
        variantStyles[variant],
        className
      )}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  )
}
