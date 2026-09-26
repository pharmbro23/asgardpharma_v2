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
    // Stylized probability chart, evoking a prediction market
    return (
      <div className="absolute inset-0 bg-text-main">
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#F5F5F0" strokeOpacity="0.08" />
          ))}
          <path
            d="M0 230 L40 215 L80 222 L120 190 L160 198 L200 160 L240 170 L280 120 L320 128 L360 92 L400 84 L400 300 L0 300 Z"
            fill="#A8A09A"
            fillOpacity="0.12"
          />
          <path
            d="M0 230 L40 215 L80 222 L120 190 L160 198 L200 160 L240 170 L280 120 L320 128 L360 92 L400 84"
            fill="none"
            stroke="#A8A09A"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="absolute top-6 right-6 text-right">
          <p className="text-4xl font-bold tracking-tighter text-bg-main">72%</p>
          <p className="text-[10px] font-bold uppercase tracking-nav text-bg-main/50">Sample market</p>
        </div>
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
