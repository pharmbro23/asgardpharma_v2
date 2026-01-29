'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main px-8">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-text-main mb-4">
          Something went wrong
        </h1>
        <p className="text-text-muted mb-8">
          We apologize for the inconvenience. Please try again or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button href="mailto:info@asgardpharma.ca" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
