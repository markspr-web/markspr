// Prerender every route to static HTML after `vite build`.
//   npm run build   (runs this automatically)
//
// Search engines and link previews then get each page's real content, title,
// description, canonical and JSON-LD in the initial HTML instead of an empty
// <div id="root">. The browser hydrates the markup (see src/main.jsx).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const { services, events } = await import(pathToFileURL(resolve(root, 'src/data/site.js')).href)

const routes = [
  '/',
  '/about',
  '/services',
  '/public-relations',
  '/events',
  '/network',
  '/clients',
  '/contact',
  ...services.map((s) => `/services/${s.slug}`),
  ...events.map((e) => `/events/${e.slug}`),
]

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/

const esc = (v) =>
  String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headHtml({ title, meta, canonical, jsonld }) {
  return [
    `<title>${esc(title)}</title>`,
    ...meta.filter(([, , c]) => c).map(([a, k, c]) => `<meta ${a}="${k}" content="${esc(c)}" />`),
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<script type="application/ld+json" data-seo="jsonld">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

for (const route of routes) {
  const { html, head } = await render(route)
  if (!head) throw new Error(`No <Seo> rendered for ${route}`)

  const page = template
    .replace(SEO_BLOCK, headHtml(head))
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${route}">${html}</div>`)

  const file = route === '/' ? resolve(dist, 'index.html') : resolve(dist, `.${route}/index.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page)
}

rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${routes.length} routes`)
