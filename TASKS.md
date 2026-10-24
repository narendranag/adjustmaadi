# Tasks — adjustmaadi

## Now


## Next


## Later

- [ ] A sitemap (`public/sitemap.xml`), then `searchconsole sitemaps submit` (ask) and `searchconsole audit adjustmaadi.com` #seo

## Done

- [x] GA no longer counts `?s=<scene>` as a site search: the owner changed the stream's Site search settings in GA admin (2026-10-24) #analytics

- [x] http → https: Always Use HTTPS on the zone (`https-check --fix`, with the owner's OK); both names now 301 to https (2026-10-24) #seo

- [x] Consent banner + Consent Mode v2 (denied by default), GA4 through Tag Manager `GTM-TWQ98P9Q` from `analytics.yaml`, `share` event; GTM version 2 published and live (2026-10-24) #analytics
- [x] Deploy workflow `.github/workflows/deploy.yml` and its repo secrets (`deploy-secrets`, 2026-10-24); first deploy from main succeeded (2026-10-24) #deploy

- [x] Search Console Domain property `sc-domain:adjustmaadi.com`, verified by a TXT record on its Cloudflare zone (2026-10-24, the fleet session) #seo
- [x] The site live at adjustmaadi.com: scenes, Adjust Maadi Radio, a 404 page (a218cbc)
- [x] GA4 property "Adjust Maadi", `G-XER5EB62JR`, on every page (692ffb5)
- [x] The brain: CLAUDE.md, TASKS.md, DECISIONS.md, justfile, .editorconfig, docs/, the gitleaks hook (2026-10-24)
