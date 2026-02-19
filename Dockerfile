# =========================
# Stage 1 — Builder
# =========================
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiamos primeiro manifests e prisma (melhor cache)
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma ./prisma

# Dependências (inclui dev, necessário p/ build e prisma)
RUN pnpm install --frozen-lockfile

# Gera o Prisma Client (NÃO precisa de banco)
RUN pnpm prisma generate

# Agora o código fonte
COPY src ./src

# Build TS → dist/
RUN pnpm exec tsc --outDir dist


# =========================
# Stage 2 — Runner
# =========================
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# pnpm também disponível no runtime (Fly usa no release_command)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiamos apenas o que é necessário
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY package.json ./

EXPOSE 3000

CMD ["node", "dist/server.js"]