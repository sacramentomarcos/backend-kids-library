# ---------- builder ----------
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

COPY . .
RUN pnpm prisma generate
RUN pnpm build


# ---------- runner ----------
FROM node:20-slim AS runner

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/generated ./src/generated

EXPOSE 3000

CMD ["node", "dist/app.js"]
