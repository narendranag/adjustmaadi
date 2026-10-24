# Decisions — adjustmaadi

Append-only. `- [<host>] [YYYY-MM-DD] <decision> — <why>`

---

## Carried over from the repo (2026-10-24; dates and hosts not recorded)

- A static-assets Worker on Cloudflare, no build step and no dependencies — the site is three scripts and a stylesheet (README)
- Songs are embedded from official YouTube uploads, each checked as embeddable through oEmbed, never hosted — the music belongs to its labels and artists (README)
- GA4 through `gtag.js` straight in the pages, not Tag Manager, and no consent banner (692ffb5) — a deviation from DEV-GUIDELINES' Analytics section; open in TASKS.md

## Since

- [mini] [2026-10-24] adjustmaadi gets a brain (the owner: "Set up adjustmaadi") — it served a live site with no CLAUDE.md, so no brain audit saw it
- [mini] [2026-10-24] GA4 moves into Tag Manager (GTM-TWQ98P9Q, analytics.yaml) behind a cookie banner with Consent Mode v2, denied by default; gtag.js is gone from the pages — DEV-GUIDELINES "Analytics" and "Consent"; closes the gtag.js deviation carried over above
- [mini] [2026-10-24] The one GA event is `share` (method, item_id), a key event — the only marketing action on a one-page site; play, next scene and the radio are in-page behaviour, not marketing
- [mini] [2026-10-24] No GTM <noscript> iframe — with JavaScript off there is no banner to ask, so nothing loads
- [mini] [2026-10-24] Repo secrets CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID set on narendranag/adjustmaadi with `deploy-secrets github` (pre-approved for the owner's repos) — for .github/workflows/deploy.yml
- [mini] [2026-10-24] A push to main deploys (templates/web's deploy.yml, cut to `node --check` + `wrangler deploy` for a static site) — so main is what's live
- [mini] [2026-10-24] Always Use HTTPS on the whole adjustmaadi.com zone (the owner's OK) — http:// answered 200; the zone holds only this site
- [mini] [2026-10-24] GTM version 2 published and the consent pages deployed through the new workflow (the owner's OK) — analytics preview passed against localhost first, and again against production
- [mini] [2026-10-24] The deploy action pins wrangler 4.152.0 — with no package.json it fell back to wrangler 3, which fails on an assets-only config
