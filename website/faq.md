---
title: FAQ
titleTemplate: Frequently Asked Questions — Palette Design
description: Common questions about Palette Design — the desktop AI design platform. Download for macOS, Windows, and Linux.
---

# Frequently Asked Questions

## What is Palette Design?

Palette Design is a desktop AI design platform that turns natural-language prompts into HTML prototypes, JSX/React components, slide decks, and marketing assets. It runs as a native app on macOS, Windows, and Linux, and stores your designs locally on your machine.

## Which platforms are supported?

- **macOS** — Apple Silicon (M1/M2/M3) and Intel x64
- **Windows** — x64 and ARM64
- **Linux** — AppImage, .deb (Debian/Ubuntu), and other major distros

## How much does it cost?

Palette Design is free to download. Pricing for advanced workspace features will be announced soon.

## Where do my designs live?

Everything stays on your machine. Designs, prompts, and configuration are stored locally in `~/Documents/Palette` (or your chosen workspace folder). Nothing is uploaded to a server unless you explicitly choose to share or sync.

## Does Palette Design need an internet connection?

The app shell runs offline. AI-powered generation calls go to Palette's hosted model gateway over HTTPS. If you have a corporate proxy, you can configure it in **Settings → Network**.

## What can I generate?

Palette ships with twelve built-in design skills:

1. Landing pages
2. Dashboards
3. Pricing pages
4. Slide decks (pitch / sales / internal)
5. Marketing emails
6. Mobile app screens
7. Chat UI mockups
8. Data tables
9. Calendars
10. Glassmorphism / editorial layouts
11. Portfolio / case-study pages
12. Receipts, invoices, and printable docs

You can also describe anything custom in the prompt box.

## How do I refine a design without starting over?

- **Comment mode** — click any element in the preview, drop a pin, leave a note. Palette rewrites just that region.
- **AI sliders** — Palette emits the tunable parameters (color, spacing, font size). Drag to refine without re-prompting.
- **Component focus** — open any section in isolation and edit its tokens directly.

## What export formats are supported?

- **HTML** — single-file with inlined CSS, ready to paste anywhere
- **PDF** — print-quality export for handoff
- **PPTX** — fully editable PowerPoint deck
- **ZIP** — multi-file source bundle
- **Markdown** — for spec docs and READMEs

All exports happen on-device.

## Can I use my own design system?

Yes. Drop a `DESIGN.md` file into your workspace describing your brand colors, typography, spacing scale, and component preferences. Palette reads it on every generation. Or let Palette write one as your designs evolve — it's editable plain text.

## Is there a CLI or API?

A CLI for batch generation and headless export is on the roadmap. There is no public API at launch.

## How do I report a bug or request a feature?

Email [hello@palettedesign.app](mailto:hello@palettedesign.app) or use **Help → Send feedback** inside the app.

## How do updates work?

The app checks for new versions on launch and prompts you to install when one is ready. You can disable auto-update prompts in **Settings → Updates**.
