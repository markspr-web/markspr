import { galleryPhoto } from '../data/galleryPhotos'
import Reveal from './Reveal'

/**
 * Full-colour photo strip. Each tile sizes itself to its own photo (capped to
 * a modest max-height per breakpoint, aspect ratio preserved, no crop) — the
 * row wraps around however much width the photos actually need instead of
 * stretching them across fixed-width grid columns, which is what was leaving
 * large dead gaps beside small photos.
 * `items` is [{ slug, alt }]; a slug with no matching file in
 * src/assets/gallery/ is skipped silently.
 */
export default function PhotoStrip({ items, className = '' }) {
  const tiles = items.map((it) => ({ ...it, src: galleryPhoto(it.slug) })).filter((it) => it.src)
  if (tiles.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${className}`}>
      {tiles.map((it, i) => (
        <Reveal key={it.slug} delay={i * 0.05} className="overflow-hidden border border-lightblue">
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            decoding="async"
            className="block h-auto max-h-40 w-auto sm:max-h-56 lg:max-h-72"
          />
        </Reveal>
      ))}
    </div>
  )
}
