<script setup lang="ts">
import { withBase } from 'vitepress';
import { onMounted, onUnmounted, ref } from 'vue';
import SmartDownload from './SmartDownload.vue';

const tickerLine = [
  '랜딩 페이지',
  '대시보드',
  '가격 페이지',
  '피치덱',
  '모바일 UI',
  '챗봇 UI',
  '캘린더',
  '영수증',
  '포트폴리오',
  '이메일',
  '데이터 테이블',
  '에디토리얼 레이아웃',
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
            <span class="ph-dot" /> v0.1.5 · 라이브
          </span>
          <h1 class="ph-title">
            의도를 담아
            <span class="ph-title-grad">디자인.</span>
          </h1>
          <p class="ph-tagline">
            데스크톱 AI 디자인 플랫폼. 프롬프트 한 줄로 프로토타입, 슬라이드,
            마케팅 자료까지 — 몇 초 안에, 내 컴퓨터에서.
          </p>

          <div class="ph-cta-row">
            <a href="#download" class="ph-btn ph-btn-primary">
              <span>무료 다운로드</span>
              <span class="ph-btn-arrow">↓</span>
            </a>
            <a href="#features" class="ph-btn ph-btn-ghost">기능 살펴보기</a>
          </div>

          <div class="ph-trust-row">
            <span class="ph-trust-pill">macOS</span>
            <span class="ph-trust-pill">Windows</span>
            <span class="ph-trust-pill">Linux</span>
            <span class="ph-trust-divider" />
            <span class="ph-trust-text">로컬 우선 · 구독 없음</span>
          </div>
        </div>

        <div class="ph-hero-art">
          <div class="ph-hero-video">
            <video
              :src="withBase('/demos/hero.mp4')"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              :poster="withBase('/hero.png')"
              aria-label="Palette Design — design with intent"
            />
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
        <span class="ph-kicker">주요 기능</span>
        <h2 class="ph-h2">12가지 디자인 스킬, 드래그 미세조정, 영역별 재작성.</h2>
      </header>

      <div class="ph-bento">
        <article class="ph-tile ph-tile-tall ph-tile-grad">
          <span class="ph-tile-no">01</span>
          <h3>프롬프트에서 완성형 디자인까지</h3>
          <p>
            원하는 것을 설명하세요. 호버 상태, 탭, 빈 상태까지 이미 연결된
            프로토타입·슬라이드·마케팅 자료를 몇 초 안에 만들어냅니다.
          </p>
        </article>

        <article class="ph-tile">
          <span class="ph-tile-no">02</span>
          <h3>AI 튜닝 슬라이더</h3>
          <p>
            색상, 간격, 폰트 — 모델이 조정할 가치가 있는 파라미터를 직접
            제시합니다. 다시 프롬프트하지 말고 드래그로 다듬으세요.
          </p>
          <div class="ph-mini-sliders">
            <span><span style="--w:62%" /></span>
            <span><span style="--w:88%" /></span>
            <span><span style="--w:42%" /></span>
          </div>
        </article>

        <article class="ph-tile ph-tile-wide">
          <span class="ph-tile-no">03</span>
          <h3>코멘트로 수정, 다시 입력하지 않아요</h3>
          <p>
            프리뷰의 어떤 요소든 클릭해 핀을 놓고 메모를 남기세요. Palette는 해당
            영역만 다시 작성합니다 — 버튼 하나 옮기려고 페이지 전체를 다시
            생성하지 않아도 됩니다.
          </p>
          <div class="ph-pin-demo">
            <span class="ph-pin">1</span>
            <span class="ph-pin-note">이 CTA를 더 눈에 띄게</span>
          </div>
        </article>

        <article class="ph-tile">
          <span class="ph-tile-no">04</span>
          <h3>12가지 빌트인 스킬</h3>
          <p>
            랜딩 페이지, 대시보드, 피치덱, 가격 페이지, 모바일 화면, 챗봇 UI,
            캘린더, 글래스모피즘, 에디토리얼 타이포그래피 등.
          </p>
        </article>

        <article class="ph-tile ph-tile-tall">
          <span class="ph-tile-no">05</span>
          <h3>5가지 익스포트, 실제 파일</h3>
          <p>
            HTML(인라인 CSS), PDF, PPTX, ZIP, Markdown — 모두 기기 내부에서
            생성됩니다. 클라우드 우회 없음. 전부 당신의 것.
          </p>
          <div class="ph-export-chips">
            <span>HTML</span><span>PDF</span><span>PPTX</span><span>ZIP</span><span>MD</span>
          </div>
        </article>

        <article class="ph-tile ph-tile-wide">
          <span class="ph-tile-no">06</span>
          <h3>내 노트북, 내 디자인</h3>
          <p>
            디자인, 프롬프트, 설정은 모두 디스크에 저장됩니다. 직접 공유하지
            않으면 어떤 것도 업로드되지 않습니다. 필수 계정도, 기본 텔레메트리도
            없습니다.
          </p>
        </article>
      </div>
    </section>

    <!-- ─────── Take a closer look — NB2 screenshots ──────────────────── -->
    <section class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">자세히 보기</span>
        <h2 class="ph-h2">앱의 여섯 장면.</h2>
        <p class="ph-section-sub">첫 실행부터 영역별 재작성까지.</p>
      </header>

      <div class="ph-gallery">
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/comment-mode.png')" alt="코멘트 모드 — 핀 한 번으로 해당 영역만 재작성" loading="lazy" />
          <figcaption><b>코멘트로 수정하세요.</b> 프리뷰에 핀을 떨어뜨리면 모델이 해당 영역만 다시 작성합니다.</figcaption>
        </figure>
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/tweaks-sliders.png')" alt="AI가 제안한 튜닝 패널" loading="lazy" />
          <figcaption><b>AI 튜닝 슬라이더.</b> 모델이 조정할 만한 파라미터를 알려줍니다. 다시 프롬프트하지 말고 드래그로.</figcaption>
        </figure>
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/agent-panel.png')" alt="할 일과 도구 호출이 흐르는 에이전트 패널" loading="lazy" />
          <figcaption><b>에이전트의 작업을 실시간으로.</b> 할 일, 도구 호출, 스트리밍 추론 — 언제든 중단할 수 있습니다.</figcaption>
        </figure>
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/hub-your-designs.png')" alt="내 디자인 허브" loading="lazy" />
          <figcaption><b>모든 반복이 남습니다.</b> 디자인은 로컬에 저장되고, 프로젝트는 한 번의 클릭으로 전환됩니다.</figcaption>
        </figure>
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/hub-examples.png')" alt="빌트인 템플릿 갤러리" loading="lazy" />
          <figcaption><b>12가지 빌트인 템플릿.</b> 랜딩, 대시보드, 가격, 피치덱, 챗봇 UI — 한 번의 클릭으로 시작.</figcaption>
        </figure>
        <figure class="ph-shot">
          <img :src="withBase('/screenshots/add-provider-menu.png')" alt="설정 대화상자" loading="lazy" />
          <figcaption><b>디자인 작업에 최적화.</b> 작업에 맞춰 자동으로 선택되는 다중 AI 엔진이 내장되어 있습니다.</figcaption>
        </figure>
      </div>
    </section>

    <!-- ─────── Stats strip ─────────────────────────────────────────────── -->
    <section class="ph-stats">
      <div class="ph-stats-card">
        <span class="ph-stat-num">12</span>
        <span class="ph-stat-label">빌트인 디자인 스킬</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">5</span>
        <span class="ph-stat-label">익스포트 포맷</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">6</span>
        <span class="ph-stat-label">플랫폼 빌드</span>
      </div>
      <div class="ph-stats-card">
        <span class="ph-stat-num">0</span>
        <span class="ph-stat-label">클라우드 왕복</span>
      </div>
    </section>

    <!-- ─────── Download ────────────────────────────────────────────────── -->
    <section id="download" class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">다운로드</span>
        <h2 class="ph-h2">Palette Design 받기</h2>
        <p class="ph-section-sub">
          무료. 플랫폼을 선택하세요 — 1분 안에 설치됩니다.
        </p>
      </header>
      <SmartDownload />
    </section>

    <!-- ─────── How it works ────────────────────────────────────────────── -->
    <section class="ph-section">
      <header class="ph-section-head">
        <span class="ph-kicker">사용 방법</span>
        <h2 class="ph-h2">프롬프트에서 완성까지, 세 단계로.</h2>
      </header>

      <ol class="ph-steps">
        <li class="ph-step">
          <span class="ph-step-no">1</span>
          <h3>설치하고 실행</h3>
          <p>OS에 맞는 인스톨러를 실행하세요. 90초 안에 시작할 수 있습니다.</p>
        </li>
        <li class="ph-step">
          <span class="ph-step-no">2</span>
          <h3>프롬프트 입력</h3>
          <p>빌트인 템플릿을 선택하거나 직접 설명하세요. 몇 초 만에 렌더링됩니다.</p>
        </li>
        <li class="ph-step">
          <span class="ph-step-no">3</span>
          <h3>다듬고 내보내기</h3>
          <p>인라인 코멘트, AI 슬라이더, 로컬 파일. HTML, PDF, PPTX, ZIP, MD로 내보내기.</p>
        </li>
      </ol>
    </section>

    <!-- ─────── Final CTA ──────────────────────────────────────────────── -->
    <section class="ph-final">
      <div class="ph-final-card">
        <h3>기다림 없이 디자인할 준비됐나요?</h3>
        <p>당신의 컴퓨터에 Palette를 설치하세요 — 평생 사용, 구독 없음.</p>
        <div class="ph-cta-row ph-cta-center">
          <a href="#download" class="ph-btn ph-btn-primary">
            <span>Palette Design 다운로드</span>
            <span class="ph-btn-arrow">↓</span>
          </a>
          <a href="/quickstart" class="ph-btn ph-btn-ghost">빠른 시작</a>
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

/* Hero artwork — animated MP4 rendered with HyperFrames */
.ph-hero-art {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ph-hero-video {
  width: 100%;
  border-radius: 22px;
  padding: 6px;
  background: var(--ph-grad-soft);
  box-shadow: 0 28px 64px -20px rgba(99, 102, 241, 0.4);
}
.ph-hero-video video {
  display: block;
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #fbfaff;
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

/* ─── Hero shot ────────────────────────────────────────────────────────── */
.ph-shot-section {
  padding-top: 0;
  padding-bottom: 32px;
}
.ph-shot-frame {
  position: relative;
  border-radius: 24px;
  padding: 8px;
  background: var(--ph-grad-soft);
  box-shadow: 0 24px 60px -20px rgba(99, 102, 241, 0.4);
}
.ph-shot-frame img,
.ph-shot-frame video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 18px;
  border: 1px solid rgba(99, 102, 241, 0.18);
  background: #fbfaff;
}
.ph-video-frame video {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* ─── Gallery ──────────────────────────────────────────────────────────── */
.ph-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
}
.ph-shot {
  margin: 0;
  background: var(--ph-surface);
  border: 1px solid var(--ph-border);
  border-radius: 22px;
  overflow: hidden;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease,
    border-color 200ms ease;
}
.ph-shot:hover {
  transform: translateY(-3px);
  border-color: rgba(99, 102, 241, 0.35);
  box-shadow: 0 18px 40px -16px rgba(99, 102, 241, 0.22);
}
.ph-shot img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: center top;
  border-bottom: 1px solid var(--ph-border);
}
.ph-shot figcaption {
  padding: 16px 20px 20px;
  color: var(--ph-text-2);
  font-size: 0.94rem;
  line-height: 1.55;
}
.ph-shot figcaption b {
  color: var(--ph-text);
  font-weight: 700;
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
