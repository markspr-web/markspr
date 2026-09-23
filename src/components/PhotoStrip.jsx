import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { galleryPhoto } from '../data/galleryPhotos'
import Reveal from './Reveal'
import ImageReveal from './ImageReveal'
import { useMotionTier } from '../hooks/useMotionTier'

/**
 * The strip's first (larger) tile only — a scroll-linked drift, reserved for
 * this one "selected" photo per row rather than every tile. Off on mobile and
 * under reduced motion; halved on tablet.
 */
function ParallaxLayer({ children, className }) {
  const reduce = useReducedMotion()
  const tier = useMotionTier()
  const frameRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start end', 'end start'] })
  const range = reduce || tier === 'mobile' ? 0 : tier === 'tablet' ? 3 : 6
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`])
  const scale = 1 + range / 50

  return (
    <div ref={frameRef} className={className}>
      <m.div className="h-full w-full" style={{ scale, y }}>
        {children}
      </m.div>
    </div>
  )
}

function PhotoTile({ it, i, aspect, isHero }) {
  const frameClass = `overflow-hidden ${aspect} ${isHero ? 'max-sm:aspect-[16/9]' : ''}`
  const img = (
    <img
      src={it.src}
      alt={it.alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: it.pos ?? '50% 20%' }}
      className="block h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05] motion-reduce:transition-none"
    />
  )

  return (
    <Reveal
      delay={Math.min(i, 5) * 0.06}
      className={`group overflow-hidden border border-lightblue bg-offwhite transition-shadow duration-300 hover:shadow-lg ${isHero ? 'col-span-2 sm:col-span-1' : ''}`}
    >
      {isHero ? (
        <ParallaxLayer className={frameClass}>{img}</ParallaxLayer>
      ) : (
        <div className={frameClass}>
          <ImageReveal delay={Math.min(i, 5) * 0.06}>{img}</ImageReveal>
        </div>
      )}
    </Reveal>
  )
}

/**
 * Full-width, full-colour photo row. Tiles share the container width equally and
 * crop to a common aspect ratio with `object-cover` (never stretched), so a row
 * always reaches both edges of the page grid instead of leaving dead space.
 * `items` is [{ slug, alt, pos?, src? }] — `pos` is a CSS object-position (default
 * keeps the top of the frame, where faces are). `aspect` is a Tailwind aspect
 * class. `src`, when given, is used directly (e.g. an event or service photo
 * imported elsewhere) instead of looking `slug` up in src/assets/gallery/ — a
 * `slug` is still required as the React key. An item that resolves to no image
 * is skipped silently. Only the first (larger) tile carries scroll parallax —
 * the rest use a one-shot fade + subtle scale-settle on entry.
 */
export default function PhotoStrip({ items, aspect = 'aspect-[4/3]', className = '' }) {
  const tiles = items.map((it) => ({ ...it, src: it.src ?? galleryPhoto(it.slug) })).filter((it) => it.src)
  if (tiles.length === 0) return null

  const cols =
    tiles.length >= 3 ? 'grid-cols-2 sm:grid-cols-3' : tiles.length === 2 ? 'grid-cols-2' : 'grid-cols-1'

  return (
    <div className={`grid gap-3 sm:gap-4 ${cols} ${className}`}>
      {tiles.map((it, i) => (
        <PhotoTile key={it.slug} it={it} i={i} aspect={aspect} isHero={tiles.length >= 3 && i === 0} />
      ))}
    </div>
  )
}
