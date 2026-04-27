import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import rootPkg from '../../package.json' with { type: 'json' };

const SITE_ORIGIN = 'https://palettedesign.app';
const SITE_BASE = '/';
const SITE_URL = `${SITE_ORIGIN}${SITE_BASE}`;
const OG_IMAGE = `${SITE_URL}og.png`;
const SOFTWARE_VERSION = (rootPkg as { version: string }).version;

export default defineConfig({
  title: 'Palette Design',
  titleTemplate: ':title — Palette Design',
  description:
    'Palette Design is a desktop AI design platform — go from prompt to polished prototype, slide deck, or marketing asset in seconds. Download for macOS, Windows, and Linux.',
  lang: 'en-US',

  base: SITE_BASE,
  cleanUrls: true,
  lastUpdated: false,

  vite: {
    plugins: [tailwindcss()],
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: `${SITE_BASE}favicon.ico` }],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${SITE_BASE}favicon-32x32.png` },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${SITE_BASE}favicon-16x16.png` },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${SITE_BASE}apple-touch-icon.png` },
    ],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Palette Design' }],
    ['meta', { property: 'og:title', content: 'Palette Design — AI Design Platform for Desktop' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Palette Design is a desktop AI design platform. Prompt to prototype, slide deck, or marketing asset. Download for macOS, Windows, and Linux.',
      },
    ],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    // Twitter / X
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@PaletteDesign' }],
    ['meta', { name: 'twitter:title', content: 'Palette Design — AI Design Platform' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'Desktop AI design platform. Prompt to prototype in seconds. Runs on your laptop.',
      },
    ],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'AI design platform, desktop design app, prompt to prototype, AI prototype generator, prompt to HTML, prompt to React component, palette design, AI slide deck, AI landing page, design automation',
      },
    ],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
    ['meta', { name: 'author', content: 'Palette Design' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: SITE_URL }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: SITE_URL }],
    // JSON-LD — SoftwareApplication
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Palette Design',
        alternateName: 'palette-design',
        description:
          'Palette Design is a desktop AI design platform. Prompt to interactive prototype, slide deck, and marketing assets. Available for macOS, Windows, and Linux.',
        url: SITE_URL,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'macOS, Windows, Linux',
        softwareVersion: SOFTWARE_VERSION,
        downloadUrl: `${SITE_URL}#download`,
        applicationSubCategory: 'AI Design Tool',
        featureList: [
          'Prompt-to-HTML prototype generation',
          'Multi-model AI engine',
          'Local-first storage on your laptop',
          'Export to PDF, PPTX, ZIP, and Markdown',
          'AI image generation for design assets',
          'Region-level rewrites with comment pins',
          'AI-tuned sliders for color, spacing, typography',
          'Twelve built-in design skill modules',
        ],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free download. Sign up to start designing.',
        },
        author: {
          '@type': 'Organization',
          name: 'Palette Design',
          url: SITE_URL,
        },
        keywords:
          'AI design platform, desktop design app, prompt to prototype, AI design tool, design automation, prompt to slide deck',
      }),
    ],
    // JSON-LD — FAQPage
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Palette Design?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Palette Design is a desktop AI design platform that turns natural-language prompts into HTML prototypes, JSX/React components, slide decks, and marketing assets — all on your laptop.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which platforms are supported?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'macOS (Apple Silicon and Intel), Windows (x64 and ARM64), and Linux (AppImage, .deb, .rpm).',
            },
          },
          {
            '@type': 'Question',
            name: 'Where do my designs live?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Everything stays on your machine. Designs, prompts, and configuration are stored locally — nothing is uploaded to a server unless you explicitly choose to share.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get started?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Download the installer for your platform from the Download section, run it, and you can start prompting in under 90 seconds.',
            },
          },
        ],
      }),
    ],
    // JSON-LD — Organization
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Palette Design',
        url: SITE_URL,
        logo: `${SITE_URL}logo.png`,
      }),
    ],
  ],

  sitemap: { hostname: SITE_URL },

  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '');
    const canonical = `${SITE_URL}${path}`;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonical }]);
  },

  themeConfig: {
    logo: { src: '/logo-mark.png', alt: 'Palette Design', width: 28, height: 28 },
    siteTitle: 'Palette Design',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/#features' },
      { text: 'Download', link: '/#download' },
      { text: 'Quickstart', link: '/quickstart' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Download', link: '/#download' },
          { text: 'Quickstart', link: '/quickstart' },
        ],
      },
      {
        text: 'Help',
        items: [{ text: 'FAQ', link: '/faq' }],
      },
    ],

    socialLinks: [],

    footer: {
      message:
        '<a href="/quickstart">Quickstart</a> · <a href="/faq">FAQ</a> · <a href="mailto:hello@palettedesign.app">Contact</a>',
      copyright: '© 2026-present Palette Design',
    },
  },
});
