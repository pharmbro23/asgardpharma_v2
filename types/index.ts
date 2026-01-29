import type { ReactNode } from 'react'

export interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export interface CardProps {
  title: string
  description: string
  className?: string
}

export interface FlipCardProps extends CardProps {
  icon: ReactNode
  backTitle?: string
  backDescription: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface ContentSection {
  id: string
  title: string
  subtitle?: string
  description?: string
}
