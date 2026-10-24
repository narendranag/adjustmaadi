# Adjust Maadi

**What:** a one-page site, https://adjustmaadi.com: a Bengaluru potboiler that plays one scene per load (Silk Board, the auto meter, the water tanker, the ten-month deposit), each ending in *adjust maadi*, with Adjust Maadi Radio below (South Indian film songs from their official YouTube uploads).
**For:** the public. The repo is **public** (`narendranag/adjustmaadi`, MIT): check every `+` line for names, emails and tokens before pushing.
**Target:** web — a static site: Cloudflare Workers serves `public/` as assets, with no Worker script, no build step and no dependencies.

This brain follows `~/claude-computer/docs/DEV-GUIDELINES.md`; the fleet's tools are listed in `~/claude-computer/claude-global/CLAUDE.md`. Start with `TASKS.md`, then `docs/llms.txt`.

## Where things are

- `public/scenes.js`: the scenes, one object each (Kannada lines, transliteration, English). Add an object to add a scene; the page picks one at random (never the one just seen), and `/?s=<id>` links to one.
- `public/playlist.js`: the radio. Every `id` is a YouTube video checked as embeddable through `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>`; re-check before adding.
- `public/app.js`: the reel (countdown, staged reveal, the slam), the radio (YouTube IFrame API, shuffle, language filter) and the `share` event.
- `public/consent.js`: the cookie banner; the Consent Mode defaults sit in the `<head>` of `index.html` and `404.html`.
- `analytics.yaml`: GA4 and Tag Manager (`analytics sync`, `preview`, `publish`).
- `wrangler.jsonc`: the static-assets Worker, routed to `adjustmaadi.com` and `www.adjustmaadi.com` (custom domains).
- Tasks: `TASKS.md`. Decisions: `DECISIONS.md`. Docs: `docs/`.

## Run and deploy

`just run` (`wrangler dev`, http://localhost:8787) · `just test` (every script parses) · `just lint` · `just deploy`.

**A push to `main` deploys** (`.github/workflows/deploy.yml`: every script parses, then `wrangler deploy`, with the repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`). So merging to `main` is a production deploy: the owner's OK. `just deploy` still works by hand. The action pins wrangler (`wranglerVersion` in `deploy.yml`): with no `package.json` it would fall back to wrangler 3, which fails on this assets-only config ("Missing entry-point"). Keep it in step with `npx wrangler --version`.

Always Use HTTPS is on for the whole zone (`https-check adjustmaadi.com www.adjustmaadi.com`). GA site search no longer reads `s`, so `/?s=<scene>` links are not counted as searches.

## Analytics

GA4 property "Adjust Maadi" (`G-XER5EB62JR`), loaded only through Tag Manager (`GTM-TWQ98P9Q`), both from `analytics.yaml`, as DEV-GUIDELINES ("Analytics") says. Consent Mode v2 starts denied for every visitor; the banner (`public/consent.js`) asks, and "Cookie settings" in the footer asks again. Events: `share` (`method`: `whatsapp` | `copy_link`, `item_id`: the scene). Run `analytics preview --url http://localhost:8787 --consent '.cb [data-choice="granted"]'` before every `analytics publish`, which is the owner's OK.

## Rules

- Songs belong to their labels and artists: embed official uploads only, never host audio.
- Nothing published (a deploy, an analytics change) without the owner's OK.
