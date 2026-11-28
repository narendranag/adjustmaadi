# Tasks — adjustmaadi

## Now


## Next


- [ ] CI runs only the jobs a commit can affect (fleet rule, 2026-11-28; DEV-GUIDELINES CI row): copy `~/claude-computer/templates/_shared/scripts/ci-changes.sh` into `scripts/`, add the `changes` job (fetch-depth 0, `permissions: actions: read`, GH_TOKEN), an always-on `docs` job, and `needs: changes` + `if: needs.changes.outputs.code == 'true'` on the rest (template: `~/claude-computer/templates/web/.github/workflows/ci.yml`). First check what your code, tests and build read: narrow SKIP or extend KEEP so no Markdown they read is skipped. Then one notes-only commit to prove only `docs` runs and the run is green. Batch notes commits from now on. #ci
## Later

- [ ] Browser errors to crashyard with the Sentry browser SDK (the `errors` skill, `crashyard project dsn adjustmaadi`); then `crashyard project set adjustmaadi --no-worker-exceptions` only if a Worker script ever gets the SDK #ops
- [ ] A sitemap (`public/sitemap.xml`), then `searchconsole sitemaps submit` (ask) and `searchconsole audit adjustmaadi.com` #seo

## Done

- [x] DESIGN.md drift fixes 1–9 (5c9c092) merged to main and deployed 2026-11-28 on the owner's OK; live checks passed (200s, 404 page loads webfonts, --wood in styles.css, no Bungee Shade); branch and worktree removed; reported to the fleet session #design

- [x] Worker errors to crashyard: `tail_consumers` in `wrangler.jsonc` (66a0f60), deployed 2026-11-24 04:16 UTC, reported to the crashyard session; the CI wrangler pin bumped to 4.167.0 (beacc74), deployed 04:19 UTC #ops

- [x] GA no longer counts `?s=<scene>` as a site search: the owner changed the stream's Site search settings in GA admin (2026-10-24) #analytics

- [x] http → https: Always Use HTTPS on the zone (`https-check --fix`, with the owner's OK); both names now 301 to https (2026-10-24) #seo

- [x] Consent banner + Consent Mode v2 (denied by default), GA4 through Tag Manager `GTM-TWQ98P9Q` from `analytics.yaml`, `share` event; GTM version 2 published and live (2026-10-24) #analytics
- [x] Deploy workflow `.github/workflows/deploy.yml` and its repo secrets (`deploy-secrets`, 2026-10-24); first deploy from main succeeded (2026-10-24) #deploy

- [x] Search Console Domain property `sc-domain:adjustmaadi.com`, verified by a TXT record on its Cloudflare zone (2026-10-24, the fleet session) #seo
- [x] The site live at adjustmaadi.com: scenes, Adjust Maadi Radio, a 404 page (a218cbc)
- [x] GA4 property "Adjust Maadi", `G-XER5EB62JR`, on every page (692ffb5)
- [x] The brain: CLAUDE.md, TASKS.md, DECISIONS.md, justfile, .editorconfig, docs/, the gitleaks hook (2026-10-24)
