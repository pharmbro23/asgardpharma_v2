import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import VastSection from './components/VastSection';
import FlipCard from './components/FlipCard';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <Layout>
      <Hero />

      {/* Overview - Full Width Text Style */}
      <VastSection
        id="overview"
        type="full"
        title="THE MISSION"
        subtitle="To produce affordable pharmaceuticals by licensing global innovations and utilizing Canadian biomanufacturing infrastructure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1: Affordability */}
          <div className="group p-8 bg-white border border-text-main/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold mb-6 text-text-main group-hover:text-accent transition-colors">
              Affordability
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              We aim to challenge the dominance of US "Big Pharma" by reducing the burden of high cost vaccines & biologics on the Canadian taxpayer through leveraging domestic manufacturing capabilities.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="group p-8 bg-text-main border border-text-main rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold mb-6 text-bg-main">
              Our Vision
            </h3>
            <p className="text-lg text-bg-main/80 leading-relaxed">
              Become Canada's first agile, cost-efficient bridge for licensing, developing, and commercializing innovative foreign intellectual property in large molecule pharmaceuticals.
            </p>
          </div>
        </div>
      </VastSection>

      {/* Problem - Split Screen (Text Left, Image Right) */}
      <VastSection
        id="problem"
        title="THE CHALLENGE"
        image="/assets/images/challenge.png"
        align="left"
        className="bg-white"
      >
        <p>
          The global pharmaceutical industry faces a significant challenge: <strong>Accessibility</strong>. Life-saving biologics and vaccines are often too expensive or unavailable in many regions due to supply chain constraints and high manufacturing costs.
        </p>
        <p>
          Traditional manufacturing requires massive capital investment (CAPEX), leading to higher drug prices and slower time-to-market for critical treatments. This bottleneck prevents innovation from scaling effectively.
        </p>
        <ul className="space-y-4 mt-8 border-t border-text-muted/20 pt-8">
          <li className="flex items-center gap-4">
            <span className="text-accent text-xl">â— </span>
            <span className="text-text-main font-bold tracking-wider uppercase text-sm">High Capital Expenditure</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-accent text-xl">â— </span>
            <span className="text-text-main font-bold tracking-wider uppercase text-sm">Complex Supply Chains</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-accent text-xl">â— </span>
            <span className="text-text-main font-bold tracking-wider uppercase text-sm">Limited Capacity</span>
          </li>
        </ul>
      </VastSection>

      {/* Solution - Split Screen (Image Left, Text Right) */}
      <VastSection
        id="solution"
        title="THE SOLUTION"
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
        align="right"
      >
        <p>
          Asgard Pharma operates on a <strong>Fabless Model</strong>. By decoupling manufacturing from product ownership, we eliminate the need for massive facility investments.
        </p>
        <p>
          We partner with existing Canadian biomanufacturing facilities that have excess capacity. This allows us to:
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div>
            <h4 className="text-text-main font-bold uppercase tracking-widest mb-2">Agility</h4>
            <p className="text-sm">Rapid deployment of manufacturing processes without the burden of facility maintenance.</p>
          </div>
          <div>
            <h4 className="text-text-main font-bold uppercase tracking-widest mb-2">Cost-Efficiency</h4>
            <p className="text-sm">Significantly reduced overhead costs passed down to patients and healthcare systems.</p>
          </div>
          <div>
            <h4 className="text-text-main font-bold uppercase tracking-widest mb-2">Global Reach</h4>
            <p className="text-sm">Leveraging international innovation to solve local health challenges.</p>
          </div>
        </div>
      </VastSection>

      {/* Competitive Advantages - Flip Cards */}
      <InteractiveBackground>
        <section className="py-32 px-8 bg-bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-16 text-center">
              WHY ASGARD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FlipCard
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Agility"
                description="Rapid deployment without facility ownership"
                backDescription="We can pivot quickly to manufacture new biologics and vaccines without the burden of maintaining expensive infrastructure. Our fabless model allows us to respond to market needs in weeks, not years."
              />
              <FlipCard
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Cost-Efficiency"
                description="Reduced overhead passed to patients"
                backDescription="By eliminating capital expenditure on facilities, we reduce production costs by up to 40%. These savings translate directly into more affordable pharmaceuticals for patients and healthcare systems."
              />
              <FlipCard
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Global Reach"
                description="International innovation, local solutions"
                backDescription="We license cutting-edge biologics from around the world and manufacture them locally using Canadian infrastructure. This ensures global quality standards while supporting domestic capacity."
              />
            </div>
          </div>
        </section>
      </InteractiveBackground>

      {/* History - Split Screen with Custom Grid */}
      <VastSection
        id="history"
        title="HISTORY"
        align="left"
        className="bg-white"
        mediaContent={
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" alt="Vintage Lab" className="w-full h-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="https://images.unsplash.com/photo-1565619624098-e659884d2c2b?q=80&w=2070&auto=format&fit=crop" alt="Factory" className="w-full h-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop" alt="Vials" className="w-full h-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Building" className="w-full h-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        }
      >
        <h3 className="text-xl font-bold mb-6 text-text-main">
          Canada was <span className="text-accent">once a leader</span> in public vaccine manufacturing
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-sm leading-relaxed">
              In 1914, Connaught Labs produced antitoxins as a <span className="font-bold text-text-main">public, not-for-profit institute</span> tied to the University of Toronto.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-sm leading-relaxed">
              But by the 1990s, <span className="font-bold text-text-main">privatization and foreign acquisitions</span> (Connaught → Sanofi, Armand Frappier → GSK) dismantled our domestic capacity, leaving Canada <span className="font-bold text-text-main">exposed</span> during COVID 19.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-sm leading-relaxed">
              In response, the federal government invested $126 million in the Biologics Manufacturing Centre (BMC) — which today <span className="font-bold text-text-main">remains underutilized</span>, with only one confirmed partner.
            </p>
          </li>
        </ul>
      </VastSection>

      {/* Contact - Full Width Center */}
      <section id="contact" className="py-32 px-8 bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-8">
            JOIN THE MISSION
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Interested in partnering with Asgard Pharma? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@asgardpharma.ca"
            className="inline-block px-12 py-6 border border-text-main text-text-main font-bold uppercase tracking-[0.2em] hover:bg-text-main hover:text-bg-main transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

    </Layout>
  );
}

export default App;
