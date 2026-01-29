import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-text-main text-bg-main border-text-main hover:bg-transparent hover:text-text-main',
  secondary: 'bg-bg-main text-text-main border-text-main hover:bg-text-main hover:text-bg-main',
  outline: 'bg-transparent text-text-main border-text-main hover:bg-text-main hover:text-bg-main',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'outline', className, children, href, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'px-12 py-6 border',
      'text-sm font-bold uppercase tracking-cta',
      'transition-colors duration-300',
      'focus:outline-none focus:ring-2 focus:ring-text-main focus:ring-offset-2',
      variantStyles[variant],
      className
    )

    if (href) {
      return (
        <a href={href} className={baseStyles}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
