import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import NotFound from './NotFound'
import { events, services, siteUrl, company } from '../data/site'
import { eventPhoto } from '../data/eventPhotos'

export default function EventDetail() {
  const { slug } = useParams()
  const index = events.findIndex((e) => e.slug === slug)
  if (index === -1) return <NotFound />

  const event = events[index]
  const prev = events[(index - 1 + events.length) % events.length]
  const next = events[(index + 1) % events.length]
  const service = services.find((s) => s.slug === event.related)
  const photo = eventPhoto(event.slug)
  const path = `/events/${event.slug}`

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: event.title, path },
  ]

  return (
    <>
      <Seo
        title={`${event.seoTitle || event.title} | Marks Media Communication`}
        description={`${event.title} — part of the work of ${company.name}, a public relations and advertising agency in Hyderabad. Category: ${event.tag}.`}
        path={path}
        keywords={`${event.tag}, ${event.title}, event management agency Hyderabad, PR agency events`}
        type="article"
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'Event',
            name: event.title,
            description: `${event.title}. Category: ${event.tag}.`,
            ...(photo ? { image: `${siteUrl}${photo}` } : {}),
            organizer: { '@id': `${siteUrl}/#organization` },
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            location: {
              '@type': 'Place',
              name: 'India',
              address: { '@type': 'PostalAddress', addressCountry: 'IN' },
            },
          },
        ]}
      />

      <PageHero
        label="Events"
        breadcrumbs={crumbs}
        titleLines={[event.title]}
        intro={`This event is part of the public record of work of ${company.name}. Category: ${event.tag}.`}
      />

      <section className="bg-white">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <dl className="space-y-6">
                  <div>
                    <dt className="eyebrow text-slate">Category</dt>
                    <dd className="mt-2 font-display text-lg font-bold uppercase tracking-tightest text-navy">
                      {event.tag}
                    </dd>
                  </div>
                  {service && (
                    <div>
                      <dt className="eyebrow text-slate">Related service</dt>
                      <dd className="mt-2">
                        <Link
                          to={`/services/${service.slug}`}
                          className="group inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-tightest text-navy transition-colors hover:text-bluehover"
                        >
                          {service.title}
                          <ArrowUpRight size={16} className="text-blue" />
                        </Link>
                      </dd>
                    </div>
                  )}
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                {photo ? (
                  <figure className="group">
                    <div className="flex w-full justify-center overflow-hidden border border-lightblue bg-offwhite">
                      <img
                        src={photo}
                        alt={`${event.title} — event by ${company.name}`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[36rem] w-auto max-w-full object-contain grayscale transition duration-500 ease-out will-change-[filter] group-hover:grayscale-0 motion-reduce:transition-none"
                      />
                    </div>
                    <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-slate">
                      {event.tag} · from {company.name}’s record
                    </figcaption>
                  </figure>
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center border border-lightblue bg-offwhite">
                    <span className="eyebrow text-slate/70">Image placeholder</span>
                  </div>
                )}
              </Reveal>

              {service && (
                <Reveal delay={0.05} className="mt-10">
                  <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                    What a brief like this involves
                  </h2>
                  <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-slate">
                    {service.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.1} className="mt-8 text-sm leading-relaxed text-slate">
                <p>
                  Event names and photography are drawn from {company.name}’s public record.
                  Dates and further detail will be added by the client. See the full{' '}
                  <Link to="/events" className="text-blue underline-offset-4 hover:underline">
                    events archive
                  </Link>{' '}
                  or read about our{' '}
                  <Link to="/services/event-management" className="text-blue underline-offset-4 hover:underline">
                    event management
                  </Link>{' '}
                  service.
                </p>
              </Reveal>
            </div>
          </div>

          <RevealLine className="mt-16" />

          <nav aria-label="More events" className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              to={`/events/${prev.slug}`}
              className="group flex items-center gap-3 rounded-sm border border-lightblue p-6 transition-colors hover:border-navy"
            >
              <ArrowLeft size={18} className="shrink-0 text-blue" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate">Previous</span>
                <span className="font-display text-base font-bold uppercase leading-tight tracking-tightest text-navy group-hover:text-bluehover">
                  {prev.title}
                </span>
              </span>
            </Link>
            <Link
              to={`/events/${next.slug}`}
              className="group flex items-center justify-end gap-3 rounded-sm border border-lightblue p-6 text-right transition-colors hover:border-navy"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate">Next</span>
                <span className="font-display text-base font-bold uppercase leading-tight tracking-tightest text-navy group-hover:text-bluehover">
                  {next.title}
                </span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-blue" />
            </Link>
          </nav>

          <div className="mt-8">
            <Link to="/events" className="btn btn-ghost-dark">
              All events
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
