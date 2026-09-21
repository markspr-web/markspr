import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Featured-video band: the YouTube thumbnail sits behind the section under a
 * navy overlay, with a "Watch full video" button that opens the video on YouTube.
 * `video` is { id, image, title } from src/data/videos.js.
 */
export default function VideoBand({ video }) {
  if (!video) return null
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={video.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/75" aria-hidden="true" />
      <div className="container-page py-24 lg:py-36">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
          <span className="eyebrow text-lightblue">Featured video</span>
        </Reveal>
        <Reveal>
          <h2 className="display-lg max-w-3xl text-white">{video.title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Watch full video
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens on YouTube in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
