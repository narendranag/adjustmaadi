# Decisions — adjustmaadi

Append-only. `- [<host>] [YYYY-MM-DD] <decision> — <why>`

---

## Carried over from the repo (2026-10-24; dates and hosts not recorded)

- A static-assets Worker on Cloudflare, no build step and no dependencies — the site is three scripts and a stylesheet (README)
- Songs are embedded from official YouTube uploads, each checked as embeddable through oEmbed, never hosted — the music belongs to its labels and artists (README)
- GA4 through `gtag.js` straight in the pages, not Tag Manager, and no consent banner (692ffb5) — a deviation from DEV-GUIDELINES' Analytics section; open in TASKS.md

## Since

- [mini] [2026-10-24] adjustmaadi gets a brain (the owner: "Set up adjustmaadi") — it served a live site with no CLAUDE.md, so no brain audit saw it
