// Regenerate public/sitemap.xml from the site content.
//   node scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { services, events, siteUrl } from '../src/data/site.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const today = new Date().toISOString().slice(0, 10)

const urls = [
  ['/', 1.0],
  ['/about', 0.9],
  ['/services', 0.9],
  ['/public-relations', 0.9],
  ['/events', 0.8],
  ['/network', 0.7],
  ['/clients', 0.8],
  ['/contact', 0.8],
  ...services.map((s) => [`/services/${s.slug}`, 0.6]),
  ...events.map((e) => [`/events/${e.slug}`, 0.5]),
]

const body = urls
  .map(
    ([u, p]) =>
      `  <url>\n    <loc>${siteUrl}${u}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n    <priority>${p.toFixed(1)}</priority>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
console.log(`Wrote public/sitemap.xml — ${urls.length} URLs`)
