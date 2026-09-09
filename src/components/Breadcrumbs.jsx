import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Visible breadcrumb trail. `items` is [{ name, path }]; the last item is the
 * current page and is rendered as plain text with aria-current.
 */
export default function Breadcrumbs({ items = [], dark = false }) {
  if (items.length < 2) return null
  const muted = dark ? 'text-lightblue/70' : 'text-slate'
  const strong = dark ? 'text-white' : 'text-navy'

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.14em]">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.path || it.name} className="flex items-center gap-2">
              {last || !it.path ? (
                <span className={`font-display font-semibold ${last ? strong : muted}`} aria-current={last ? 'page' : undefined}>
                  {it.name}
                </span>
              ) : (
                <Link
                  to={it.path}
                  className={`font-display font-semibold ${muted} transition-colors hover:text-blue`}
                >
                  {it.name}
                </Link>
              )}
              {!last && <ChevronRight size={13} className={muted} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
