# ======================
# Builder
# ======================
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# 🔑 OpenSSL obrigatório para Prisma
RUN apt-get update -y \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

RUN pnpm install --frozen-lockfile

# Prisma client gerado com OpenSSL presente
RUN pnpx prisma generate

RUN pnpm exec tsc --outDir dist


# ======================
# Runner
# ======================
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# 🔑 OpenSSL TAMBÉM no runtime
RUN apt-get update -y \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/server.js"]
