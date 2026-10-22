import Reveal from './Reveal'
import ImageReveal from './ImageReveal'

/**
 * Photo gallery for a service page (5 slots).
 * Photos are shown at their own natural proportions in two large columns —
 * nothing is cropped, so faces always stay fully visible.
 * Empty slots show a flat numbered placeholder.
 */
export default function ServiceGallery({ photos, caption }) {
  return (
    <figure>
      <div className="columns-1 gap-3 sm:columns-2 sm:gap-4">
        {photos.map((p, i) => {
          const label = String(p.n).padStart(2, '0')
          const delay = Math.min(i, 5) * 0.06

          if (!p.src) {
            return (
              <Reveal
                key={p.n}
                delay={delay}
                aria-hidden="true"
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <div className="flex aspect-[4/3] items-center justify-center border border-lightblue bg-offwhite">
                  <span className="text-xs uppercase tracking-[0.16em] text-slate/50">{label}</span>
                </div>
              </Reveal>
            )
          }

          return (
            <Reveal
              key={p.n}
              delay={delay}
              className="group mb-3 break-inside-avoid overflow-hidden border border-lightblue bg-offwhite transition-shadow duration-300 hover:shadow-lg sm:mb-4"
            >
              <ImageReveal className="block w-full">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full grayscale transition duration-500 ease-out will-change-transform group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:transition-none"
                />
              </ImageReveal>
            </Reveal>
          )
        })}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-slate">{caption}</figcaption>
      )}
    </figure>
  )
}