# Marks Media Communication

A complete rebuild of the Marks Media Communication website — a Public Relations
and Advertising agency in the Deccan region of India with more than 40 years of
experience.

Premium, editorial, flat (strictly 2D — no 3D), typography-led, and designed to
work with **no photography**. Image areas are left as clean placeholders for the
client to fill in later.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom brand palette + type scale)
- **React Router 6** — clean SEO-friendly routes, route-based code splitting (`React.lazy`)
- **Framer Motion** — flat 2D animation only (fade / slide / line reveal / width), loaded via
  `LazyMotion` + `domAnimation` to keep the bundle small
- **Lucide React** (icons, tree-shaken)
- Lightweight custom `<Seo>` head manager — per-route `<title>`, description, keywords, robots,
  canonical, Open Graph, Twitter card and JSON-LD. No SSR dependency.

### Build output

18 route chunks (2–12 kB each) behind a ~89 kB gzip vendor bundle. Fonts are `display=swap`
with `preconnect`; only three families, four Archivo weights.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Brand palette

| Token        | Hex       | Use |
|--------------|-----------|-----|
| `navy`       | `#0B2433` | Hero, dark sections, footer, headings on light |
| `blue`       | `#0088B8` | CTAs, links, numbers, icons, active nav, highlights |
| `bluehover`  | `#006F97` | Button / interaction hover |
| `red`        | `#D71920` | Tiny accent only — dots, thin lines, ticks |
| `white`      | `#FFFFFF` | Light backgrounds, dark-section text |
| `offwhite`   | `#F5F7F8` | Services, network, secondary sections |
| `lightblue`  | `#D9E2E6` | Text on dark, hairline rules |
| `slate`      | `#5B6368` | Body copy, descriptions |

## Routes

```
/                         Home (introduction + links to every section)
/about
/services                 Service index
/services/:slug           8 service detail pages (media-relations, press-release,
                          brand-management, corporate-pr, product-launch, advertising,
                          event-management, celebrity-management)
/public-relations
/events                   Filterable events archive
/events/:slug             18 event detail pages
/network
/clients
/contact
*                         Custom 404 (noindex)
```

Legacy `*.php` paths from the old site (`/about.php`, `/services.php`, …) client-redirect
to the new routes.

### SEO

- Unique `<title>` (≈40–65 chars) and meta description per route
- `meta[name=robots]` (`index, follow`; `noindex, follow` on 404), `meta[name=keywords]`,
  `link[rel=canonical]` (no trailing slash) on every page
- Open Graph + `summary_large_image` Twitter card, using `public/og-image.png` (1200×630,
  the logo on brand navy — an original asset, no old-site photos)
- One JSON-LD `@graph` per page: `Organization`/`LocalBusiness` (with `sameAs` → YouTube,
  Instagram, LinkedIn) + `WebSite` + `WebPage`, plus page-specific `BreadcrumbList`,
  `Service`, `OfferCatalog`, `Event`, `ItemList`, `AboutPage`, `ContactPage`
- Visible breadcrumb trail on every interior page
- `public/robots.txt` + `public/sitemap.xml` (34 URLs — all indexable pages, no 404 /
  redirects / duplicates). Regenerate after adding a service or event: `npm run sitemap`.
- One `<h1>` per page; `<h2>`/`<h3>` used for structure, not styling

## Content

All copy and facts come from the previous site (markspr.com) — Home, About,
Services, Public Relations, Events, Clients, Contact. Wording was lightly edited
for grammar and clarity only; no claims, statistics, clients, events or contact
details were invented. Everything editable lives in
[`src/data/site.js`](src/data/site.js) — including the `socialLinks` array (YouTube,
Instagram, LinkedIn), which feeds the footer, the contact page and the `sameAs`
structured data.

## Client logos

`src/pages/Clients.jsx` and the home client strip render **official brand logos**
when a file exists in [`src/assets/clients/`](src/assets/clients/README.md),
named after the client's `slug` (`dabur.svg`, `bajaj-electronics.png`, …).
`src/data/clientLogos.js` auto-discovers them with `import.meta.glob` — no code
changes needed to add one. Any client without a file falls back to its name as
text (the current state — the folder ships empty). Logos render monochrome and
return to brand colour on hover; proportions are always preserved. See that
folder's README for the full filename list and the do-not-alter rules.

## Assets

- `public/logo.jpg` — the original Marks Media logo, unchanged (only surrounding
  whitespace trimmed). Used in the navbar and footer.
- `public/favicon.ico`, `public/favicon-64.png` — derived from the logo mark.
- `public/robots.txt`, `public/sitemap.xml` — update the domain if it changes.

## Deployment notes

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so client-side
routes resolve on refresh. For other hosts, add an SPA fallback to `index.html`.

The canonical URLs, sitemap and Organization schema in `index.html` currently
point at `https://markspr.com` — change these if the site moves to a new domain.
