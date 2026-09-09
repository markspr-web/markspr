import { Link } from 'react-router-dom'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import { network, seo } from '../data/site'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Our Network', path: '/network' },
]

const reach = [
  {
    title: 'Media',
    text: 'Long-standing relationships with the media — the bridge that carries a concise message to the right audience, across print, electronic and outdoor channels.',
  },
  {
    title: 'Industry',
    text: 'Ties across many industries, built over four decades of PR and advertising work for private and public institutions.',
  },
  {
    title: 'Celebrity',
    text: 'A large roster of celebrities for product launches, shows, inaugurations, events, collection launches and brand ambassador roles.',
  },
]

export default function Network() {
  return (
    <>
      <Seo
        title={seo.network.title}
        description={seo.network.description}
        path="/network"
        keywords={seo.network.keywords}
        schema={[breadcrumbSchema(crumbs)]}
      />

      <PageHero
        label="Our Network"
        breadcrumbs={crumbs}
        titleLines={network.heading}
        intro={network.intro}
      />

      <section className="bg-offwhite">
        <div className="container-page py-20 lg:py-28">
          <div className="grid gap-px border border-lightblue bg-lightblue sm:grid-cols-2 lg:grid-cols-4">
            {network.points.map((p) => (
              <Reveal key={p.title} className="bg-offwhite p-8">
                <div className="font-display text-4xl font-extrabold tracking-tightest text-blue lg:text-5xl">
                  {p.value}
                </div>
                <div className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-20 lg:py-28">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-slate">Where the network reaches</span>
          </Reveal>
          <Reveal>
            <h2 className="display-lg max-w-2xl text-navy">
              Relationships that carry a message beyond the region
            </h2>
          </Reveal>
          <RevealLine className="mt-10" />

          <ul className="mt-2">
            {reach.map((r) => (
              <Reveal as="li" key={r.title}>
                <div className="grid grid-cols-12 gap-4 border-b border-lightblue py-9">
                  <h3 className="col-span-12 font-display text-2xl font-bold uppercase tracking-tightest text-navy sm:col-span-4">
                    {r.title}
                  </h3>
                  <p className="col-span-12 max-w-xl text-sm leading-relaxed text-slate sm:col-span-8">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-10 max-w-xl">
            <p className="text-sm leading-relaxed text-slate">
              Marks Media Communication does not publish detailed network figures. The points above
              reflect the agency’s stated experience and reach. Read more{' '}
              <Link to="/about" className="text-blue underline-offset-4 hover:underline">
                about the agency
              </Link>{' '}
              or see the{' '}
              <Link to="/clients" className="text-blue underline-offset-4 hover:underline">
                clients we have worked with
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

    </>
  )
}
