import {
  DollarSign,
  Shield,
  Link,
  Clock,
  FlaskConical,
  Building2,
  BadgeDollarSign,
  Ban,
} from 'lucide-react'
import type { IconKey } from '@/content/site-content'

const iconMap = {
  cost: DollarSign,
  sovereignty: Shield,
  supply: Link,
  bottleneck: Clock,
  rebuild: FlaskConical,
  capacity: Building2,
  slash: BadgeDollarSign,
  gouging: Ban,
} as const

export function getIcon(key: IconKey, className?: string) {
  const Icon = iconMap[key]
  return <Icon className={className} size={48} strokeWidth={1.5} />
}
