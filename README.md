# QuvionX Industries — Official Website

Official website source for [quvionxindia.com](https://quvionxindia.com). A responsive, dependency-free, static site featuring RoboSumo and RoboRace product lines and enquiry contact options.

## Project

- `index.html` — single-page company website; product content, contact details and SEO metadata
- `styles.css` — responsive UI styles (including narrow mobile layouts)
- `script.js` — mobile navigation, enquiry product selection, email/WhatsApp handoff
- `assets/quvionx-official-logo.png` — **official QuvionX brand emblem, original bytes preserved**
- `assets/robosumo.svg`, `assets/roborace.svg` — illustrative artwork, **not actual product photos**
- `robots.txt`, `sitemap.xml` — crawler discovery
- `_headers` — Cloudflare Pages security response headers
- `BRAND-MANIFEST.txt` — official logo integrity checksum
- `.gitignore` — excludes local credentials, caches and ZIP archives from Git

## Contact

- Location: Salem, Tamil Nadu, India
- Phone and WhatsApp: [+91 98434 30172](https://wa.me/919843430172)
- Email: [mahaananth.nivas@quvionxindia.com](mailto:mahaananth.nivas@quvionxindia.com)

## Local development

No dependency installation or build system is needed. Serve the repository root via a local web server, or open `index.html` for a basic preview.

On Windows 11, if Python is installed:

```powershell
py -m http.server 8000
```

Browse to `http://localhost:8000/`.

## Deployment: GitHub → Cloudflare Pages

- GitHub repository: [DreamInfer/quvionx-industries-website](https://github.com/DreamInfer/quvionx-industries-website)
- Cloudflare Pages project: create in **Workers & Pages → Create application → Pages → Import an existing Git repository** (UI text may vary).
- Select repository `DreamInfer/quvionx-industries-website` and production branch `main`.
- Framework preset: `None`; build command: **leave empty** if allowed (or `exit 0`); output directory: `.`; root directory: `/`.
- Deploy to the generated `*.pages.dev` staging URL and test it before applying custom domains.
- For canonical apex `https://quvionxindia.com/`, Cloudflare Pages requires a Cloudflare DNS zone with Cloudflare nameservers. Add the apex and `www` as Pages custom domains, then create a 301 `www` → apex redirect rule in the Cloudflare dashboard and test it.
- Do not modify nameservers until an authoritative DNS/email audit is complete.

## Critical DNS / Google Workspace safety

The domain registrar is Bluehost and business email uses **Google Workspace**. The Bluehost dashboard was observed showing `MX www → smtp.google.com` but not a root MX record in the visible list. **This is a potential delivery fault; verify authoritative records, existing mail flow and the Google Admin console before making changes.**

Before any Cloudflare nameserver change, record and re-create all existing MX, SPF (`@` TXT), Google Workspace DKIM (Google Admin console's exact selector and key), DMARC (`_dmarc` TXT), Google domain-verification TXT, plus any CNAME/SRV/CAA/verification records for other services. Do not invent DKIM values or overwrite non-Google sending-service SPF mechanisms. Google Workspace's currently recommended single MX setting for the root domain is `@`, priority `1`, destination `smtp.google.com`; existing functioning legacy Google MX entries need not be replaced.

Confirm receiving and sending mail from `mahaananth.nivas@quvionxindia.com` **before and after** DNS migration.

## SEO and production QA

The canonical hostname is `quvionxindia.com`. `sitemap.xml` and `robots.txt` reference this apex domain. Confirm both custom domains return valid HTTPS and `www` permanently redirects to the apex. Verify page load, product navigation, mobile menu, email/WhatsApp links, security response headers and sitemap after launch. Configure Google Search Console separately for indexing.

## Enquiry flow

No server, database, forms service, checkout, or payment processing is used. Form buttons prepare a `mailto:` or `wa.me` message. **The visitor must press Send in their own email/WhatsApp application**; the site does not automatically deliver enquiries.

## Visual / branding rules

The official logo must not be redesigned or replaced without separate approval. The supplied SVG robot assets are concept illustrations; validate product configuration, pricing, event compatibility and shipping with each quotation.

## Hosting cost

GitHub source hosting and Cloudflare Pages static hosting can use free plans within platform limits. Bluehost registration renewal and the existing Google Workspace subscription are not free; no extra paid website hosting is required.