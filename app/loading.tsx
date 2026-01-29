import { SectionSkeleton } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="h-screen bg-bg-secondary animate-pulse" />

      {/* Content sections skeleton */}
      <SectionSkeleton />
      <SectionSkeleton />
    </div>
  )
}
