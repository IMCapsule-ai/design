<script setup lang="ts">
import { withBase } from 'vitepress';
import { onMounted, onUnmounted, ref } from 'vue';
import SmartDownload from './SmartDownload.vue';

const tickerLine = [
  'landing pages',
  'dashboards',
  'pricing',
  'pitch decks',
  'mobile UI',
  'chat UIs',
  'calendars',
  'receipts',
  'portfolios',
  'emails',
  'data tables',
  'editorial layouts',
];

// Simple parallax for the hero blobs
const scrollY = ref(0);
const onScroll = () => {
  scrollY.value = window.scrollY;
};
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <main class="palette-home">
    <!-- ─────── Hero ─────────────────────────────────────────────────────── -->
    <section class="ph-hero">
      <div
        class="ph-blob ph-blob-1"
        :style="{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }"
      />
      <div
        class="ph-blob ph-blob-2"
        :style="{ transform: `translate3d(0, ${scrollY * -0.12}px, 0)` }"
      />
      <div
        class="ph-blob ph-blob-3"
        :style="{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }"
      />

      <div class="ph-hero-grid">
        <div class="ph-hero-copy">
          <span class="ph-eyebrow">
            <span class="ph-dot" /> v0.1.5 · live
          </span>
          <h1 class="ph-title">
            Design with
            <span class="ph-title-grad">intent.</span>
          </h1>
          <p class="ph-tagline">
            A desktop AI design platform. Prompt to prototype, slide deck, or
            marketing asset — in seconds, on your laptop.
          </p>

          <div class="ph-cta-row">
            <a href="#download" class="ph-btn ph-btn-primary">
              <span>Download for free</span>
              <span class="ph-btn-arrow">↓</span>
            </a>
            <a href="#features" class="ph-btn ph-btn-ghost">See what it does</a>
          </div>

          <div class="ph-trust-row">
            <span class="ph-trust-pill">macOS</span>
            <span class="ph-trust-pill">Windows</span>
            <span class="ph-trust-pill">Linux</span>
            <span class="ph-trust-divider" />
            <span class="ph-trust-text">Local-first · No subscription</span>
          </div>
        </div>

        <div class="ph-hero-art">
          <div class="ph-card-stack">
            <img
              :src="withBase('/logo-mark.png')"
              alt="Palette Design"
              class="ph-mark"
            />
            <div class="ph-floater ph-floater-1">
              <span class="ph-floater-tag">Landing</span>
              <div class="ph-floater-bar" />
              <div class="ph-floater-bar ph-floater-bar-short" />
            </div>
            <div class="ph-floater ph-floater-2">
              <span class="ph-floater-tag">Pricing</span>
              <div class="ph-pill ph-pill-1" />
              <div class="ph-pill ph-pill-2" />
              <div class="ph-pill ph-pill-3" />
            </div>
            <div class="ph-floater ph-floater-3">
              <span class="ph-floater-tag">Dashboard</span>
              <div class="ph-chart">
                <span style="--h:32%" />
                <span style="--h:64%" />
                <span style="--h:48%" />
                <span style="--h:88%" />
                <span style="--h:56%" />
                <span style="--h:72%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────── Marquee ─────────────────────────────────────────────────── -->
    <section class="ph-ticker" aria-hidden="true">
      <div class="ph-ticker-track">
        <span v-for="(w, i) in [...tickerLine, ...tickerLine]" :key="i">
          {{ w }} <span class="ph-ticker-dot">·</span>
        </span>
      </div>
    </section>

    <!-- ─────── Bento features ──────────────────────────────────────────── -->
    <section id="features" class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">What it does</span>
        <h2 class="ph-h2">Twelve design skills, drag-to-tune, region-level rewrites.</h2>
      </header>

      <div class="ph-bento">
        <article class="ph-tile ph-tile-tall ph-tile-grad">
          <span class="ph-tile-no">01</span>
          <h3>Prompt to polished design</h3>
          <p>
            Describe what you want. Palette generates a working prototype, slide,
            or marketing asset in seconds — hover states, tabs, and empty states
            already wired up.
          </p>
        </article>

        <article class="ph-tile">
          <span class="ph-tile-no">02</span>
          <h3>AI-tuned sliders</h3>
          <p>
            The model emits the parameters worth tweaking — color, spacing, font.
            Drag, don't re-prompt.
          </p>
          <div class="ph-mini-sliders">
            <span><span style="--w:62%" /></span>
            <span><span style="--w:88%" /></span>
            <span><span style="--w:42%" /></span>
          </div>
        </article>

        <article class="ph-tile ph-tile-wide">
          <span class="ph-tile-no">03</span>
          <h3>Comment, don't retype</h3>
          <p>
            Click any element in the preview. Drop a pin. Leave a note. Palette
            rewrites just that region — no more re-prompting the whole page to
            move a button.
          </p>
          <div class="ph-pin-demo">
            <span class="ph-pin">1</span>
            <span class="ph-pin-note">make this CTA pop more</span>
          </div>
        </article>

        <article class="ph-tile">
          <span class="ph-tile-no">04</span>
          <h3>Twelve built-in skills</h3>
          <p>
            Landing pages, dashboards, slide decks, pricing pages, mobile screens,
            chat UIs, calendars, glassmorphism, editorial typography, more.
          </p>
        </article>

        <article class="ph-tile ph-tile-tall">
          <span class="ph-tile-no">05</span>
          <h3>Five exports, real files</h3>
          <p>
            HTML (inlined CSS), PDF, PPTX, ZIP, Markdown — all generated
            on-device. No cloud detour. Everything is yours.
          </p>
          <div class="ph-export-chips">
            <span>HTML</span><span>PDF</span><span>PPTX</span><span>ZIP</span><span>MD</span>
          </div>
        </article>

        <article class="ph-tile ph-tile-wide">
          <span class="ph-tile-no">06</span>
          <h3>Your laptop, your designs</h3>
          <p>
            Designs, prompts, and settings stay on disk. Nothing is uploaded
            unless you choose to share. No mandatory account, no telemetry by
            default.
          </p>
        </article>
      </div>
    </section>

    <!-- ─────── Stats strip ─────────────────────────────────────────────── -->
    <section class="ph-stats">
      <div class="ph-stats-card">
        <span class="ph-stat-num">12</span>
        <span class="ph-stat-label">built-in design skills</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">5</span>
        <span class="ph-stat-label">export formats</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">6</span>
        <span class="ph-stat-label">platform builds</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">0</span>
        <span class="ph-stat-label">cloud round-trips</span>
      </div>
    </section>

    <!-- ─────── Download ────────────────────────────────────────────────── -->
    <section id="download" class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">Get it</span>
        <h2 class="ph-h2">Download Palette Design</h2>
        <p class="ph-section-sub">
          Free. Pick your platform — installs in under a minute.
        </p>
      </header>
      <SmartDownload />
    </section>

    <!-- ─────── How it works ────────────────────────────────────────────── -->
    <section class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">How it works</span>
        <h2 class="ph-h2">From prompt to polished, in three steps.</h2>
      </header>

      <ol class="ph-steps">
        <li class="ph-step">
          <span class="ph-step-no">1</span>
          <h3>Install &amp; open</h3>
          <p>Run the installer for your OS. The app is ready in 90 seconds.</p>
        </li>
        <li class="ph-step">
          <span class="ph-step-no">2</span>
          <h3>Type a prompt</h3>
          <p>Pick a built-in template or describe your own. Renders in seconds.</p>
        </li>
        <li class="ph-step">
          <span class="ph-step-no">3</span>
          <h3>Refine &amp; export</h3>
          <p>Inline comments, AI sliders, local files. Export to HTML, PDF, PPTX, ZIP, MD.</p>
        </li>
      </ol>
    </section>

    <!-- ─────── Final CTA ──────────────────────────────────────────────── -->
    <section class="ph-final">
      <div class="ph-final-card">
        <h3>Ready to design without the wait?</h3>
        <p>Install Palette on your machine — yours forever, no subscription.</p>
        <div class="ph-cta-row ph-cta-center">
          <a href="#download" class="ph-btn ph-btn-primary">
            <span>Download Palette Design</span>
            <span class="ph-btn-arrow">↓</span>
          </a>
          <a href="/quickstart" class="ph-btn ph-btn-ghost">Quickstart</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.palette-home {
  --ph-grad: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  --ph-grad-soft: linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%);
  --ph-text: var(--vp-c-text-1, #1c1b29);
  --ph-text-2: var(--vp-c-text-2, #4a4860);
  --ph-text-3: var(--vp-c-text-3, #807e96);
  --ph-bg: var(--vp-c-bg, #fbfaff);
  --ph-surface: var(--vp-c-bg-elv, #fff);
  --ph-border: var(--vp-c-divider, #e3def5);

  width: 100%;
  background: var(--ph-bg);
  color: var(--ph-text);
  font-family: var(--vp-font-family-base);
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
.ph-hero {
  position: relative;
  overflow: hidden;
  padding: 96px 24px 72px;
  isolation: isolate;
}

.ph-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  z-index: -1;
  pointer-events: none;
}
.ph-blob-1 {
  width: 520px;
  height: 520px;
  top: -160px;
  left: -120px;
  background: radial-gradient(circle, #6366f1 0%, transparent 65%);
}
.ph-blob-2 {
  width: 460px;
  height: 460px;
  top: 60px;
  right: -120px;
  background: radial-gradient(circle, #ec4899 0%, transparent 65%);
}
.ph-blob-3 {
  width: 360px;
  height: 360px;
  bottom: -120px;
  left: 30%;
  background: radial-gradient(circle, #a855f7 0%, transparent 65%);
  opacity: 0.4;
}

.ph-hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 860px) {
  .ph-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.ph-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ph-text-2);
  text-transform: uppercase;
}
.ph-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #16a34a;
  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.18);
}

.ph-title {
  margin: 18px 0 12px;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--ph-text);
}
.ph-title-grad {
  background: var(--ph-grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
}

.ph-tagline {
  margin: 0 0 28px;
  font-size: 1.18rem;
  line-height: 1.55;
  color: var(--ph-text-2);
  max-width: 36rem;
}
@media (max-width: 860px) {
  .ph-tagline {
    margin-left: auto;
    margin-right: auto;
  }
}

.ph-cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 860px) {
  .ph-cta-row {
    justify-content: center;
  }
}
.ph-cta-center {
  justify-content: center;
}

.ph-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.96rem;
  text-decoration: none !important;
  transition: transform 140ms ease-out, box-shadow 200ms ease, filter 140ms ease;
}
.ph-btn-primary {
  background: var(--ph-grad);
  color: #fff !important;
  box-shadow: 0 14px 32px -10px rgba(99, 102, 241, 0.55);
}
.ph-btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
  box-shadow: 0 18px 40px -10px rgba(99, 102, 241, 0.65);
}
.ph-btn-ghost {
  background: var(--ph-surface);
  color: var(--ph-text) !important;
  border: 1px solid var(--ph-border);
}
.ph-btn-ghost:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
}
.ph-btn-arrow {
  font-weight: 800;
  font-size: 1.1rem;
  opacity: 0.9;
}

