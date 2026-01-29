import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-text-main/10',
        className
      )}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-text-main/5 shadow-sm">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  )
}

export function SectionSkeleton() {
  return (
    <div className="py-24 md:py-32 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Skeleton className="h-4 w-24 mx-auto mb-4" />
          <Skeleton className="h-8 w-2/3 mx-auto mb-2" />
          <Skeleton className="h-8 w-1/2 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  )
}
