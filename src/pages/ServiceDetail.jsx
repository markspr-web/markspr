import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import NotFound from './NotFound'
import { services, siteUrl, company } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const index = services.findIndex((s) => s.slug === slug)
  if (index === -1) return <NotFound />

  const service = services[index]
  const prev = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]
  const path = `/services/${service.slug}`

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path },
  ]

  return (
    <>
      <Seo
        title={`${service.title} | Marks Media Communication`}
        description={`${service.summary} A ${service.title.toLowerCase()} service from Marks Media Communication — a PR and advertising agency in Hyderabad with more than 40 years of experience.`}
        path={path}
        keywords={`${service.title}, ${service.title} agency Hyderabad, public relations, advertising agency, Marks Media Communication`}
        type="article"
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'Service',
            name: service.title,
            serviceType: service.title,
            description: service.body.join(' '),
            url: `${siteUrl}${path}`,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: 'India',
            audience: { '@type': 'BusinessAudience', name: 'Brands and institutions' },
          },
        ]}
      />

      <PageHero
        label="Services"
        dark
        breadcrumbs={crumbs}
        titleLines={[service.title]}
        intro={service.summary}
      />

      <section className="bg-white">
        <div className="container-page py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="eyebrow text-slate">How we help brands</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-slate">
                {service.body.map((p, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1} className="mt-8">
                <p className="text-base leading-relaxed text-slate">
                  {service.title} sits within {company.name}’s wider{' '}
                  <Link to="/public-relations" className="text-blue underline-offset-4 hover:underline">
                    public relations practice
                  </Link>
                  . Tell us about your brief on the{' '}
                  <Link to="/contact" className="text-blue underline-offset-4 hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>

          <RevealLine className="mt-16" />

          <nav aria-label="More services" className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              to={`/services/${prev.slug}`}
              className="group flex items-center gap-3 rounded-sm border border-lightblue p-6 transition-colors hover:border-navy"
            >
              <ArrowLeft size={18} className="text-blue" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate">Previous</span>
                <span className="font-display text-lg font-bold uppercase tracking-tightest text-navy group-hover:text-bluehover">
                  {prev.title}
                </span>
              </span>
            </Link>
            <Link
              to={`/services/${next.slug}`}
              className="group flex items-center justify-end gap-3 rounded-sm border border-lightblue p-6 text-right transition-colors hover:border-navy"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate">Next</span>
                <span className="font-display text-lg font-bold uppercase tracking-tightest text-navy group-hover:text-bluehover">
                  {next.title}
                </span>
              </span>
              <ArrowRight size={18} className="text-blue" />
            </Link>
          </nav>

          <div className="mt-8">
            <Link to="/services" className="btn btn-ghost-dark">
              All services
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
