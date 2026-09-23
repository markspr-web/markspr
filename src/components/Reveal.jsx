import { m, useReducedMotion } from 'framer-motion'
import { useMotionTier } from '../hooks/useMotionTier'

/** Default vertical travel per tier — editorial on desktop, quieter as screens shrink. */
const TIER_Y = { desktop: 26, tablet: 18, mobile: 12 }

/**
 * Flat 2D reveal — opacity + small vertical slide only. No 3D transforms.
 * Uses `m` (LazyMotion) to keep the animation bundle small. Pass `y` to
 * override the distance outright; otherwise it scales down automatically on
 * tablet/mobile so the motion stays subtle on smaller screens.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y,
  className = '',
  once = true,
  amount = 0.15,
  ...rest
}) {
  const reduce = useReducedMotion()
  const tier = useMotionTier()
  const distance = y ?? TIER_Y[tier]
  const MotionTag = m[as] || m.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
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
