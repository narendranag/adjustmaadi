# DESIGN.md — Adjust Maadi

The look of https://adjustmaadi.com, written down from `public/styles.css`, `public/index.html`, `public/404.html`, `public/consent.js` and `public/favicon.svg` (checked against the live site, 2026-11-28). It replaces the fleet's house design (`~/claude-computer/claude-global/DESIGN.md`) for everything in this repo. Almost nothing here matches the house system, on purpose: the house look is a quiet working surface, this one is a loud film poster.

## The idea

A Kannada mass-film poster and a 1970s single-screen theatre: a maroon velvet night, turmeric and kumkum lettering with stacked hard shadows, sunburst rays, a film reel on old paper, a valve radio. Everything is a parody of a blockbuster release (U/A certificate, "100 days", housefull ticker, end credits) about Bengaluru's daily troubles. Colour is decoration here, and the decoration is the joke.

## Tokens

All on `:root` in `public/styles.css`. **Dark only:** there is no light theme and no `prefers-color-scheme` block (house: light and dark). `theme-color` is `#2a0612`.

### Colour

| Token | Value | For |
| --- | --- | --- |
| `--maroon` | `#2a0612` | the page, top of the body gradient |
| `--maroon-2` | `#4a0b1f` | defined, unused (see Drift) |
| `--ink` | `#140409` | every border, every hard shadow, text on light fills |
| `--turmeric` | `#ffc72c` | the main accent: title, ticker, links, labels, the radio's shadow |
| `--marigold` | `#ff8a00` | the poster rays, the title's first shadow step |
| `--kumkum` | `#e0132c` | Kannada lines in the reel, the primary button, the reel's shadow, ON AIR |
| `--magenta` | `#e4007c` | SFX lines, the poster glow, the "hit" badge, the focus ring |
| `--parrot` | `#19a974` | WhatsApp button, the "100 days" badge, the active language chip |
| `--jasmine` | `#fff8e7` | body text on maroon, light button fill |
| `--paper` | `#f6ecd2` | the reel's screenplay paper, the cookie banner |
| `--paper-ink` | `#2b1a10` | text on paper |

