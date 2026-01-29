import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { FlipCard } from '@/components/features/FlipCard'
import { solutionCards } from '@/content/site-content'
import { getIcon } from '@/lib/icons'
import blurData from '@/lib/blur-data.json'

export function Solution() {
  return (
    <Section id="solution" variant="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image - Left side */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group order-2 lg:order-1">
          <Image
            src="/assets/images/solution.webp"
            alt="The Solution - Laboratory"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={blurData.solution}
          />
        </div>

        {/* Flip Cards Grid - Right side */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
          {solutionCards.map((card) => (
            <FlipCard
              key={card.iconKey}
              icon={getIcon(card.iconKey)}
              title={card.title}
              description={card.description}
              backDescription={card.backDescription}
              className="h-52 md:h-80"
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
