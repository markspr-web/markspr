import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal, { RevealLine } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { about, services, events, clients, network, company, seo, siteUrl } from '../data/site'
import { clientLogo } from '../data/clientLogos'
import { eventPhoto } from '../data/eventPhotos'

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Flat 2D geometry — thin lines only, no depth. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/10 lg:block" />
        <div className="absolute inset-x-0 top-1/2 hidden h-px bg-white/[0.06] sm:block" />
        <div className="absolute right-[6%] top-[16%] hidden h-24 w-24 border border-white/10 lg:block" />
        <div className="absolute bottom-[14%] left-[6%] hidden h-1.5 w-1.5 rounded-full bg-red sm:block" />
      </div>

      <div className="container-page relative">
        <div className="flex min-h-[calc(100vh-96px)] flex-col justify-center py-20 lg:py-28">
          <Reveal className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-lightblue">Marks Media Communication</span>
          </Reveal>

          <h1 className="display-hero text-white" aria-label="Get the attention you deserve">
            <Reveal as="span" className="block" aria-hidden="true">
              Get the
            </Reveal>
            <Reveal as="span" delay={0.08} className="block text-blue" aria-hidden="true">
              attention
              <span className="ml-3 inline-block h-2.5 w-2.5 rounded-full bg-red align-middle" />
            </Reveal>
            <Reveal as="span" delay={0.16} className="block" aria-hidden="true">
              you deserve
            </Reveal>
          </h1>

          <RevealLine dark className="mt-12 max-w-xl" delay={0.2} />

          <Reveal delay={0.24} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-lightblue">
              {company.intro}
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-primary">
              Explore our services
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/about" className="btn btn-ghost-light">
              About the agency
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  About teaser                                                               */
/* -------------------------------------------------------------------------- */

function AboutTeaser() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              words={['We are', { text: 'Marks Media', accent: true }, 'Communication']}
            />
            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-slate">
              <p>{about.lead}</p>
              <p>{about.paragraphs[0]}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Link to="/about" className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-bluehover">
                Read about us
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-lightblue bg-lightblue sm:grid-cols-2">
              {about.stats.map((s) => (
                <Reveal key={s.label} className="bg-white p-6">
                  <div className="font-display text-4xl font-extrabold tracking-tightest text-blue lg:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.14em] text-slate">{s.label}</div>
                </Reveal>
              ))}
              <Reveal className="bg-navy p-6">
                <p className="font-serif text-lg italic leading-snug text-white">
                  “{company.tagline}.”
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Services list                                                              */
/* -------------------------------------------------------------------------- */

function ServiceRow({ s }) {
  return (
    <Link to={`/services/${s.slug}`} className="group block">
      <div className="grid grid-cols-12 items-baseline gap-4 py-7 transition-colors">
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
            size={22}
            className="text-navy/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
          />
        </div>
      </div>
      <div className="relative h-px w-full bg-lightblue">
        <span className="absolute left-0 top-0 h-px w-0 bg-red transition-all duration-300 group-hover:w-8" />
      </div>
    </Link>
  )
}

