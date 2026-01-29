export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-text-main focus:font-bold focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
    >
      Skip to main content
    </a>
  )
}
