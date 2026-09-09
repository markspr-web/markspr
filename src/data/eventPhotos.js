// Auto-discovers event photos dropped into src/assets/events/.
//
// Drop a file named after the event's `slug` (see `events` in site.js), e.g.
//   src/assets/events/lic-press-meet.jpg
// and it is picked up automatically — no code changes needed. When no file
// matches an event, the Events list and detail page fall back to a text-only
// placeholder.
//
// Photos are from Marks Media Communication's own record of the event (sourced
// from markspr.com). They are shown in a restrained monochrome treatment by
// default and return to full colour on hover / focus.

const modules = import.meta.glob('../assets/events/*.{jpg,jpeg,png,webp}', {
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

/** Returns the bundled URL for an event's photo, or null when none is available. */
export function eventPhoto(slug) {
  return bySlug[slug] ?? null
}

/** Number of event photo files currently present. */
export const eventPhotoCount = Object.keys(bySlug).length