.ph-trust-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  flex-wrap: wrap;
  color: var(--ph-text-3);
  font-size: 0.86rem;
}
@media (max-width: 860px) {
  .ph-trust-row {
    justify-content: center;
  }
}
.ph-trust-pill {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  font-weight: 500;
  color: var(--ph-text-2);
}
.ph-trust-divider {
  width: 1px;
  height: 14px;
  background: var(--ph-border);
}
.ph-trust-text {
  font-weight: 500;
}

/* Hero artwork — floating cards behind a brand mark halo */
.ph-hero-art {
  position: relative;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 860px) {
  .ph-hero-art {
    height: 360px;
  }
}
.ph-card-stack {
  position: relative;
  width: 100%;
  max-width: 460px;
  height: 100%;
}
.ph-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--ph-grad-soft);
  padding: 26px;
  box-shadow: 0 20px 60px -20px rgba(99, 102, 241, 0.35);
  z-index: 1;
  filter: drop-shadow(0 8px 16px rgba(99, 102, 241, 0.25));
}
.ph-floater {
  position: absolute;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  border-radius: 16px;
  padding: 14px 16px;
  box-shadow: 0 16px 40px -12px rgba(28, 27, 41, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 180px;
  z-index: 2;
  backdrop-filter: blur(8px);
}
.ph-floater-1 {
  top: 8%;
  left: -10px;
  transform: rotate(-4deg);
}
.ph-floater-2 {
  top: 50%;
  right: -10px;
  transform: rotate(3deg);
}
.ph-floater-3 {
  bottom: 4%;
  left: 18%;
  transform: rotate(-2deg);
}
.ph-floater-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--ph-grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ph-floater-bar {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #6366f1 0%, #ec4899 100%);
  width: 92%;
  opacity: 0.85;
}
.ph-floater-bar-short {
  width: 56%;
  opacity: 0.5;
}
.ph-pill {
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ede9fe, #fce7f3);
}
.ph-pill-2 {
  width: 70%;
}
.ph-pill-3 {
  width: 50%;
}
.ph-chart {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 56px;
  padding-top: 4px;
}
.ph-chart span {
  flex: 1;
  height: var(--h);
  background: var(--ph-grad);
  border-radius: 3px 3px 0 0;
  opacity: 0.85;
}

/* ─── Marquee ──────────────────────────────────────────────────────────── */
.ph-ticker {
  margin: 8px auto;
  padding: 18px 0;
  background: linear-gradient(
    90deg,
    transparent,
    var(--ph-bg) 4%,
    var(--ph-bg) 96%,
    transparent
  );
  border-top: 1px solid var(--ph-border);
  border-bottom: 1px solid var(--ph-border);
  overflow: hidden;
}
.ph-ticker-track {
  display: inline-flex;
  gap: 28px;
  white-space: nowrap;
  animation: ph-scroll 40s linear infinite;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--ph-text-2);
  font-style: italic;
}
.ph-ticker-track span {
  text-transform: lowercase;
  letter-spacing: -0.01em;
}
.ph-ticker-dot {
  color: #ec4899;
  margin: 0 6px;
  font-style: normal;
}
@keyframes ph-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ─── Sections ─────────────────────────────────────────────────────────── */
.ph-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 24px;
}
.ph-section-head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}
.ph-kicker {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--ph-grad-soft);
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6366f1;
  margin-bottom: 16px;
}
.ph-h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
}
.ph-section-sub {
  margin-top: 14px;
  font-size: 1.08rem;
  color: var(--ph-text-2);
  line-height: 1.55;
}

