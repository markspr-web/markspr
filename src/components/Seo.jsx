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
export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  noindex = false,
  type = 'website',
  schema = [],
}) {
  useEffect(() => {
    const url = absUrl(path)

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    if (keywords) upsertMeta('name', 'keywords', keywords)
    else removeMeta('name', 'keywords')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', company.name)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    // JSON-LD: base graph (Organization + WebSite) + page-specific nodes
    const graph = [
      organizationSchema,
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': `https://markspr.com/#website` },
        inLanguage: 'en',
      },
      ...schema,
    ]
    const ld = { '@context': 'https://schema.org', '@graph': graph }

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
    script.textContent = JSON.stringify(ld)
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
