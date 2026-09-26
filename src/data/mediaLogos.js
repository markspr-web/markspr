// Auto-discovers media/press logos dropped into src/assets/media/.
//
// Drop a file named after the outlet's `slug` (see `media` in site.js), e.g.
//   src/assets/media/the-hindu.webp
//   src/assets/media/times-of-india.svg
// and it is picked up automatically — no code changes needed. SVG is preferred;
// PNG / WEBP / JPG are also accepted. When no file matches an outlet the name is
// shown as text instead.

const modules = import.meta.glob('../assets/media/*.{svg,png,webp,jpg,jpeg}', {
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

/** Returns the bundled URL for a media outlet's logo, or null when none is available. */
export function mediaLogo(slug) {
  return bySlug[slug] ?? null
}