Colours used as raw hex, outside the tokens: `#1a030b` (bottom of the body gradient), `#7a1e10` → `#4a0f08` (the radio's wood-red body), `#120806` (the radio screen), `#3a1a14` / `#7a5a50` (ON AIR when off), `#5b5146` / `#2d2721` (the countdown leader). Translucent: `rgba(255,199,44,.08)` dots, `rgba(255,138,0,.22)` rays, `rgba(228,0,124,.35)` glow, `rgba(43,26,16,.35)` dashed rules on paper, `rgba(255,248,231,.12)` and `.75` for chips and credits.

### Surfaces and texture

- **Page:** a 14px turmeric dot grid (`radial-gradient … 1px`) over a vertical `--maroon` → `#1a030b` gradient.
- **Poster rays:** `repeating-conic-gradient` in marigold (7° on, 11° off), turning once every 90s, with a magenta radial glow on top.
- **Radio screen:** 2px turmeric scanlines on `#120806`.
- **Countdown:** a grey film leader (conic segments over a ringed radial).

### Shape, borders and shadow

- **Borders:** thick and solid `--ink`: 4px on the reel, the radio body and its screen; 3px on buttons, knobs, badges, ON AIR, the ticker's bottom, the cookie banner; 2px on chips and track buttons.
- **Shadows are hard offsets, never blurred** (house: soft blurred shadows). Buttons `4px 4px 0 var(--ink)` (5px on hover, 1px pressed); knobs 3px; badges 4px; the reel `10px 10px 0 var(--kumkum), 10px 10px 0 4px var(--ink)` (a coloured slab outlined in ink); the radio the same in `--turmeric`; both drop to 6px under 720px. The one blurred glow: ON AIR, `0 0 18px var(--kumkum)`.
- **Radius:** 0 for the reel, buttons, the ticker and the cookie banner (square, like print); 26px the radio body, 12px its screen, 10px track buttons, 999px knobs and chips, 50% badges.
- **Tilt:** things sit slightly off-square. Kannada title −2°, English title `skewX(-6deg)`, badges −8° / +6°, the reel label −2°, SFX −3°, the slam's English plate −3°.

### Space and width

No spacing scale: values are set per component in px (6–22px inside blocks, 56px between the reel and the radio). `main` is centred, up to 980px, 16px gutters; credits up to 900px. Lines in the reel up to 560px; the tagline 42ch; the chorus 48ch. One breakpoint, 720px.

## Type

Webfonts from Google Fonts, one request in `index.html`: Baloo Tamma 2 (500, 700, 800), Bungee, Bungee Shade, Courier Prime (400, 700), Oswald (500, 700). House says no webfonts by default; this brand needs them.

| Token / use | Family | For |
| --- | --- | --- |
| `--display` | Bungee, then Oswald, Impact | titles, labels, buttons, the ticker, the slam's English, figures |
| `--kn` | Baloo Tamma 2, then Noto Sans Kannada | all Kannada, at 700–800 |
| `--script` | Courier Prime, then Courier New | the screenplay in the reel, captions, fine print, the cookie banner |
| body | Oswald, then system-ui | running text on maroon |

Scale (fluid with `clamp`, mobile → desktop):

| Role | Size |
| --- | --- |
| Poster title, English | `clamp(2.6rem, 12vw, 7.5rem)`, Bungee, stacked shadows marigold → kumkum → kumkum → ink |
| Poster title, Kannada | `clamp(2.4rem, 9vw, 5.2rem)`, 800, shadows kumkum then ink |
| Slam, Kannada / English | `clamp(2.4rem, 10vw, 4.6rem)` / `clamp(1.8rem, 8vw, 3.8rem)` |
| Countdown figure | 8rem (5rem on a phone) |
| Scene title, Kannada / English | `clamp(1.8rem, 6vw, 2.8rem)` / `clamp(1.15rem, 4vw, 1.7rem)` |
| Radio name | `clamp(1.4rem, 5vw, 2.2rem)`, turmeric, 3px ink shadow |
| Now playing | `clamp(1.1rem, 3.8vw, 1.5rem)` |
| Tagline | `clamp(1rem, 3.4vw, 1.35rem)` |
| Dialogue line, Kannada | 1.35rem, 700 |
| Body | 1rem / 1.45 |
| Buttons | 0.95rem (0.85rem in the banner and on knobs) |
| Meta, fine print, transliteration | 0.75–0.85rem, often at opacity .7–.8 |
| Presenter line | `clamp(0.72rem, 2.4vw, 0.95rem)`, uppercase, 0.22em tracking |

Uppercase for the ticker, the slugline, the presenter line, the credits' roles and the reel label; sentence case for running text and buttons. Kannada headings get `line-height: 1.3` and `padding-bottom: .12em` so the stacked consonants (ottakshara) don't clip. Every Kannada run carries `lang="kn"`; the language chips show Tamil, Telugu and Malayalam in their own scripts.

## Components and layout

One page, one column, top to bottom:

1. **Ticker:** a turmeric marquee strip, Bungee 0.85rem, ★-separated, scrolling once every 38s, `aria-hidden`.
2. **Poster (header):** rotating rays, "Namma Bengaluru Talkies • presents", the bilingual title, the tagline, three round **badges** (U/A certificate in jasmine/kumkum, "100 days" in parrot, "ಸೂಪರ್ HIT" in magenta), all centred.
3. **The reel:** a paper card with film **sprockets** down both edges (repeating ink/paper stripes, 26px, 18px on a phone), a hard kumkum shadow. Inside, a **scene** set as a screenplay in Courier Prime: an ink "REEL n" label, the bilingual title, a dashed-ruled slugline, a ▸ cast list, italic action, centred dialogue (speaker, Kannada in kumkum, italic transliteration, English), a magenta SFX line. Reveal: a 3-2-1 **countdown leader** over the card, lines fading up one by one (.35s), then the **slam**: "ಅಡ್ಜಸ್ಟ್ ಮಾಡಿ! / ADJUST MAADI!" stamped in from 3.2× with an overshoot, red speed lines behind and the card shaking for .4s; the **chorus** line fades in last.
4. **Buttons** (`.btn`): square, 3px ink border, Bungee, hard shadow that grows on hover and collapses on press. Primary kumkum ("ಇನ್ನೊಂದು ಸೀನ್ · Next scene"), WhatsApp parrot, ghost turmeric ("Copy link"), default jasmine.
5. **The radio:** a valve-radio cabinet (wood-red gradient, radius 26, a turmeric handle arc on top, a turmeric hard shadow), a header with the name, "98.3 FM · the frequency of patience" and an ON AIR lamp that blinks red when playing; a 16:9 scanlined **screen** holding the YouTube player (idle text "ಹಾಡು ಹಾಕಿ ಗುರು"); a side panel with NOW PLAYING, film and a turmeric italic "vibe" line; pill **knobs** (Play, Next, Shuffle); language **chips** (active in parrot); a numbered **tracklist** grid (`minmax(230px, 1fr)`, 01, 02… in turmeric, the playing one turmeric with ♪). Two columns, one under 720px.
6. **Credits (footer):** film end-credits, centred: role in small tracked caps, name in bold jasmine; "WRITTEN & DIRECTED BY" with the names in Bungee turmeric; a love line; fine print with the source link and "Cookie settings".
7. **Cookie banner** (`.cb`, from `consent.js`): fixed at the bottom, max 560px, paper card, 3px ink border, kumkum hard shadow, Courier Prime, the site's own buttons.
8. **404:** the poster alone, "ದಾರಿ ತಪ್ಪಿದೆ / 404", one primary button back to the film.

**Focus:** `outline: 3px solid var(--magenta); outline-offset: 3px` on buttons, chips, knobs and tracks (house: 2px amber).

**Motion** is part of the joke here (house: motion only for change): ticker, rays, countdown, staged reveal, slam, shake, ON AIR blink. Under `prefers-reduced-motion: reduce` the loops, the slam and the shake stop and the reveal is instant (house: same rule).

## Imagery and illustration

No photographs and no image files. Every picture is CSS: dot grids, conic sunbursts, sprocket stripes, scanlines, the film leader, the radio's handle, hard shadows. Glyphs as ornaments: ★ in the ticker, ▸ before cast, ♪ for the playing track, • between presenter words. Knobs use ▶ ⏸ ⏭ 🔀 as icons. The favicon is an SVG: a turmeric disc, ink ring, "AM" in kumkum (Impact, since an SVG favicon can't load Bungee). Video comes only from the official YouTube embeds.

