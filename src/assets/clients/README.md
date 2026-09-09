# Client logos

Drop the **official** brand logo for each client into this folder. The Clients
page ([`/clients`](../../pages/Clients.jsx)) and the home client strip pick them
up automatically — no code changes needed. Any client without a file here keeps
showing as text.

## Current status

28 of the 30 clients have a logo here (`<slug>.png`). Sources: official brand
sites where reachable (Dabur, Neeru's, Mebaz, Pharmexcil, HITEX, Bajaj
Electronics, Ceramic Pro); the remainder are the exact logos Marks Media used on
markspr.com, normalised (trimmed, flattened, ~220px tall).

Still text-only — replace with a real file when a verified logo is available:

- `coupon` — client not identifiable from public sources
- `sunshine-hospitals` — sunshinehospitals.com blocked automated fetches

Lower-quality files worth re-sourcing from the client (small or baked-in
background): `glam-fashion-week`, `hollywood-footwear`, `jaipur-jewels`,
`dabur` (only a 152px favicon-grade PNG was reachable).

## Rules

- Use the official / current logo only. **Do not** recreate, redraw, generate,
  stretch, distort, rotate or crop a logo.
- Prefer **SVG**. If only raster is available, use a clean PNG or WEBP at ~2×
  the display size (display height ≈ 56px, so ~112–160px tall), transparent
  background, then optimise it (e.g. `svgo`, `oxipng`, `squoosh`) without
  quality loss.
- The grid shows logos in monochrome by default and reveals the original brand
  colour on hover — so supply the **full-colour** logo, not a pre-greyed one.
- If a logo cannot be reliably obtained or verified, leave it out — the text
  fallback is intentional.

## Filenames

Name the file after the client's `slug` (from `src/data/site.js`). Accepted
extensions: `.svg` `.png` `.webp` `.jpg`.

```
coupon.svg
hytex.svg
dabur.svg
neerus.svg
manepally.svg
sunshine-hospitals.svg
mebaz.svg
bajaj-electronics.svg
bkt.svg
ceramic-pro.svg
creamstone.svg
desire-hyderabad.svg
forum-sujana-mall.svg
glam-fashion-week.svg
gni.svg
hi-life-exhibition.svg
hiya-jewellers.svg
hollywood-footwear.svg
iioo.svg
india-med-expo.svg
jahapanah.svg
jaipur-jewels.svg
kaira.svg
kalamandir-foundation.svg
kalasha.svg
ksr.svg
kwc.svg
manepally-jewellers.svg
pharmexcil.svg
pmj.svg
```

Alt text is generated automatically as `"<Client Name> logo"`.
