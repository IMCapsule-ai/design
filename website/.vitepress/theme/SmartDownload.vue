<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pkg from '../../../package.json';

/**
 * Smart download row — detects the visitor's OS + CPU architecture and
 * renders a prominent primary download button, plus a card-grid of links to
 * the other platforms so nothing is hidden.
 *
 * Asset URLs point at a placeholder release host. Update DOWNLOAD_BASE
 * to your real CDN / release origin once binaries are published.
 */

const latestVersion = (pkg as { version: string }).version;
const DOWNLOAD_BASE = `https://github.com/IMCapsule-ai/design/releases/download/v${latestVersion}`;

type Asset = {
  label: string;
  platform: 'macOS' | 'Windows' | 'Linux';
  arch: string;
  file: string;
  size: string;
  url: string;
  icon: string;
};

const macArm: Asset = {
  label: 'macOS · Apple Silicon',
  platform: 'macOS',
  arch: 'Apple Silicon (M1/M2/M3)',
  file: `palette-design-${latestVersion}-arm64.dmg`,
  size: '~135 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-arm64.dmg`,
  icon: '🍎',
};
const macIntel: Asset = {
  label: 'macOS · Intel',
  platform: 'macOS',
  arch: 'Intel x64',
  file: `palette-design-${latestVersion}-x64.dmg`,
  size: '~140 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-x64.dmg`,
  icon: '🍎',
};
const winX64: Asset = {
  label: 'Windows · x64',
  platform: 'Windows',
  arch: 'x64',
  file: `palette-design-${latestVersion}-x64-setup.exe`,
  size: '~110 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-x64-setup.exe`,
  icon: '🪟',
};
const winArm: Asset = {
  label: 'Windows · ARM64',
  platform: 'Windows',
  arch: 'ARM64',
  file: `palette-design-${latestVersion}-arm64-setup.exe`,
  size: '~100 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-arm64-setup.exe`,
  icon: '🪟',
};
const linuxAppImage: Asset = {
  label: 'Linux · AppImage',
  platform: 'Linux',
  arch: 'AppImage (x64)',
  file: `palette-design-${latestVersion}-x64.AppImage`,
  size: '~140 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-x64.AppImage`,
  icon: '🐧',
};
const linuxDeb: Asset = {
  label: 'Linux · .deb',
  platform: 'Linux',
  arch: 'Debian/Ubuntu (x64)',
  file: `palette-design-${latestVersion}-x64.deb`,
  size: '~140 MB',
  url: `${DOWNLOAD_BASE}/palette-design-${latestVersion}-x64.deb`,
  icon: '🐧',
};

const allAssets: Asset[] = [macArm, macIntel, winX64, winArm, linuxAppImage, linuxDeb];
const primary = ref<Asset | null>(null);
const detectedLabel = ref<string>('');

function detectPrimaryAsset(): { asset: Asset | null; label: string } {
  if (typeof navigator === 'undefined') return { asset: null, label: '' };
  const ua = navigator.userAgent;
  const uaData = (navigator as { userAgentData?: { platform?: string } }).userAgentData;
  const platformHint = uaData?.platform?.toLowerCase() ?? '';

  const isMacUA = /mac/i.test(platformHint) || /Macintosh|Mac OS X/.test(ua);
  const isWin = /windows/i.test(platformHint) || /Windows NT/.test(ua);
  const isLinux = /linux/i.test(platformHint) || (!isMacUA && !isWin && /Linux/.test(ua));

  if (isMacUA) {
    const looksIntel = /Intel Mac OS X/.test(ua) && !/AppleWebKit\/6(0[6-9]|[1-9][0-9])/.test(ua);
    return looksIntel
      ? { asset: macIntel, label: 'macOS · Intel 감지됨' }
      : { asset: macArm, label: 'macOS · Apple Silicon 감지됨' };
  }
  if (isWin) {
    const isArm = /ARM64|aarch64/i.test(ua) || /arm/i.test(platformHint);
    return isArm
      ? { asset: winArm, label: 'Windows · ARM64 감지됨' }
      : { asset: winX64, label: 'Windows · x64 감지됨' };
  }
  if (isLinux) return { asset: linuxAppImage, label: 'Linux 감지됨' };
  return { asset: null, label: '' };
}