function ServicesList() {
  return (
    <section className="bg-offwhite">
      <div className="container-page py-20 lg:py-28">
        <SectionHeading eyebrow="Services" words={['What', 'we do']} />
        <Reveal delay={0.1} className="mt-8 max-w-xl text-base leading-relaxed text-slate">
          <p>
            Public Relations and Advertising under one roof — from media relations and press
            releases to brand management, launches, events, celebrity management and influencer
            marketing.
          </p>
        </Reveal>

        <div className="mt-12 border-t border-lightblue">
          {services.map((s) => (
            <ServiceRow key={s.slug} s={s} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Link to="/services" className="btn btn-ghost-dark">
            All services
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Public Relations band                                                      */
/* -------------------------------------------------------------------------- */

function PRBand() {
  return (
    <section className="bg-navy">
      <div className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
              <span className="eyebrow text-lightblue">Public Relations</span>
            </Reveal>
            <Reveal>
              <h2 className="display-xl text-white" aria-label="Public Relations">
                <span className="block" aria-hidden="true">Public</span>
                <span className="block text-blue" aria-hidden="true">Relations</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <Reveal className="space-y-5 text-base leading-relaxed text-lightblue">
              <p>
                Public Relations is the practice of shaping and maintaining the image of a company,
                an organisation or an individual in the eyes of its publics. It is a major tool for
                building the right image of a client.
              </p>
              <p>
                Marks Media Communication creates the strategies, concepts and ideas that build that
                image — across media relations, media monitoring, press releases, brand management,
                events, launches, corporate PR, celebrity management, advertising, concept promotions
                and crisis management.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <Link to="/public-relations" className="btn btn-ghost-light">
                Explore Public Relations
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Events teaser                                                              */
/* -------------------------------------------------------------------------- */

function EventsTeaser() {
  const featured = events.slice(0, 6)
  return (
    <section className="bg-white">
      <div className="container-page py-20 lg:py-28">
        <SectionHeading eyebrow="Events" words={['Selected', { text: 'work', accent: true }]} />

        <div className="mt-12 grid gap-px border border-lightblue bg-lightblue sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 3) * 0.04}>
              <Link
                to={`/events/${e.slug}`}
                className="group flex h-full flex-col bg-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-offwhite">
                  {eventPhoto(e.slug) && (
                    <img
                      src={eventPhoto(e.slug)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top grayscale transition duration-500 ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                    />
                  )}
                </div>
                <div className="flex flex-1 items-start justify-between gap-3 p-5">
                  <span className="font-display text-base font-bold uppercase leading-tight tracking-tightest text-navy transition-colors group-hover:text-bluehover">
                    {e.title}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-0.5 shrink-0 text-navy/25 transition-colors group-hover:text-blue"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Link to="/events" className="btn btn-ghost-dark">
            View all events
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Network teaser                                                             */
/* -------------------------------------------------------------------------- */

function NetworkTeaser() {
  return (
    <section className="bg-offwhite">
      <div className="container-page py-20 lg:py-28">
        <SectionHeading eyebrow="Our Network" words={network.heading} />
        <div className="mt-12 grid gap-px border border-lightblue bg-lightblue sm:grid-cols-2 lg:grid-cols-4">
          {network.points.map((p) => (
            <Reveal key={p.title} className="bg-offwhite p-7">
              <div className="font-display text-3xl font-extrabold tracking-tightest text-blue lg:text-4xl">
                {p.value}
              </div>
              <div className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy">
                {p.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link to="/network" className="btn btn-ghost-dark">
            About our network
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Clients marquee                                                            */
/* -------------------------------------------------------------------------- */

function ClientsStrip() {
  const row = [...clients, ...clients]
  return (
    <section className="border-y border-lightblue bg-white">
      <div className="container-page py-14 lg:py-16">
        <SectionHeading eyebrow="Clients" words={['Trusted by', 'brands across India']} />
      </div>
      <div className="relative overflow-hidden py-8" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
          {row.map((c, i) => {
            const logo = clientLogo(c.slug)
            return (
              <span key={`${c.slug}-${i}`} className="flex items-center gap-10">
                {logo ? (
                  <img
                    src={logo}
                    alt=""
                    className="h-7 w-auto object-contain opacity-50 grayscale sm:h-8"
                  />
                ) : (
                  <span className="font-display text-xl font-bold uppercase tracking-tightest text-slate/70 sm:text-2xl">
                    {c.name}
                  </span>
                )}
                <span className="text-red">·</span>
              </span>
            )
          })}
        </div>
      </div>
      <div className="container-page pb-14 lg:pb-16">
        <Link to="/clients" className="btn btn-ghost-dark">
          See all clients
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Seo
        title={seo.home.title}
        description={seo.home.description}
        path="/"
        keywords={seo.home.keywords}
        schema={[
          {
            '@type': 'ItemList',
            name: 'Services — Marks Media Communication',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.title,
              url: `${siteUrl}/services/${s.slug}`,
            })),
          },
        ]}
      />
      <Hero />
      <AboutTeaser />
      <ServicesList />
      <PRBand />
      <EventsTeaser />
      <NetworkTeaser />
      <ClientsStrip />
    </>
  )
}
