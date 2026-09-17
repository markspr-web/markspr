// Auto-discovers service photos dropped into src/assets/services/.
//
// Drop a file named after the service's `slug` (see `services` in site.js), e.g.
//   src/assets/services/event-management.jpg
// and it is picked up automatically — no code changes needed. When no file
// matches a service, the service detail page falls back to a text-only layout.
//
// Photos are from Marks Media Communication's own record of client events
// (sourced from the client). Media Relations / Press Release share one photo,
// as do Corporate P.R / Advertising, since the client supplied one image
// covering both services in each pair.

const modules = import.meta.glob('../assets/services/*.{jpg,jpeg,png,webp}', {
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

/** Returns the bundled URL for a service's photo, or null when none is available. */
export function servicePhoto(slug) {
  return bySlug[slug] ?? null
}

/** Number of service photo files currently present. */
export const servicePhotoCount = Object.keys(bySlug).length
