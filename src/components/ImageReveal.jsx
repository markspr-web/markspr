import { m, useReducedMotion } from 'framer-motion'
import { useMotionTier } from '../hooks/useMotionTier'

/** Starting scale per tier — a touch more restrained on smaller screens. */
const TIER_SCALE = { desktop: 1.04, tablet: 1.03, mobile: 1.02 }

/**
 * Photograph-specific entrance: a soft fade combined with a very subtle scale
 * settling to 1 (never a slide, never a crop change) — distinct from the
 * text/section `Reveal`, which moves on the Y axis instead. One-shot,
 * IntersectionObserver-driven via `whileInView`, GPU-only (opacity + scale).
 * Wrap the `<img>` (or its cropping frame) with this; it doesn't touch the
 * image's own hover-zoom class, so the two never fight over `transform`.
 */
export default function ImageReveal({ children, delay = 0, className = 'block h-full w-full', once = true, amount = 0.3 }) {
  const reduce = useReducedMotion()
  const tier = useMotionTier()
  const scale = TIER_SCALE[tier]

  return (
    <m.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