onMounted(() => {
  const { asset, label } = detectPrimaryAsset();
  primary.value = asset;
  detectedLabel.value = label;
});
</script>

<template>
  <div class="smart-download">
    <div v-if="primary" class="primary-row">
      <a :href="primary.url" class="primary-button" :download="primary.file">
        <span class="primary-icon">{{ primary.icon }}</span>
        <span class="primary-stack">
          <span class="primary-label">{{ primary.platform }}용 다운로드</span>
          <span class="primary-meta">{{ primary.arch }} · {{ primary.size }} · v{{ latestVersion }}</span>
        </span>
        <span class="primary-arrow">↓</span>
      </a>
      <p class="detected-note">{{ detectedLabel }}</p>
    </div>

    <div class="all-platforms">
      <h3 class="all-platforms-title">모든 플랫폼</h3>
      <div class="platform-grid">
        <a
          v-for="asset in allAssets"
          :key="asset.file"
          :href="asset.url"
          :download="asset.file"
          class="platform-card"
        >
          <span class="platform-card-icon">{{ asset.icon }}</span>
          <span class="platform-card-stack">
            <span class="platform-card-label">{{ asset.label }}</span>
            <span class="platform-card-meta">{{ asset.size }}</span>
          </span>
        </a>
      </div>
    </div>

    <p class="download-foot">
      v{{ latestVersion }} · 무료 다운로드 · 오프라인 작동 · 앱 내 자동 업데이트
    </p>
  </div>
</template>

<style scoped>
.smart-download {
  max-width: 920px;
  margin: 1.5rem auto 1rem;
  padding: 0 1.5rem;
}

.primary-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2.25rem;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.75rem;
  border-radius: 14px;
  background: var(--gradient-brand, linear-gradient(135deg, #6366f1, #ec4899));
  color: #fff !important;
  font-weight: 600;
  text-decoration: none !important;
  box-shadow: 0 12px 32px -8px rgba(99, 102, 241, 0.45);
  transition:
    transform 140ms ease-out,
    filter 140ms ease,
    box-shadow 200ms ease;
}
.primary-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
  box-shadow: 0 16px 40px -8px rgba(99, 102, 241, 0.55);
}
.primary-button:active {
  transform: scale(0.98);
}
.primary-icon {
  font-size: 1.75rem;
  line-height: 1;
}
.primary-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.primary-label {
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}
.primary-meta {
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 0.88;
  font-variant-numeric: tabular-nums;
}
.primary-arrow {
  font-size: 1.25rem;
  font-weight: 700;
  margin-left: 0.25rem;
  opacity: 0.85;
}

.detected-note {
  font-size: 0.82rem;
  color: var(--vp-c-text-2, #4a4860);
  margin: 0;
  font-variant-numeric: tabular-nums;
}

.all-platforms {
  margin-top: 2.25rem;
}
.all-platforms-title {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3, #807e96);
  margin: 0 0 1rem;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.platform-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.95rem 1.1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider, #e3def5);
  background: var(--vp-c-bg-elv, #fff);
  color: var(--vp-c-text-1, #1c1b29) !important;
  text-decoration: none !important;
  transition:
    transform 140ms ease-out,
    border-color 140ms ease,
    box-shadow 200ms ease;
}
.platform-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1, #6366f1);
  box-shadow: 0 8px 20px -8px rgba(99, 102, 241, 0.3);
}
.platform-card-icon {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
}
.platform-card-stack {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.platform-card-label {
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: -0.005em;
}
.platform-card-meta {
  font-size: 0.78rem;
  color: var(--vp-c-text-3, #807e96);
  font-variant-numeric: tabular-nums;
}

.download-foot {
  text-align: center;
  margin: 1.75rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3, #807e96);
}
</style>
