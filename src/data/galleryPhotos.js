// Auto-discovers general "impact" photos dropped into src/assets/gallery/.
//
// Unlike eventPhotos / servicePhotos (which key off a specific slug elsewhere
// in site.js), these are loose photos from the client's own record, used as
// full-colour accents on pages that otherwise carry no photography (Home,
// About, Public Relations, Network, Clients). Drop a file into
// src/assets/gallery/<slug>.jpg and reference that slug from PhotoStrip.

const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
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

/** Returns the bundled URL for a gallery photo, or null when none is available. */
export function galleryPhoto(slug) {
  return bySlug[slug] ?? null
}
