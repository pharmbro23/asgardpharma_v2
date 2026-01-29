import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-text-main mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
          Page Not Found
        </h2>
        <p className="text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
