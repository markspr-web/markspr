// Each service has 5 photo slots.
// Put files in src/assets/services/<slug>/01.jpg ... 05.jpg (jpg, jpeg, png, webp).
// A slot with no file shows an empty numbered placeholder.
// Old single files (src/assets/services/<slug>.jpeg) still work as slot 01.

export const SLOT_COUNT = 5

// Optional alt text per slot, e.g. 'media-relations': { 3: 'Press conference at The Westin' }
const altOverrides = {}

const folderModules = import.meta.glob('../assets/services/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const legacyModules = import.meta.glob('../assets/services/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const bySlug = {}
for (const path in folderModules) {
  const parts = path.split('/')
  const file = parts.pop()
  const slug = parts.pop().toLowerCase()
  const n = parseInt(file.replace(/\.[^.]+$/, ''), 10)
  if (!Number.isInteger(n) || n < 1 || n > SLOT_COUNT) continue
  ;(bySlug[slug] ??= {})[n] = folderModules[path]
}

const legacyBySlug = {}
for (const path in legacyModules) {
  const stem = path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()
  legacyBySlug[stem] = legacyModules[path]
}

/** Always returns 5 entries: { n, src (or null), alt } */
export function servicePhotos(slug, title = '', companyName = '') {
  const slots = bySlug[slug] ?? {}
  return Array.from({ length: SLOT_COUNT }, (_, i) => {
    const n = i + 1
    const src = slots[n] ?? (n === 1 ? legacyBySlug[slug] : null) ?? null
    const alt = altOverrides[slug]?.[n] ?? `${title} — work by ${companyName} (photo ${n})`
    return { n, src, alt }
  })
}

/** First real photo (used by Services, Network, PublicRelations pages and JSON-LD), or null */
export function servicePhoto(slug) {
  const first = servicePhotos(slug).find((p) => p.src)
  return first ? first.src : null
}

export const servicePhotoCount =
  Object.values(bySlug).reduce((sum, s) => sum + Object.keys(s).length, 0) +
  Object.keys(legacyBySlug).length