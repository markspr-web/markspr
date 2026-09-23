import { useEffect, useRef, useState } from 'react'

const MOBILE_QUERY = '(max-width: 1023px)'
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'

const SOURCES = {
  desktop: { src: '/video/hero-desktop.mp4', poster: '/video/hero-desktop-poster.jpg' },
  mobile: { src: '/video/hero-mobile.mp4', poster: '/video/hero-mobile-poster.jpg' },
}

/**
 * Full-bleed looping background video for a hero. Render it as the first child of a
 * `relative isolate overflow-hidden` section; it fills the section, sits behind the
 * content, and is inert (no pointer events, hidden from assistive tech).
 *
 * Only ONE file is ever requested: the mobile clip below 1024px, the desktop clip above.
 * The poster paints immediately, the video fades in once it is actually playing, and
 * users who prefer reduced motion get the still poster only.
 */
export default function HeroVideo() {
  const ref = useRef(null)
  const [mobile, setMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  const [reduced, setReduced] = useState(() => window.matchMedia(REDUCED_QUERY).matches)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const rq = window.matchMedia(REDUCED_QUERY)
    const onMq = (e) => setMobile(e.matches)
    const onRq = (e) => setReduced(e.matches)
    mq.addEventListener('change', onMq)
    rq.addEventListener('change', onRq)
    return () => {
      mq.removeEventListener('change', onMq)
      rq.removeEventListener('change', onRq)
    }
  }, [])

  const { src, poster } = SOURCES[mobile ? 'mobile' : 'desktop']

  // Switching clips (viewport crossed the breakpoint) restarts from the poster.
  useEffect(() => {
    setPlaying(false)
    const v = ref.current
    if (!v || reduced) return
    const kick = () => v.play?.().catch(() => {})
    kick()
    // Some browsers defer autoplay until the tab is visible / data is ready.
    document.addEventListener('visibilitychange', kick)
    v.addEventListener('canplay', kick)
    return () => {
      document.removeEventListener('visibilitychange', kick)
      v.removeEventListener('canplay', kick)
    }
  }, [src, reduced])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-navy">
      <img
        src={poster}
        alt=""
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
      />
      {!reduced && (
        <video
          key={src}
          ref={ref}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[50%_25%] transition-opacity duration-700 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {/* Navy scrim: keeps type crisp while the footage stays visible. */}
      <div className="absolute inset-0 bg-navy/70" />
    </div>
  )
}
