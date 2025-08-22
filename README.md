
# Dark Digital — Salla Twilight Theme

Pro-level dark mode theme optimized for **digital products** (instant downloads). RTL/LTR ready with editable settings.

## What’s inside
- `twilight.json` — theme settings, components (digital hero, feature cards, testimonials)
- `layouts/master.twig` — global layout, dark/light toggle
- `pages/…` — home, listing, product, cart, thank-you, orders
- `components/…` — header, footer, home sections
- `assets/styles.css` — CSS variables for dark and light themes
- `assets/app.js` — client theme toggle + small helpers
- `locales/en.json`, `locales/ar.json` — i18n

## Quick start (Salla CLI)
1. Install Salla CLI (see Salla docs): `npm i -g @salla.sa/cli` (or the current package name in docs)
2. Authenticate and link to a dev store: `salla login`
3. In this folder, run: `salla theme preview` to hot-reload
4. When ready: `salla theme package` then upload in Partners Portal

### Notes
- Dark mode is controlled by the setting `dark_mode` and saved locally by the toggle button.
- Accent color & fonts are fully customizable in settings.
- Replace placeholders with your branding, and add more components in `twilight.json`.
- Web Components used: `salla-products-list`, `salla-quick-buy`, `salla-product-availability`, `salla-user-menu`, `salla-search`, `salla-orders`.

## Custom fields mapping (optional)
If you store metadata like **License**, **File type**, **Version** as product custom fields, they’ll render automatically in the product page (see `pages/product/single.twig`).

## Ready for marketplace
- Responsive, accessible contrast, RTL/LTR
- Editable sections and colors
- Digital-first UX for downloads
