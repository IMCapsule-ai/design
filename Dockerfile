# Multi-stage Dockerfile that builds the Palette Design VitePress site
# and serves it via `vitepress preview`. Used by Railway.

FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app/website

# Install website deps in isolation — ignore the monorepo workspace so we
# don't pull in apps/desktop, packages/*, etc.
COPY website/package.json ./
RUN pnpm install --ignore-workspace

# Build the static site.
COPY website ./
RUN pnpm exec vitepress build

# ── Runner ────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app/website

COPY --from=builder /app/website /app/website

ENV NODE_ENV=production
ENV PORT=4173
EXPOSE 4173

# vitepress preview serves the built dist/ folder. Bind 0.0.0.0 so Railway can
# route external traffic in.
CMD ["sh", "-c", "pnpm exec vitepress preview --host 0.0.0.0 --port ${PORT}"]
