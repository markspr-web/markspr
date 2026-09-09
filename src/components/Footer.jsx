import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { contact, services } from '../data/site'
import SocialLinks from './SocialLinks'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Public Relations', to: '/public-relations' },
  { label: 'Events', to: '/events' },
  { label: 'Network', to: '/network' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
]

function Column({ title, children }) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-white">{title}</h3>
      {children}
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy text-lightblue">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img
              src="/logo-light.png"
              alt="Marks Media Communication — get the attention you deserve"
              width="464"
              height="460"
              className="h-28 w-auto sm:h-32"
            />
            <p className="mt-6 max-w-xs font-serif text-lg italic text-white">
              Get the attention you deserve.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-lightblue/80">
              A Public Relations and Advertising agency in the Deccan region of India with more
              than 40 years of experience.
            </p>
            <div className="mt-6">
              <h3 className="eyebrow mb-3 text-white">Follow</h3>
              <SocialLinks tone="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <Column title="Quick Links">
              <ul className="space-y-3 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-lightblue/80 transition-colors hover:text-blue">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>

            <Column title="Services">
              <ul className="space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-lightblue/80 transition-colors hover:text-blue"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>

            <Column title="Contact">
              <address className="space-y-3 text-sm not-italic leading-relaxed text-lightblue/80">
                <p>{contact.addressLines.join(', ')}</p>
                <p>
                  {contact.person} —{' '}
                  <a href={`tel:${contact.mobile}`} className="transition-colors hover:text-blue">
                    {contact.mobile}
                  </a>
                </p>
                <p>
                  Office:{' '}
                  <a href={`tel:0${contact.office}`} className="transition-colors hover:text-blue">
                    {contact.office}
                  </a>
                  <br />
                  Fax: {contact.fax}
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-1 text-white transition-colors hover:text-blue"
                  >
                    {contact.email}
                    <ArrowUpRight size={14} />
                  </a>
                </p>
              </address>
            </Column>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-lightblue/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-red" aria-hidden="true" />
            © {year} Marks Media Communication. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">Public Relations &amp; Advertising · Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}
