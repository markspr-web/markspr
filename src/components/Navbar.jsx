import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'border-b border-lightblue shadow-[0_1px_20px_rgba(11,36,51,0.06)]' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-4 lg:h-28">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Marks Media Communication — home">
            <img
              src="/logo.png"
              alt="Marks Media Communication — get the attention you deserve"
              width="464"
              height="460"
              className="h-16 w-auto lg:h-24"
            />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-display text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive ? 'text-blue' : 'text-navy hover:text-bluehover'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-white xl:hidden"
          >
            <nav className="container-page flex flex-col divide-y divide-lightblue py-2" aria-label="Mobile">
              {nav.map((item, i) => (
                <m.div
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-5 font-display text-2xl font-bold uppercase tracking-tightest ${
                        isActive ? 'text-blue' : 'text-navy'
                      }`
                    }
                  >
                    {item.label}
                    <ArrowRight size={20} className="text-blue" />
                  </NavLink>
                </m.div>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
