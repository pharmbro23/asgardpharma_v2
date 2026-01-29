'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#F5F5F0] px-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Something went wrong
          </h1>
          <p className="text-[#666666] mb-8">
            We apologize for the inconvenience. Please try again.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-12 py-6 border border-[#1A1A1A] text-sm font-bold uppercase tracking-[0.2em] bg-[#1A1A1A] text-[#F5F5F0] hover:bg-transparent hover:text-[#1A1A1A] transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
