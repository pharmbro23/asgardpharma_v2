import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { FlipCard } from '@/components/features/FlipCard'
import { problemCards } from '@/content/site-content'
import { getIcon } from '@/lib/icons'
import blurData from '@/lib/blur-data.json'

export function Challenge() {
  return (
    <Section id="problem" variant="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Flip Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {problemCards.map((card) => (
            <FlipCard
              key={card.iconKey}
              icon={getIcon(card.iconKey)}
              title={card.title}
              description={card.description}
              backDescription={card.backDescription}
              className="h-64 md:h-80"
            />
          ))}
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
          <Image
            src="/assets/images/challenge.webp"
            alt="The Challenge - BMC Building"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={blurData.challenge}
          />
        </div>
      </div>
    </Section>
  )
}
