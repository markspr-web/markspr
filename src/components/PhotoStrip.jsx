import { galleryPhoto } from '../data/galleryPhotos'
import Reveal from './Reveal'

/**
 * Full-width, full-colour photo row. Tiles share the container width equally and
 * crop to a common aspect ratio with `object-cover` (never stretched), so a row
 * always reaches both edges of the page grid instead of leaving dead space.
 * `items` is [{ slug, alt, pos? }] — `pos` is a CSS object-position (default keeps
 * the top of the frame, where faces are). `aspect` is a Tailwind aspect class.
 * A slug with no matching file in src/assets/gallery/ is skipped silently.
 */
export default function PhotoStrip({ items, aspect = 'aspect-[4/3]', className = '' }) {
  const tiles = items.map((it) => ({ ...it, src: galleryPhoto(it.slug) })).filter((it) => it.src)
  if (tiles.length === 0) return null

  const cols =
    tiles.length >= 3 ? 'grid-cols-2 sm:grid-cols-3' : tiles.length === 2 ? 'grid-cols-2' : 'grid-cols-1'

  return (
    <div className={`grid gap-3 sm:gap-4 ${cols} ${className}`}>
      {tiles.map((it, i) => (
        <Reveal
          key={it.slug}
          delay={i * 0.05}
          className={`overflow-hidden border border-lightblue bg-offwhite ${
            tiles.length >= 3 && i === 0 ? 'col-span-2 sm:col-span-1' : ''
          }`}
        >
          <img
            src={it.src}
            alt={it.alt}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: it.pos ?? '50% 20%' }}
            className={`block h-full w-full object-cover ${aspect} ${
              tiles.length >= 3 && i === 0 ? 'max-sm:aspect-[16/9]' : ''
            }`}
          />
        </Reveal>
      ))}
    </div>
  )
}
