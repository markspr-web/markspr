import { Link } from 'react-router-dom'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import ClientGrid from '../components/ClientGrid'
import { clients, seo } from '../data/site'
import { clientLogoCount } from '../data/clientLogos'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Clients', path: '/clients' },
]

export default function Clients() {
  return (
    <>
      <Seo
        title={seo.clients.title}
        description={seo.clients.description}
        path="/clients"
        keywords={seo.clients.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'ItemList',
            name: 'Clients of Marks Media Communication',
            itemListElement: clients.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
            })),
          },
        ]}
      />

      <PageHero
        label="Clients"
        breadcrumbs={crumbs}
        titleLines={['Trusted by', { text: 'brands', accent: true }, 'across India']}
        intro="A selection of the brands and institutions Marks Media Communication has worked with in public relations, advertising and events."
      />

      <section className="bg-white">
        <div className="container-page py-16 lg:py-24">
          <h2 className="sr-only">Client list</h2>
          <ClientGrid clients={clients} />

          <p className="mt-12 max-w-xl text-sm leading-relaxed text-slate">
            {clients.length} brands and institutions Marks Media Communication has worked with
            {clientLogoCount === 0
              ? '. Official brand logos will be added by the client.'
              : `, ${clientLogoCount} shown as official brand logos.`}{' '}
            See the kind of work behind these relationships in our{' '}
            <Link to="/events" className="text-blue underline-offset-4 hover:underline">
              events archive
            </Link>{' '}
            and{' '}
            <Link to="/services" className="text-blue underline-offset-4 hover:underline">
              services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
