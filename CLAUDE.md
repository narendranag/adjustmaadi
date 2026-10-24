# Adjust Maadi

**What:** a one-page site, https://adjustmaadi.com: a Bengaluru potboiler that plays one scene per load (Silk Board, the auto meter, the water tanker, the ten-month deposit), each ending in *adjust maadi*, with Adjust Maadi Radio below (South Indian film songs from their official YouTube uploads).
**For:** the public. The repo is **public** (`narendranag/adjustmaadi`, MIT): check every `+` line for names, emails and tokens before pushing.
**Target:** web — a static site: Cloudflare Workers serves `public/` as assets, with no Worker script, no build step and no dependencies.

This brain follows `~/claude-computer/docs/DEV-GUIDELINES.md`; the fleet's tools are listed in `~/claude-computer/claude-global/CLAUDE.md`. Start with `TASKS.md`, then `docs/llms.txt`.

## Where things are

- `public/scenes.js`: the scenes, one object each (Kannada lines, transliteration, English). Add an object to add a scene; the page picks one at random (never the one just seen), and `/?s=<id>` links to one.
- `public/playlist.js`: the radio. Every `id` is a YouTube video checked as embeddable through `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>`; re-check before adding.
- `public/app.js`: the reel (countdown, staged reveal, the slam) and the radio (YouTube IFrame API, shuffle, language filter).
- `wrangler.jsonc`: the static-assets Worker, routed to `adjustmaadi.com` and `www.adjustmaadi.com` (custom domains).
- Tasks: `TASKS.md`. Decisions: `DECISIONS.md`. Docs: `docs/`.

## Run and deploy

`just run` (`wrangler dev`, http://localhost:8787) · `just test` (every script parses) · `just lint` · `just deploy`.

**Deploy is by hand** (`npx wrangler deploy`, on the Cloudflare account that owns adjustmaadi.com): there is no deploy workflow, so landing on `main` does not deploy. A production deploy is the owner's OK.

## Analytics

GA4 property "Adjust Maadi" (`G-XER5EB62JR`), loaded with `gtag.js` straight in `index.html` and `404.html`. That is a deviation from DEV-GUIDELINES ("Analytics": Tag Manager from an `analytics.yaml`, and a consent banner with Consent Mode before anything goes live): see `DECISIONS.md` and `TASKS.md`.

## Rules

- Songs belong to their labels and artists: embed official uploads only, never host audio.
- Nothing published (a deploy, an analytics change) without the owner's OK.
