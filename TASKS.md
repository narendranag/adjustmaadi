# Tasks — adjustmaadi

## Now

- [ ] http → https: `https-check` fails on both names (2026-10-24: http:// answers 200, no redirect). Fix: `https-check adjustmaadi.com --fix` (Always Use HTTPS on the zone, which holds only this site), with the owner's OK #seo
- [ ] Consent and Tag Manager go live: `analytics publish` (GTM version 2), then merge `fix/consent-and-deploy` to `main`, which deploys the pages. Built and proved with `analytics preview` (2026-10-24); waits for the owner's OK #analytics
- [ ] GA counts `?s=<scene>` as a site search (`view_search_results` on every scene load): take `s` out of the stream's site-search query parameters (GA admin → Data streams → Enhanced measurement), the owner's call #analytics

## Next


## Later

- [ ] A sitemap (`public/sitemap.xml`), then `searchconsole sitemaps submit` (ask) and `searchconsole audit adjustmaadi.com` #seo

## Done

- [x] Consent banner + Consent Mode v2 (denied by default), GA4 through Tag Manager `GTM-TWQ98P9Q` from `analytics.yaml`, `share` event; on `fix/consent-and-deploy`, not live (2026-10-24) #analytics
- [x] Deploy workflow `.github/workflows/deploy.yml` and its repo secrets (`deploy-secrets`, 2026-10-24); on `fix/consent-and-deploy`, live once merged #deploy

- [x] Search Console Domain property `sc-domain:adjustmaadi.com`, verified by a TXT record on its Cloudflare zone (2026-10-24, the fleet session) #seo
- [x] The site live at adjustmaadi.com: scenes, Adjust Maadi Radio, a 404 page (a218cbc)
- [x] GA4 property "Adjust Maadi", `G-XER5EB62JR`, on every page (692ffb5)
- [x] The brain: CLAUDE.md, TASKS.md, DECISIONS.md, justfile, .editorconfig, docs/, the gitleaks hook (2026-10-24)
