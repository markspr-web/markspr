import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMotionTier } from '../hooks/useMotionTier'

/**
 * Wrapper for a single large "hero-weight" photograph — the one big photo on
 * a service or event detail page. Combines a gentle scroll-linked vertical
 * drift with a one-shot fade + subtle scale-settle the first time it enters
 * view. Deliberately reserved for these standalone feature photos, not grid
 * thumbnails — the brief calls for parallax on selected large photos only.
 * Off on mobile and under prefers-reduced-motion; halved on tablet.
 */
export default function FeaturePhoto({ children, className = '' }) {
  const reduce = useReducedMotion()
  const tier = useMotionTier()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const range = reduce || tier === 'mobile' ? 0 : tier === 'tablet' ? 6 : 12
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <div
      ref={ref}
      className={`flex w-full justify-center overflow-hidden border border-lightblue bg-offwhite py-6 ${className}`}
    >
      <m.div
        style={{ y }}
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
        whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </div>
  )
}
