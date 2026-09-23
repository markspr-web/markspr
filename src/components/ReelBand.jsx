import { useState } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { galleryPhoto } from '../data/galleryPhotos'

function Reel({ reel, index }) {
  const [live, setLive] = useState(false)
  const href = `https://www.instagram.com/reel/${reel.id}/`
  const poster = galleryPhoto(reel.poster)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[9/16] w-full overflow-hidden border border-white/15 bg-navy">
        {live ? (
          <iframe
            src={`${href}embed/`}
            title={`Instagram reel ${index + 1}`}
            loading="lazy"
            allowFullScreen
            scrolling="no"
            className="absolute inset-0 h-full w-full border-0 bg-white"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLive(true)}
            aria-label={`Play Instagram reel ${index + 1}`}
            className="group absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue"
          >
            {poster && (
              <img
                src={poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            )}
            <span className="absolute inset-0 bg-navy/45 transition-colors group-hover:bg-navy/30" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-white transition-transform group-hover:scale-105">
                <Play size={24} fill="currentColor" aria-hidden="true" />
              </span>
            </span>
            <span className="eyebrow absolute bottom-4 left-4 text-white">Instagram Reel</span>
          </button>
        )}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-[0.14em] text-lightblue transition-colors hover:text-white"
      >
        Open on Instagram
        <ArrowUpRight size={14} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

/** Navy band of Instagram Reels. Each loads its embed only after the visitor presses play. */
export default function ReelBand({ reels, eyebrow = 'Reels', title }) {
  return (
    <section className="bg-navy">
      <div className="container-page py-20 lg:py-28">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
          <span className="eyebrow text-lightblue">{eyebrow}</span>
        </Reveal>
        <Reveal>
          <h2 className="display-lg max-w-3xl text-white">{title}</h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-sm gap-8 sm:mx-0 sm:max-w-none sm:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.06}>
              <Reel reel={r} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
