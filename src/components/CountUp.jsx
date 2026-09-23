import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Animates a stat's leading number up from 0 once it scrolls into view, then
 * appends whatever followed the digits verbatim (e.g. "40+" → counts to 40,
 * keeps the "+"; "100000++++" → counts to 100000, keeps "++++"). A value with
 * no leading digits (e.g. "Deccan", "PR + Ads") is rendered as plain text.
 * Skips the animation under prefers-reduced-motion.
 */
export default function CountUp({ value, duration = 1.2 }) {
  const match = /^([\d,]+)(.*)$/.exec(value)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : null
  const [display, setDisplay] = useState(match ? '0' : value)

  useEffect(() => {
    if (target === null || !inView) return
    if (reduce) {
      setDisplay(target.toLocaleString())
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target).toLocaleString())
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, target, duration])

  if (target === null) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {display}
      {match[2]}
    </span>
  )
}
