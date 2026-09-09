import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal, { RevealLine } from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import { contact, seo, siteUrl } from '../data/site'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
]

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    setSent(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      '',
      values.message,
    ].join('\n')
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Enquiry from ${values.name || 'the website'}`,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  return (
    <>
      <Seo
        title={seo.contact.title}
        description={seo.contact.description}
        path="/contact"
        keywords={seo.contact.keywords}
        schema={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'ContactPage',
            name: seo.contact.title,
            url: `${siteUrl}/contact`,
            about: { '@id': `${siteUrl}/#organization` },
          },
        ]}
      />

      <PageHero
        label="Contact"
        dark
        breadcrumbs={crumbs}
        titleLines={['Get in', { text: 'touch', accent: true }]}
        intro="Get the attention you deserve starts with a conversation. Tell us about the brief and we will get back to you."
      />

      <section className="bg-navy pb-20 lg:pb-28">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Details */}
            <div className="lg:col-span-4">
              <div className="space-y-10">
                <div>
                  <h2 className="eyebrow text-blue">Office</h2>
                  <address className="mt-4 space-y-1 text-base not-italic leading-relaxed text-lightblue">
                    {contact.addressLines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </address>
                </div>
                <div>
                  <h2 className="eyebrow text-blue">Contact</h2>
                  <div className="mt-4 space-y-2 text-base text-lightblue">
                    <p>
                      {contact.person} —{' '}
                      <a href={`tel:${contact.mobile}`} className="text-white transition-colors hover:text-blue">
                        {contact.mobile}
                      </a>
                    </p>
                    <p>
                      Office:{' '}
                      <a href={`tel:0${contact.office}`} className="text-white transition-colors hover:text-blue">
                        {contact.office}
                      </a>
                    </p>
                    <p>Fax: {contact.fax}</p>
                  </div>
                </div>
                <div>
                  <h2 className="eyebrow text-blue">Email</h2>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-4 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-tightest text-white transition-colors hover:text-blue"
                  >
                    {contact.email}
                    <ArrowRight size={18} />
                  </a>
                </div>
                <div>
                  <h2 className="eyebrow text-blue">Follow</h2>
                  <SocialLinks tone="dark" className="mt-4" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="border border-white/15 bg-white p-6 sm:p-10">
                <form onSubmit={onSubmit} className="space-y-8" noValidate>
                  <div className="grid gap-8 sm:grid-cols-3">
                    {fields.map((f) => {
                      const req = f.name !== 'phone'
                      return (
                        <div key={f.name}>
                          <label htmlFor={`field-${f.name}`} className="eyebrow block text-slate">
                            {f.label}
                            {req && <span className="text-red"> *</span>}
                          </label>
                          <input
                            id={`field-${f.name}`}
                            type={f.type}
                            name={f.name}
                            value={values[f.name]}
                            onChange={onChange}
                            autoComplete={f.autoComplete}
                            required={req}
                            aria-required={req}
                            className="mt-3 w-full border-0 border-b border-lightblue bg-transparent pb-2 font-sans text-base text-navy transition-colors placeholder:text-slate/50 focus:border-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div>
                    <label htmlFor="field-message" className="eyebrow block text-slate">
                      Message<span className="text-red"> *</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={5}
                      required
                      aria-required="true"
                      className="mt-3 w-full resize-none border-0 border-b border-lightblue bg-transparent pb-2 font-sans text-base text-navy transition-colors focus:border-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button type="submit" className="btn btn-primary">
                      Send message
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                    {sent && (
                      <span className="inline-flex items-center gap-2 text-sm text-slate">
                        <Check size={16} className="text-blue" />
                        Opening your email app…
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-slate">
                    This form opens your email application with the details filled in. You can also
                    write to us directly at {contact.email}.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <RevealLine dark className="mt-16" />
          <Reveal delay={0.1} className="mt-6">
            <p className="font-serif text-xl italic text-white">Get the attention you deserve.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
