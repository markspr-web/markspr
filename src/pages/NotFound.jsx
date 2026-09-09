import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { nav, seo } from '../data/site'

export default function NotFound() {
  return (
    <>
      <Seo
        title={seo.notFound.title}
        description={seo.notFound.description}
        path="/404"
        noindex
      />
      <section className="bg-navy">
        <div className="container-page flex min-h-[70vh] flex-col justify-center py-24">
          <p className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            <span className="eyebrow text-lightblue">Error 404</span>
          </p>
          <h1 className="display-hero mt-8 text-white" aria-label="404 — Page not found">
            <span className="block" aria-hidden="true">
              404
            </span>
            <span className="block text-blue" aria-hidden="true">
              Page not found
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-lightblue">
            The page you were looking for has moved or no longer exists. Try one of these instead.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="btn btn-primary">
              Back to home
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/services" className="btn btn-ghost-light">
              Explore services
            </Link>
            <Link to="/contact" className="btn btn-ghost-light">
              Contact us
            </Link>
          </div>

          <nav aria-label="All pages" className="mt-16 flex flex-wrap gap-x-6 gap-y-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-lightblue transition-colors hover:text-blue"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  )
}
