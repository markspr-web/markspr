import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

// Route-based code splitting — each page is its own chunk.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const PublicRelations = lazy(() => import('./pages/PublicRelations'))
const Events = lazy(() => import('./pages/Events'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const Network = lazy(() => import('./pages/Network'))
const Clients = lazy(() => import('./pages/Clients'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="eyebrow text-slate">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="public-relations" element={<PublicRelations />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="network" element={<Network />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />

          {/* Legacy .php paths from the previous site → 301-style client redirects */}
          <Route path="index.php" element={<Navigate to="/" replace />} />
          <Route path="about.php" element={<Navigate to="/about" replace />} />
          <Route path="services.php" element={<Navigate to="/services" replace />} />
          <Route path="public-relations.php" element={<Navigate to="/public-relations" replace />} />
          <Route path="events.php" element={<Navigate to="/events" replace />} />
          <Route path="clients.php" element={<Navigate to="/clients" replace />} />
          <Route path="contact.php" element={<Navigate to="/contact" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
