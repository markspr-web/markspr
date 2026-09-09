import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import { events, seo, siteUrl } from '../data/site'
import { eventPhoto } from '../data/eventPhotos'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
]

export default function Events() {
  const tags = useMemo(() => ['All', ...Array.from(new Set(events.map((e) => e.tag)))], [])
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? events : events.filter((e) => e.tag === active)

  return (
    <>
      <Seo
        title={seo.events.title}
        description={seo.events.description}
        path="/events"
        keywords={seo.events.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'ItemList',
            name: 'Events managed by Marks Media Communication',
            itemListElement: events.map((e, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: e.title,
              url: `${siteUrl}/events/${e.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        label="Events"
        breadcrumbs={crumbs}
        titleLines={['Selected', { text: 'work', accent: true }]}
        intro="Press meets, product launches, unveilings, award ceremonies and celebrity appearances managed by Marks Media Communication."
      />

      <section className="bg-white">
        <div className="container-page py-14 lg:py-20">
          <h2 className="sr-only">Events archive</h2>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                aria-pressed={active === t}
                className={`rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${
                  active === t
                    ? 'border-navy bg-navy text-white'
                    : 'border-lightblue text-slate hover:border-navy hover:text-navy'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'event' : 'events'}
          </p>

          <ul className="mt-6 border-t border-navy">
            <AnimatePresence initial={false}>
              {filtered.map((e, i) => (
                <m.li
                  key={e.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-lightblue"
                >
                  <Link
                    to={`/events/${e.slug}`}
                    className="group grid grid-cols-12 items-center gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue lg:py-6"
                  >
                    <span className="col-span-3 sm:col-span-2">
                      {eventPhoto(e.slug) ? (
                        <span className="block aspect-square w-full overflow-hidden rounded-sm border border-lightblue bg-offwhite">
                          <img
                            src={eventPhoto(e.slug)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top grayscale transition duration-500 ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                          />
                        </span>
                      ) : (
                        <span className="block aspect-square w-full rounded-sm border border-lightblue bg-offwhite" />
                      )}
                    </span>
                    <span className="col-span-9 font-display text-lg font-bold uppercase leading-tight tracking-tightest text-navy transition-colors group-hover:text-bluehover sm:col-span-6 lg:text-2xl">
                      {e.title}
                    </span>
                    <span className="col-span-10 col-start-4 text-xs uppercase tracking-[0.16em] text-slate sm:col-span-3 sm:col-start-auto">
                      {e.tag}
                    </span>
                    <span className="hidden justify-end sm:col-span-1 sm:flex">
                      <ArrowUpRight
                        size={18}
                        className="text-navy/25 transition-colors group-hover:text-blue"
                      />
                    </span>
                  </Link>
                </m.li>
              ))}
            </AnimatePresence>
          </ul>

          <p className="mt-10 max-w-xl text-sm leading-relaxed text-slate">
            Event names and photography are drawn from Marks Media Communication’s public record.
            Dates will be added by the client. Read about our{' '}
            <Link to="/services/event-management" className="text-blue underline-offset-4 hover:underline">
              event management
            </Link>{' '}
            and{' '}
            <Link to="/services/celebrity-management" className="text-blue underline-offset-4 hover:underline">
              celebrity management
            </Link>{' '}
            services.
          </p>
        </div>
      </section>

    </>
  )
}
