import { useEffect } from 'react'
import { absUrl, ogImage, company, organizationSchema, websiteSchema } from '../data/site'

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMeta(attr, key) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove()
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Resolves the full head for a route: title, [attr, key, content] meta tuples,
 * canonical URL and the JSON-LD graph. Shared by the runtime head manager
 * below and the build-time prerender (scripts/prerender.mjs), so the static
 * HTML and the live page always carry the same tags.
 */
export function buildHead({
  title,
  description,
  path = '/',
  keywords,
  noindex = false,
  type = 'website',
  schema = [],
}) {
  const url = absUrl(path)
  const meta = [
    ['name', 'description', description],
    ['name', 'robots', noindex ? 'noindex, follow' : 'index, follow'],
    ['name', 'keywords', keywords],
    ['property', 'og:type', type],
    ['property', 'og:site_name', company.name],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:url', url],
    ['property', 'og:image', ogImage],
    ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'],
    ['property', 'og:locale', 'en_IN'],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
    ['name', 'twitter:image', ogImage],
  ]

  // JSON-LD: base graph (Organization + WebSite) + page-specific nodes
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': `https://markspr.com/#website` },
        about: { '@id': `https://markspr.com/#organization` },
        inLanguage: 'en-IN',
      },
      ...schema,
    ],
  }

  return { title, meta, canonical: url, jsonld }
}

/**
 * Set during the build-time prerender: each page's <Seo> writes its resolved
 * head here so scripts/prerender.mjs can inline it into the static HTML.
 */
export const ssrHead = { current: null }

/**
 * Per-route SEO head manager. Sets title, description, keywords, robots,
 * canonical, Open Graph, Twitter card and JSON-LD structured data.
 *
 * @param {string}  title        full <title> text
 * @param {string}  description  meta description
 * @param {string}  path         route path, e.g. "/about"
 * @param {string}  [keywords]   comma-separated keywords
 * @param {boolean} [noindex]    emit "noindex, follow"
 * @param {string}  [type]       og:type (default "website")
 * @param {object[]}[schema]     extra JSON-LD nodes (WebPage/Service/Event/BreadcrumbList…)
 */
export default function Seo(props) {
  if (import.meta.env.SSR) ssrHead.current = buildHead(props)

  const { title, description, path, keywords, noindex, type, schema = [] } = props

  useEffect(() => {
    const head = buildHead(props)

    document.title = head.title
    for (const [attr, key, content] of head.meta) {
      if (content) upsertMeta(attr, key, content)
      else removeMeta(attr, key)
    }
    upsertLink('canonical', head.canonical)

    // Drop the build-time static JSON-LD once the runtime graph is in place.
    document.head
      .querySelectorAll('script[type="application/ld+json"]:not([data-seo])')
      .forEach((n) => n.remove())

    let script = document.head.querySelector('script[data-seo="jsonld"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo', 'jsonld')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(head.jsonld)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, keywords, noindex, type, JSON.stringify(schema)])

  return null
}

/** Build a schema.org BreadcrumbList from [{ name, path }] items. */
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: absUrl(it.path) } : {}),
    })),
  }
}
