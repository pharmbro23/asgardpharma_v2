import Image from 'next/image'
import type { Venture } from '@/content/site-content'
import blurData from '@/lib/blur-data.json'
import { cn } from '@/lib/utils'

// Artwork shown at the top of each venture card
export function VentureVisual({ venture }: { venture: Venture }) {
  if (venture.slug === 'pharma') {
    return (
      <Image
        src="/assets/ventures/pharma/card.webp"
        alt=""
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        blurDataURL={blurData['pharma-card']}
      />
    )
  }

  if (venture.logo) {
    const { card } = venture.logo
    return (
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          card.background === 'dark' ? 'bg-text-main' : 'bg-bg-main'
        )}
      >
        <Image
          src={card.src}
          alt=""
          width={1400}
          height={400}
          className="w-3/5 h-auto transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    )
  }

  // Placeholder artwork until the venture has its own identity
  return (
    <div className="absolute inset-0 bg-bg-main flex items-center justify-center overflow-hidden">
      {[260, 200, 140, 80].map((size) => (
        <span
          key={size}
          className="absolute rounded-full border border-text-main/10 transition-transform duration-700 group-hover:scale-110"
          style={{ width: size, height: size }}
          aria-hidden="true"
        />
      ))}
      <span className="relative text-6xl font-bold tracking-tighter text-text-main/15">
        {venture.name.charAt(0)}
      </span>
    </div>
  )
}