/* ─── Bento grid ───────────────────────────────────────────────────────── */
.ph-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(220px, auto);
  gap: 18px;
}
@media (max-width: 1000px) {
  .ph-bento {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .ph-bento {
    grid-template-columns: 1fr;
  }
}
.ph-tile {
  position: relative;
  padding: 28px;
  border-radius: 24px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease,
    border-color 200ms ease;
  overflow: hidden;
}
.ph-tile:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 24px 48px -16px rgba(99, 102, 241, 0.18);
}
.ph-tile-tall {
  grid-row: span 2;
}
.ph-tile-wide {
  grid-column: span 2;
}
@media (max-width: 1000px) {
  .ph-tile-tall {
    grid-row: span 1;
  }
  .ph-tile-wide {
    grid-column: span 2;
  }
}
@media (max-width: 640px) {
  .ph-tile-wide {
    grid-column: span 1;
  }
}
.ph-tile-grad {
  background: linear-gradient(140deg, rgba(237, 233, 254, 0.85) 0%, rgba(252, 231, 243, 0.7) 100%);
  border-color: rgba(99, 102, 241, 0.18);
}
.ph-tile-grad::after {
  content: '';
  position: absolute;
  inset: -40% -20% auto auto;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 65%);
  pointer-events: none;
}
.ph-tile-no {
  font-size: 0.78rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.1em;
  color: var(--ph-text-3);
}
.ph-tile h3 {
  margin: 0;
  font-size: 1.32rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.2;
}
.ph-tile p {
  margin: 0;
  color: var(--ph-text-2);
  font-size: 0.96rem;
  line-height: 1.55;
}

