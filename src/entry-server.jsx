// Build-time render entry used by scripts/prerender.mjs — never shipped to the
// browser. Renders one route to HTML and returns it with the head that route's
// <Seo> resolved, so every page is served as real, crawlable HTML.
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Writable } from 'node:stream'
import App from './App.jsx'
import { ssrHead } from './components/Seo.jsx'

export function render(url) {
  ssrHead.current = null
  return new Promise((resolve, reject) => {
    let html = ''
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk
        cb()
      },
    })
    sink.on('finish', () => resolve({ html, head: ssrHead.current }))

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <LazyMotion features={domAnimation} strict>
            <App />
          </LazyMotion>
        </StaticRouter>
      </React.StrictMode>,
      {
        // Wait for every lazy route chunk so the output is the full page.
        onAllReady: () => pipe(sink),
        onShellError: reject,
        onError: reject,
      },
    )
  })
}
