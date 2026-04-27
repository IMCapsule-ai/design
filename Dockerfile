# Multi-stage Dockerfile that builds the Palette Design VitePress site
# and serves it via `vitepress preview`. Used by Railway.

FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app

# website/.vitepress/config.ts imports ../../package.json for the version
# string, so we need the root manifest in the build context.
COPY package.json ./
COPY website/package.json website/

WORKDIR /app/website

# --ignore-workspace skips the monorepo so we don't drag apps/desktop and
# packages/* into the container.
RUN pnpm install --ignore-workspace

# Build the static site.
COPY website ./
RUN pnpm exec vitepress build

# ── Runner ────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/website /app/website

WORKDIR /app/website

ENV NODE_ENV=production
ENV PORT=4173
EXPOSE 4173

# vitepress preview serves the built dist/ folder. Bind 0.0.0.0 so Railway
# can route external traffic in.
CMD ["sh", "-c", "pnpm exec vitepress preview --host 0.0.0.0 --port ${PORT}"]
