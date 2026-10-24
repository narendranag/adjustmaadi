# Tasks — adjustmaadi

## Now

- [ ] http → https: `https-check` fails on both names (2026-10-24: http:// answers 200, no redirect). Fix: `https-check adjustmaadi.com --fix` (Always Use HTTPS on the zone, which holds only this site), with the owner's OK #seo
- [ ] Consent before tracking: the site loads GA4 (`gtag.js`) with no cookie banner, which DEV-GUIDELINES requires before analytics goes live. Proposed: the fleet's banner with Consent Mode v2 (denied by default, as on marain.space), and move the tag into Tag Manager through an `analytics.yaml` (`analytics setup`, `sync`, `preview`). The owner's call: it changes the live site #analytics
- [ ] Search Console: the Domain property for adjustmaadi.com (`searchconsole add adjustmaadi.com`, the fleet session, with the owner's OK) #seo

## Next

- [ ] A deploy workflow (`~/claude-computer/templates/web/.github/workflows/deploy.yml`), so `main` is what's live: repo secrets through `deploy-secrets github narendranag/adjustmaadi CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID`. Its first run deploys `main`, so ask first #deploy

## Later

## Done

- [x] The site live at adjustmaadi.com: scenes, Adjust Maadi Radio, a 404 page (a218cbc)
- [x] GA4 property "Adjust Maadi", `G-XER5EB62JR`, on every page (692ffb5)
- [x] The brain: CLAUDE.md, TASKS.md, DECISIONS.md, justfile, .editorconfig, docs/, the gitleaks hook (2026-10-24)