.ph-mini-sliders {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: auto;
}
.ph-mini-sliders > span {
  display: block;
  height: 6px;
  background: var(--ph-border);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}
.ph-mini-sliders > span > span {
  display: block;
  height: 100%;
  width: var(--w);
  background: var(--ph-grad);
  border-radius: 999px;
}
.ph-pin-demo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--ph-grad-soft);
  border: 1px dashed rgba(99, 102, 241, 0.4);
}
.ph-pin {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: var(--ph-grad);
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ph-pin-note {
  font-size: 0.86rem;
  color: var(--ph-text-2);
  font-style: italic;
}
.ph-export-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.ph-export-chips span {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ph-text-2);
}

/* ─── Stats strip ──────────────────────────────────────────────────────── */
.ph-stats {
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
@media (max-width: 720px) {
  .ph-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
.ph-stats-card {
  padding: 26px 22px;
  border-radius: 20px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}
.ph-stat-num {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--ph-grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ph-stat-label {
  font-size: 0.84rem;
  color: var(--ph-text-2);
  font-weight: 500;
}

/* ─── Steps ────────────────────────────────────────────────────────────── */
.ph-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
@media (max-width: 860px) {
  .ph-steps {
    grid-template-columns: 1fr;
  }
}
.ph-step {
  padding: 28px;
  border-radius: 20px;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  position: relative;
}
.ph-step-no {
  position: absolute;
  top: -16px;
  left: 24px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--ph-grad);
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px -4px rgba(99, 102, 241, 0.5);
}
.ph-step h3 {
  margin: 8px 0 6px;
  font-size: 1.12rem;
  font-weight: 700;
}
.ph-step p {
  margin: 0;
  color: var(--ph-text-2);
  font-size: 0.95rem;
  line-height: 1.55;
}

/* ─── Final CTA ────────────────────────────────────────────────────────── */
.ph-final {
  max-width: 1200px;
  margin: 32px auto 96px;
  padding: 0 24px;
}
.ph-final-card {
  padding: 64px 32px;
  border-radius: 28px;
  background: var(--ph-grad);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.ph-final-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(800px circle at 30% 0%, rgba(255, 255, 255, 0.18), transparent 60%);
  pointer-events: none;
}
.ph-final-card h3 {
  margin: 0 0 8px;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;
}
.ph-final-card p {
  margin: 0 0 28px;
  opacity: 0.92;
  font-size: 1.05rem;
  position: relative;
}
.ph-final-card .ph-btn-primary {
  background: #fff;
  color: #6366f1 !important;
  box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.4);
}
.ph-final-card .ph-btn-ghost {
  background: transparent;
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.4);
}
.ph-final-card .ph-btn-ghost:hover {
  border-color: #fff;
}
</style>
