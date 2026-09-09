// Auto-discovers official client logos dropped into src/assets/clients/.
//
// Drop a file named after the client's `slug` (see `clients` in site.js), e.g.
//   src/assets/clients/dabur.svg
//   src/assets/clients/bajaj-electronics.png
// and it is picked up automatically — no code changes needed. SVG is preferred;
// PNG / WEBP / JPG are also accepted. When no file matches a client, the Clients
// grid falls back to showing that client's name as text.

const modules = import.meta.glob('../assets/clients/*.{svg,png,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const bySlug = {}
for (const path in modules) {
  const stem = path
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
  bySlug[stem] = modules[path]
}

/** Returns the bundled URL for a client's logo, or null when none is available. */
export function clientLogo(slug) {
  return bySlug[slug] ?? null
}

/** Number of client logo files currently present. */
export const clientLogoCount = Object.keys(bySlug).length