## Words

- **Voice:** a Kannada film's publicity and screenplay, deadpan. Everything is a release: "Now Showing", "Housefull", "U/A — Understand & Adjust", "100 days at Silk Board", "Advance booking open (10 months deposit)", "Starring YOU as the Common Man", "Villain: Silk Board Junction".
- **Bilingual:** Kannada script first, English second, for every headline and the main button; dialogue as Kannada, transliteration, English. Bengaluru English ("saar", "guru", "Anna", "swalpa") is welcome.
- **Interface strings are jokes too,** but short and still clear about what happens: "Copied, guru!", "Put a song on, guru. Traffic is long.", "Tune in. Silk Board will wait. It always does.", "No autos were harmed in the making of this website. They all refused to come."
- **Plain where it matters:** the cookie banner ("We count visits with Google Analytics. It sets a cookie only if you say yes." / "Yes, count me" / "No thanks") and the radio's rights line ("Songs play from their official uploads on YouTube. All rights with the labels and artists.").
- **Affectionate, never mean:** about the city's troubles, not about people or groups. "A parody made with love for Namma Bengaluru."

## Where it matches the house system

- Tokens as CSS custom properties on `:root`, used by name in components.
- Everything still under `prefers-reduced-motion`; a visible `:focus-visible` ring on every control.
- One state colour in the ON AIR lamp (red = live) — the only place colour means state.

## Drift to decide

Recorded, not fixed. Recommendations in italics.

1. **The 404 page loads no webfonts.** `404.html` links `styles.css` but not the Google Fonts stylesheet, so its title falls back to Oswald/Impact and Noto Sans Kannada. *Add the same fonts `<link>` to `404.html`.*
2. **Bungee Shade is loaded and never used.** *Drop it from the fonts URL (one less font to fetch).*
3. **Oswald 400 isn't loaded** but body text asks for the default weight, so the browser uses 500. *Either load 400 or set `body { font-weight: 500 }` so the CSS says what renders.*
4. **`--maroon-2` is unused,** while eight other colours sit as raw hex (radio body, screen, ON AIR off, leader, gradient end). *Name the ones that recur (`--wood`, `--wood-2`, `--screen`) and delete `--maroon-2`.*
5. **Late overrides at the bottom of `styles.css`** restate earlier rules: `.poster__tag` max-width 34ch → 42ch, `.radio__body::before` border `--ink` → `--turmeric`, `.reel__sprockets` z-index, the Kannada line-height fix. *Fold each into its original rule.*
6. **"Cookie settings" (`.credits__link`) has no focus ring** of its own; it's outside the `:focus-visible` list. *Add it to that list.*
7. **ON AIR when off** is `#7a5a50` on `#3a1a14`, about 2.3:1. It is `aria-hidden` and decorative, so it may be fine as a dim lamp. *Leave it; note it's intentional.*
8. **Emoji as knob icons** (▶ ⏭ 🔀 render as colour emoji on some systems, as text on others). *Keep them — they suit the look — but use the text presentation selector (U+FE0E) so they render the same everywhere.*
9. **`.cb .btn { cursor: pointer }`** repeats what `button` already sets. *Delete it.*
