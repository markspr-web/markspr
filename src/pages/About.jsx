import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import { about, seo } from '../data/site'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

const capabilities = [
  { label: 'Corporate reputation', to: '/services/corporate-pr' },
  { label: 'Public relations', to: '/public-relations' },
  { label: 'Celebrity management', to: '/services/celebrity-management' },
  { label: 'Image management', to: '/public-relations' },
  { label: 'Concept promotions', to: '/public-relations' },
  { label: 'Advertising', to: '/services/advertising' },
  { label: 'Branding', to: '/services/brand-management' },
  { label: 'Crisis management', to: '/public-relations' },
]

export default function About() {
  return (
    <>
      <Seo
        title={seo.about.title}
        description={seo.about.description}
        path="/about"
        keywords={seo.about.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'AboutPage',
            name: seo.about.title,
            about: { '@id': 'https://markspr.com/#organization' },
          },
        ]}
      />

      <PageHero
        label="About"
        dark
        breadcrumbs={crumbs}
        titleLines={['We are', { text: 'Marks Media', accent: true }, 'Communication']}
        intro={about.lead}
      />

      {/* Intro + big stat */}
      <section className="bg-white">
        <div className="container-page py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="max-w-xl space-y-6 text-base leading-relaxed text-slate">
                {about.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="border-t border-navy pt-6">
                <div className="font-display text-[5.5rem] font-extrabold leading-none tracking-tightest text-blue sm:text-[7rem]">
                  40+
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-slate">
                  Years of experience in Public Relations and Advertising
                </p>
              </Reveal>
              <Reveal delay={0.06} className="mt-10 border-t border-lightblue pt-6">
                <div className="font-display text-4xl font-extrabold tracking-tightest text-navy">
                  1000+
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-slate">
                  Brands served in India, alongside international clients
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-offwhite">
        <div className="container-page py-20 lg:py-28">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-slate">What we cover</span>
          </Reveal>
          <Reveal>
            <h2 className="display-lg max-w-3xl text-navy">
              One media house, across the full communications brief
            </h2>
          </Reveal>
          <RevealLine className="mt-10" />

          <ul className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.label} delay={(i % 4) * 0.04}>
                <Link
                  to={c.to}
                  className="group flex items-center gap-4 border-b border-lightblue py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  <span className="font-display text-lg font-bold uppercase tracking-tightest text-navy transition-colors group-hover:text-bluehover">
                    {c.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Culture + objective */}
      <section className="bg-navy">
        <div className="container-page py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
                <span className="eyebrow text-lightblue">Our culture</span>
              </Reveal>
              <Reveal>
                <p className="font-serif text-xl italic leading-relaxed text-white sm:text-2xl">
                  {about.culture}
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
                <span className="eyebrow text-lightblue">Our objective</span>
              </Reveal>
              <Reveal>
                <p className="text-base leading-relaxed text-lightblue">{about.objective}</p>
              </Reveal>
              <RevealLine dark className="mt-10" />
              <Reveal delay={0.1} className="mt-6">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-blue">
                  Our tag line — Get the attention you deserve
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Where to next — internal links */}
      <section className="bg-white">
        <div className="container-page py-16 lg:py-20">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-slate">Where to next</span>
          </Reveal>
          <nav aria-label="Related pages" className="grid gap-px border border-lightblue bg-lightblue sm:grid-cols-3">
            {[
              { to: '/services', title: 'Our services', text: 'Media relations, branding, launches, advertising, events and celebrity management.' },
              { to: '/public-relations', title: 'Public relations', text: 'How we shape and protect reputation, from media monitoring to crisis management.' },
              { to: '/contact', title: 'Contact us', text: 'Talk to the team in Banjara Hills, Hyderabad about your brief.' },
            ].map((l) => (
              <Reveal key={l.to} className="bg-white">
                <Link
                  to={l.to}
                  className="group flex h-full flex-col justify-between gap-6 p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                  <span className="font-display text-xl font-bold uppercase tracking-tightest text-navy transition-colors group-hover:text-bluehover">
                    {l.title}
                  </span>
                  <span className="text-sm leading-relaxed text-slate">{l.text}</span>
                  <ArrowRight size={18} className="text-blue transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </nav>
        </div>
      </section>

    </>
  )
}
