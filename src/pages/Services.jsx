import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { services, anyEvent, seo, siteUrl } from '../data/site'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

function Row({ s }) {
  return (
    <Reveal as="li">
      <Link
        to={`/services/${s.slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
      >
        <div className="grid grid-cols-12 gap-4 py-9 lg:py-11">
          <div className="col-span-12 sm:col-span-5">
            <h3 className="display-lg text-navy transition-colors group-hover:text-bluehover">
              {s.title}
            </h3>
          </div>
          <div className="col-span-12 max-w-md text-sm leading-relaxed text-slate sm:col-span-6">
            {s.summary}
          </div>
          <div className="col-span-12 hidden justify-end sm:col-span-1 sm:flex">
            <ArrowUpRight
              size={24}
              className="text-navy/25 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
            />
          </div>
        </div>
        <div className="relative h-px w-full bg-lightblue">
          <span className="absolute left-0 top-0 h-px w-0 bg-red transition-all duration-300 group-hover:w-10" />
        </div>
      </Link>
    </Reveal>
  )
}

export default function Services() {
  return (
    <>
      <Seo
        title={seo.services.title}
        description={seo.services.description}
        path="/services"
        keywords={seo.services.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'OfferCatalog',
            name: 'PR & Advertising Services',
            itemListElement: services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                url: `${siteUrl}/services/${s.slug}`,
                provider: { '@id': `${siteUrl}/#organization` },
              },
            })),
          },
        ]}
      />

      <PageHero
        label="Services"
        breadcrumbs={crumbs}
        titleLines={['What', { text: 'we do', accent: true }]}
        intro="Public Relations and Advertising under one roof. Every engagement is built on research, precise planning and expert scrutiny of market demands."
      />

      <section className="bg-white">
        <div className="container-page pb-8">
          <h2 className="sr-only">Our services</h2>
          <ul className="border-t border-lightblue">
            {services.map((s) => (
              <Row key={s.slug} s={s} />
            ))}
          </ul>
        </div>
      </section>

      {/* Any event, any industry */}
      <section className="bg-offwhite">
        <div className="container-page py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="display-lg text-navy">{anyEvent.title}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <p className="text-sm leading-relaxed text-slate">
                  {anyEvent.summary} See our{' '}
                  <Link to="/events" className="text-blue underline-offset-4 hover:underline">
                    events archive
                  </Link>{' '}
                  or the{' '}
                  <Link to="/public-relations" className="text-blue underline-offset-4 hover:underline">
                    public relations practice
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
