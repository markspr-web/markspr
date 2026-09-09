import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import { publicRelations as pr, seo, siteUrl } from '../data/site'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Public Relations', path: '/public-relations' },
]

// Practice areas that map to a dedicated service page.
const practiceLinks = {
  'Media Relations': '/services/media-relations',
  'Press Release': '/services/press-release',
  'Brand Management': '/services/brand-management',
  'Event Management': '/services/event-management',
  'Product Launch': '/services/product-launch',
  'Corporate P.R': '/services/corporate-pr',
  'Celebrity Management': '/services/celebrity-management',
  Advertising: '/services/advertising',
}

export default function PublicRelations() {
  return (
    <>
      <Seo
        title={seo.publicRelations.title}
        description={seo.publicRelations.description}
        path="/public-relations"
        keywords={seo.publicRelations.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'Service',
            name: 'Public Relations',
            serviceType: 'Public Relations',
            description: `${pr.definition} ${pr.role}`,
            url: `${siteUrl}/public-relations`,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: 'India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Public Relations practice areas',
              itemListElement: pr.practices.map((p) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: p.title },
              })),
            },
          },
        ]}
      />

      <PageHero
        label="Public Relations"
        dark
        breadcrumbs={crumbs}
        titleLines={['Public', { text: 'Relations', accent: true }]}
        intro={pr.definition}
      />

      {/* Role + method */}
      <section className="bg-navy pb-20 lg:pb-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-lightblue">{pr.role}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal className="border-t border-white/20 pt-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                  {pr.method.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {pr.method.steps.map((s, i) => (
                    <li key={i} className="flex gap-4 text-sm leading-relaxed text-lightblue">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue"
                        aria-hidden="true"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-white">
        <div className="container-page py-20 lg:py-28">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-slate">Practice areas</span>
          </Reveal>
          <Reveal>
            <h2 className="display-lg max-w-2xl text-navy">
              Eleven ways we build and protect a reputation
            </h2>
          </Reveal>
          <RevealLine className="mt-10" />

          <ul className="mt-2">
            {pr.practices.map((p) => {
              const to = practiceLinks[p.title]
              return (
                <Reveal as="li" key={p.title}>
                  <div className="grid grid-cols-12 gap-4 border-b border-lightblue py-8 lg:py-10">
                    <div className="col-span-12 sm:col-span-4">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tightest text-navy lg:text-2xl">
                        {to ? (
                          <Link
                            to={to}
                            className="group inline-flex items-start gap-2 transition-colors hover:text-bluehover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                          >
                            {p.title}
                            <ArrowUpRight size={16} className="mt-1 shrink-0 text-blue" />
                          </Link>
                        ) : (
                          p.title
                        )}
                      </h3>
                    </div>
                    <div className="col-span-12 max-w-xl text-sm leading-relaxed text-slate sm:col-span-8">
                      {p.text}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>

          <Reveal delay={0.1} className="mt-10 max-w-xl text-sm leading-relaxed text-slate">
            <p>
              Explore the full list of{' '}
              <Link to="/services" className="text-blue underline-offset-4 hover:underline">
                PR and advertising services
              </Link>{' '}
              or see this work in our{' '}
              <Link to="/events" className="text-blue underline-offset-4 hover:underline">
                events archive
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

    </>
  )
}
