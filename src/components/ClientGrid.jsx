import Reveal from './Reveal'
import { clientLogo } from '../data/clientLogos'

/**
 * Editorial client wall. Shows the official brand logo when a file exists in
 * src/assets/clients/<slug>.<ext>; otherwise shows the client name as text.
 *
 * Logos are shown in a restrained monochrome treatment by default and return to
 * their original brand colour on hover / focus. Proportions are always
 * preserved (object-contain, no crop/stretch), with a consistent cell height
 * across the grid.
 */
export default function ClientGrid({ clients }) {
  return (
    <ul className="grid grid-cols-2 gap-px border border-lightblue bg-lightblue sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {clients.map((c, i) => {
        const logo = clientLogo(c.slug)
        return (
          <Reveal as="li" key={c.slug} delay={(i % 5) * 0.03} className="group bg-white">
            <div className="flex h-28 items-center justify-center px-5 py-6 sm:h-32 sm:px-6">
              {logo ? (
                <img
                  src={logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto max-w-full object-contain opacity-60 grayscale transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
                />
              ) : (
                <span className="text-center font-display text-base font-bold uppercase leading-tight tracking-tightest text-slate transition-colors duration-300 group-hover:text-blue sm:text-lg">
                  {c.name}
                </span>
              )}
            </div>
          </Reveal>
        )
      })}
    </ul>
  )
}
