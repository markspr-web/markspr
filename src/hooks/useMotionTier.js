import { useEffect, useState } from 'react'

/**
 * Coarse viewport tier used to scale animation distance/intensity — full
 * editorial movement on desktop, a quieter version on tablet, and minimal
 * movement on phones (per the site's animation brief: reduce distance on
 * tablet, prioritise performance and small translates only on mobile).
 * Reacts to resize/orientation change via matchMedia (no scroll listeners).
 */
export function useMotionTier() {
  const [tier, setTier] = useState('desktop')

  useEffect(() => {
    const mqTablet = window.matchMedia('(max-width: 1023px)')
    const mqMobile = window.matchMedia('(max-width: 639px)')

    const update = () => setTier(mqMobile.matches ? 'mobile' : mqTablet.matches ? 'tablet' : 'desktop')
    update()

    mqTablet.addEventListener('change', update)
    mqMobile.addEventListener('change', update)
    return () => {
      mqTablet.removeEventListener('change', update)
      mqMobile.removeEventListener('change', update)
    }
  }, [])

  return tier
}
