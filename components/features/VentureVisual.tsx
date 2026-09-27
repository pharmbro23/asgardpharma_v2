import Image from 'next/image'
import blurData from '@/lib/blur-data.json'

// Artwork shown at the top of each venture card
export function VentureVisual({ slug }: { slug: string }) {
  if (slug === 'pharma') {
    return (
      <Image
        src="/assets/images/solution.webp"
        alt=""
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        blurDataURL={blurData.solution}
      />
    )
  }

  if (slug === 'endpoint') {
    return (
      <div className="absolute inset-0 bg-text-main flex items-center justify-center">
        <Image
          src="/assets/ventures/endpoint/wordmark-light.png"
          alt=""
          width={1306}
          height={314}
          className="w-3/5 h-auto transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    )
  }

  // Placeholder artwork until the product is announced
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
      <span className="relative text-6xl font-bold tracking-tighter text-text-main/15">P</span>
    </div>
  )
}
