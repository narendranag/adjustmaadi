---
id: overview
title: Overview
order: 1
summary: "What Adjust Maadi is, the ideas behind it, and what is in and out of scope."
status: design
updated: 2026-10-24
audience: [everyone]
depends_on: [index]
related: []
defines: []
answers:
  - "What is Adjust Maadi for?"
  - What is deliberately out of scope?
---

# Overview

## What it is

A one-page site at https://adjustmaadi.com: a South Indian potboiler about living in Bengaluru. Every load plays one scene (Silk Board, the auto meter, the water tanker, the ten-month deposit), and each one ends the way every Bengaluru problem ends: *adjust maadi*. Below the scenes, Adjust Maadi Radio plays Kannada, Tamil, Telugu and Malayalam film songs from their official YouTube uploads.

## The ideas behind it

- **One scene per load.** `public/scenes.js` holds one object per scene; the page picks one at random, never the one just seen, and `/?s=<id>` links to a specific scene.
- **Embed, never host.** Every song is an official upload, checked as embeddable through YouTube's oEmbed before it goes into `public/playlist.js`.
- **No build.** Workers serves `public/` as static assets; there is no Worker script and no dependency.

## Scope

In: the scenes, the radio, a 404 page. Out: accounts, comments, hosting audio.

## What stays hard

Embeddable songs change: an upload can be taken down or have embedding turned off, so a playlist entry needs re-checking now and then.
