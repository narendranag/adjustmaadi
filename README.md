# Adjust Maadi — ಅಡ್ಜಸ್ಟ್ ಮಾಡಿ

A South Indian potboiler about living in Bengaluru. Every time the page loads it plays one scene:
Silk Board, the auto meter, the water tanker, the ten-month deposit. Each one ends the way every
Bengaluru problem ends: **adjust maadi**. Below the scenes is **Adjust Maadi Radio**, a playlist of
Kannada, Tamil, Telugu and Malayalam film songs played from their official YouTube uploads.

Live at https://adjustmaadi.com.

## Layout

- `public/scenes.js`: the scenes, one object each, with Kannada lines, transliteration and English.
  To add a scene, add an object; the page picks one at random (never the one you just saw), and
  `/?s=<id>` links to a specific scene.
- `public/playlist.js`: the radio. Every `id` is a YouTube video checked as embeddable through
  `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>`; re-check before adding.
- `public/app.js`: the reel (countdown, staged reveal, the slam) and the radio (YouTube IFrame API,
  shuffle, language filter), and the `share` event.
- `public/consent.js`: the cookie banner. Analytics starts with consent denied; see `analytics.yaml`.
- `wrangler.jsonc`: a static-assets Worker, routed to `adjustmaadi.com` and `www.adjustmaadi.com`.

## Run and deploy

```sh
npx wrangler dev          # http://localhost:8787
```

A push to `main` deploys (`.github/workflows/deploy.yml`, after every script parses).

There is no build step and no dependencies.

## Licence

MIT. The songs belong to their labels and artists; the site only embeds their official uploads.
