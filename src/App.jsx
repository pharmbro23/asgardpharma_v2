import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import VastSection from './components/VastSection';
import FlipCard from './components/FlipCard';
import InteractiveBackground from './components/InteractiveBackground';
import {
  navItems,
  overviewCards,
  historyContent,
  problemCards,
  solutionCards,
  whyAsgardCards,
  contactContent
} from './content/siteContent';
import { ICONS } from './components/icons';

function App() {
  return (
    <Layout navItems={navItems}>

      <Hero />

      {/* Overview - Full Width Text Style */}
      <VastSection
        id="overview"
        type="full"
        title="OUR MISSION"
        subtitle="To produce affordable pharmaceuticals by licensing global innovations and utilizing Canadian biomanufacturing infrastructure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {overviewCards.map((card, idx) => (
            <div key={idx} className="group p-8 bg-white border border-text-main/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-6 text-text-main group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </VastSection>

      {/* History - Moved Section */}
      <VastSection
        id="history"
        title="History"
        align="left"
        variant="dark"
        mediaContent={
          <div className="grid grid-cols-2 gap-4">
            {historyContent.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`History ${idx + 1}`}
                className="w-full h-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            ))}
          </div>
        }
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          {historyContent.headingParts.prefix} <span className="text-accent">{historyContent.headingParts.accent}</span> {historyContent.headingParts.suffix}
        </h3>
        <ul className="space-y-6">
          {historyContent.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="text-accent text-xl mt-1">➤</span>
              <p className="text-lg leading-relaxed text-white/90" dangerouslySetInnerHTML={{
                __html: bullet.highlights.reduce(
                  (text, highlight) => text.replace(highlight, `<span class="font-bold text-white">${highlight}</span>`),
                  bullet.text
                )
              }} />
            </li>
          ))}
        </ul>
      </VastSection>

      {/* Problem - Split Screen (Text Left, Image Right) */}
      <VastSection
        id="problem"
        title="THE CHALLENGE"
        image="/assets/images/challenge.png"
        align="left"
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problemCards.map((card, idx) => {
            const Icon = ICONS[card.iconKey];
            return (
              <FlipCard
                key={idx}
                className="h-64"
                peekOnScroll={idx === 0}
                autoPeek={true}
                staggerDelay={card.staggerDelay}
                icon={Icon && <Icon className="w-10 h-10" />}
                title={card.title}
                description={card.description}
                backDescription={card.backDescription}
              />
            );
          })}
        </div>
      </VastSection>

      {/* Solution - Split Screen (Image Left, Text Right) */}
      <VastSection
        id="solution"
        title="THE SOLUTION"
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
        align="right"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutionCards.map((card, idx) => {
            const Icon = ICONS[card.iconKey];
            return (
              <FlipCard
                key={idx}
                className="h-64"
                autoPeek={true}
                staggerDelay={card.staggerDelay}
                icon={Icon && <Icon className="w-10 h-10" />}
                title={card.title}
                description={card.description}
                backDescription={card.backDescription}
              />
            );
          })}
        </div>
      </VastSection>

      {/* Why Asgard - Static Cards */}
      <InteractiveBackground>
        <section className="py-32 px-8 bg-bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-8 text-center">
              WHY ASGARD
            </h2>
            <p className="text-xl text-center text-text-muted max-w-4xl mx-auto mb-16 leading-relaxed">
              If drug development is supported by taxpayer dollars, then the public deserves access to its rewards—not just private shareholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyAsgardCards.map((card, idx) => (
                <div key={idx} className="group p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col justify-center items-center">
                  <p className="text-xl md:text-2xl font-medium text-text-main leading-relaxed" dangerouslySetInnerHTML={{
                    __html: card.text.replace(card.accentPhrase, `<span class="font-bold text-accent">${card.accentPhrase}</span>`)
                  }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </InteractiveBackground>

      {/* Contact - Full Width Center */}
      <section id="contact" className="py-32 px-8 bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-8">
            {contactContent.heading}
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
          <a
            href={`mailto:${contactContent.email}`}
            className="inline-block px-12 py-6 border border-text-main text-text-main font-bold uppercase tracking-[0.2em] hover:bg-text-main hover:text-bg-main transition-all duration-300"
          >
            {contactContent.ctaText}
          </a>
        </div>
      </section>

    </Layout>
  );
}

export default App;
