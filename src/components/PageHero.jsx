import Reveal, { RevealLine } from './Reveal'
import Breadcrumbs from './Breadcrumbs'

/**
 * Interior page hero. `titleLines` accepts strings or { text, accent } objects.
 * `breadcrumbs` is an optional [{ name, path }] trail rendered above the eyebrow.
 */
export default function PageHero({
  label,
  titleLines = [],
  intro,
  dark = false,
  breadcrumbs = [],
}) {
  return (
    <section className={dark ? 'bg-navy' : 'bg-white'}>
      <div className="container-page pb-14 pt-10 lg:pb-20 lg:pt-14">
        {breadcrumbs.length > 1 && <Breadcrumbs items={breadcrumbs} dark={dark} />}

        {label && (
          <Reveal className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className={`eyebrow ${dark ? 'text-lightblue' : 'text-slate'}`}>{label}</span>
          </Reveal>
        )}

        <Reveal>
          <h1
            className={`display-hero ${dark ? 'text-white' : 'text-navy'}`}
            aria-label={titleLines.map((w) => (typeof w === 'object' ? w.text : w)).join(' ')}
          >
            {titleLines.map((w, i) => {
              const isObj = typeof w === 'object'
              return (
                <span key={i} className="block" aria-hidden="true">
                  <span className={isObj && w.accent ? 'text-blue' : undefined}>
                    {isObj ? w.text : w}
                  </span>
                </span>
              )
            })}
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={0.1} className="mt-10 max-w-2xl">
            <p className={`text-lg leading-relaxed ${dark ? 'text-lightblue' : 'text-slate'}`}>
              {intro}
            </p>
          </Reveal>
        )}

        <RevealLine dark={dark} className="mt-14" delay={0.15} />
      </div>
    </section>
  )
}
