import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
)

// Pages are prerendered at build time (scripts/prerender.mjs). Hydrate only when
// the static HTML is for the URL actually being viewed — the SPA fallback serves
// the home page's HTML for unknown paths, which must be rendered fresh instead.
const trim = (p) => p.replace(/\/+$/, '') || '/'
const prerendered = container.dataset.prerendered

if (prerendered && trim(prerendered) === trim(window.location.pathname)) {
  ReactDOM.hydrateRoot(container, app)
} else {
  container.textContent = ''
  ReactDOM.createRoot(container).render(app)
}
