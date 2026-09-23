import Reveal, { RevealLine } from './Reveal'

/**
 * Editorial section header: eyebrow (number / label), a red tick, and a large
 * uppercase heading. `words` is an array of lines; entries can be a string or
 * { text, accent: true } to colour a word in MARKS blue.
 */
export default function SectionHeading({ eyebrow, words = [], dark = false, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
          <span className={`eyebrow ${dark ? 'text-lightblue' : 'text-slate'}`}>{eyebrow}</span>
        </Reveal>
      )}
      <h2
        className={`display-xl ${dark ? 'text-white' : 'text-navy'}`}
        aria-label={words.map((w) => (typeof w === 'object' ? w.text : w)).join(' ')}
      >
        {words.map((w, i) => {
          const isObj = typeof w === 'object'
          const text = isObj ? w.text : w
          return (
            <Reveal key={i} as="span" delay={i * 0.08} className="block" aria-hidden="true">
              <span className={isObj && w.accent ? 'text-blue' : undefined}>{text}</span>
            </Reveal>
          )
        })}
      </h2>
      <RevealLine dark={dark} className="mt-8" delay={0.1} />
    </div>
  )
}
