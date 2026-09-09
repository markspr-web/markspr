import { m, useReducedMotion } from 'framer-motion'

/**
 * Flat 2D reveal — opacity + small vertical slide only. No 3D transforms.
 * Uses `m` (LazyMotion) to keep the animation bundle small.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 18,
  className = '',
  once = true,
  amount = 0.15,
}) {
  const reduce = useReducedMotion()
  const MotionTag = m[as] || m.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/** Thin horizontal rule that expands from the left on scroll into view. */
export function RevealLine({ className = '', dark = false, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <m.div
      className={`${dark ? 'bg-white/15' : 'bg-lightblue'} h-px w-full origin-left ${className}`}
      initial={reduce ? { opacity: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
