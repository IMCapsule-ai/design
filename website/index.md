---
layout: home
title: Palette Design
titleTemplate: Desktop AI Design Platform — Prompt to Prototype
description: Palette Design is a desktop AI design platform. Turn prompts into polished prototypes, slide decks, and marketing assets in seconds. Download for macOS, Windows, and Linux.

hero:
  name: Palette Design
  text: Design with intent.
  tagline: A desktop AI design platform. Prompt to prototype, slide deck, or marketing asset — in seconds, on your laptop.
  image:
    src: /logo-hero.png
    alt: Palette Design
  actions:
    - theme: brand
      text: Download
      link: '#download'
    - theme: alt
      text: See features
      link: '#features'
    - theme: alt
      text: Quickstart
      link: /quickstart

features:
  - icon: 🎨
    title: Prompt to polished design
    details: Describe what you want. Palette generates a working prototype, slide, or marketing asset in seconds — with hover states, tabs, and empty states already wired up.
  - icon: 🪄
    title: Twelve design skills, built in
    details: Twelve curated design skills ship with the app — dashboards, landing pages, slide decks, pricing pages, chat UIs, data tables, calendars, glassmorphism, editorial typography, and more.
  - icon: 🎚️
    title: AI-tuned sliders
    details: The model emits the parameters worth tweaking — color, spacing, font — and you drag to refine. No round-tripping the model for every nudge.
  - icon: 🔀
    title: Instant design switching
    details: Hop between your last five designs with zero delay. Preview iframes stay alive in memory, so there is no reparse, white flash, or reload wait.
  - icon: 📱
    title: Desktop, tablet, phone
    details: Preview any artifact in a true phone frame or tablet width, side-by-side with the full canvas. See the responsive story before you export.
  - icon: 💬
    title: Comment, don't retype
    details: Click any element in the preview to drop a pin. Leave a note. The model rewrites only that region — no more re-prompting the whole page to move a button.
  - icon: 🏡
    title: Your laptop, your designs
    details: Designs, prompts, and settings stay on disk. Nothing is uploaded unless you choose to share. No mandatory account, no telemetry by default.
  - icon: 📐
    title: Design system as memory
    details: Brand values and design tokens live in a DESIGN.md file alongside your work. Bring your own design system, or let Palette write one as the artifact evolves.
  - icon: 🚢
    title: Five exports, real files
    details: HTML (inlined CSS), PDF, PPTX, ZIP, and Markdown — all generated on-device. No cloud detour. Everything is yours.
---

<script setup>
import { withBase } from 'vitepress'
</script>

<div id="download" class="codesign-section">

## Download Palette Design

<p class="lede">Free download. Pick your platform — installs in under a minute.</p>

<SmartDownload />

</div>

<div class="codesign-section">

## How it works

<div class="codesign-steps">
  <div class="codesign-step">
    <span class="num">1</span>
    <h3>Install &amp; sign in</h3>
    <p>Download the installer for your platform, run it, and you're ready in under 90 seconds.</p>
  </div>
  <div class="codesign-step">
    <span class="num">2</span>
    <h3>Type a prompt</h3>
    <p>Pick a built-in template — landing page, dashboard, pitch slide, pricing page, mobile app, chat UI, calendar, blog article, receipt, portfolio, email — or describe your own. The first design renders in seconds.</p>
  </div>
  <div class="codesign-step">
    <span class="num">3</span>
    <h3>Refine, export, hand off</h3>
    <p>Inline comments, AI sliders, and local files. Export to HTML, PDF, PPTX, ZIP, or Markdown — all on-device.</p>
  </div>
</div>

</div>

<div class="codesign-section">

## Take a closer look

<p class="lede">Six moments from the app — from first launch to region-level rewrites.</p>

<div class="codesign-gallery">
  <figure>
    <img :src="withBase('/screenshots/comment-mode.png')" alt="Comment mode — click any element, drop a pin, the model rewrites only that region" />
    <figcaption><b>Comment, don't retype.</b> Drop pins on the preview; the model rewrites just that region.</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/tweaks-sliders.png')" alt="AI-emitted tweaks panel — color pickers and RGB inputs" />
    <figcaption><b>AI-tuned sliders.</b> The model emits the parameters worth tweaking. Drag, don't re-prompt.</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/agent-panel.png')" alt="Live agent panel showing todos and streaming tool calls" />
    <figcaption><b>Watch the agent work.</b> Todos, tool calls, and streamed reasoning — always visible, always interruptible.</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/hub-your-designs.png')" alt="Your Designs hub, filled with real generated artifacts" />
    <figcaption><b>Every iteration, kept.</b> Designs are saved locally; switch between projects in one click.</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/hub-examples.png')" alt="Built-in example library — fifteen ready-to-run design briefs" />
    <figcaption><b>Fifteen demo briefs.</b> Landing, dashboard, pricing, pitch deck, chat UI — one click to see Palette in action.</figcaption>
  </figure>
  <figure>
    <img :src="withBase('/screenshots/add-provider-menu.png')" alt="Add provider menu — model and provider settings" />
    <figcaption><b>Tuned for design work.</b> Multiple AI engines under the hood, picked automatically for the task.</figcaption>
  </figure>
</div>

</div>

<div class="codesign-cta">

### Ready to design without the wait?

<a href="#download" class="cta-primary">Download Palette Design →</a>
<a href="/quickstart" class="cta-secondary">Quickstart in 90 seconds</a>

</div>
