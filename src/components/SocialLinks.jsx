import { Youtube, Instagram, Linkedin } from 'lucide-react'
import { socialLinks } from '../data/site'

const icons = { youtube: Youtube, instagram: Instagram, linkedin: Linkedin }

/**
 * Row of social profile links. `tone` picks the colour treatment for the
 * surface it sits on.
 */
export default function SocialLinks({ tone = 'dark', size = 20, className = '' }) {
  const base =
    tone === 'dark'
      ? 'border-white/20 text-lightblue hover:border-blue hover:text-blue'
      : 'border-lightblue text-slate hover:border-blue hover:text-blue'

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ platform, label, href }) => {
        const Icon = icons[platform]
        return (
          <li key={platform}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Marks Media Communication on ${label}`}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${base}`}
            >
              {Icon ? <Icon size={size} aria-hidden="true" /> : label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
