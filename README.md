# QuvionX Industries | Multi-page Website

A static, six-page HTML/CSS/JavaScript website ready for GitHub + Cloudflare Pages.

## Pages
- index.html — Home
- robosumo.html — RoboSumo details and reference specifications
- roborace.html — RoboRace configurable product line
- engineering.html — Capabilities and process
- about.html — Company introduction
- contact.html — Quote / contact

## Deploy
1. Back up the current GitHub repository.
2. Upload ALL files from this folder to the repository root, preserving the `assets/` subfolder. Do not nest this folder inside the repository.
3. Commit to the main branch.
4. Cloudflare Pages with static output `.` deploys from main when connected to GitHub.
5. Verify each page and the contact flow on www.quvionxindia.com and quvionxindia.com.

No DNS changes are necessary when the existing domain is functioning.

## Notes
- RoboSumo is a user-supplied product image; RoboRace illustration is a concept.
- Do NOT market the old screenshot's 60 kg payload / 12 ft/s / 17 N.m / 1500 m / 60-minute claims as validated data.
- The quote form composes a message via mailto/WhatsApp; no backend data collection.
- Form behaviour and navigation implemented in `script.js`.
- All fonts are system fonts. No paid libraries, hosting or third-party analytics required.
