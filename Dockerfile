# Production Dockerfile (multi-stage)
# Builder: install all deps and compile TypeScript
# Runner: install only production deps and run the compiled output

FROM node:20-bookworm-slim AS builder
WORKDIR /app

# Ensure pnpm is available inside the image
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and tsconfig first for better layer caching
COPY package.json pnpm-lock.yaml tsconfig.json ./

# Copy source and prisma schema
COPY src ./src
COPY prisma ./prisma

# Install dependencies (including dev) so we can build
RUN pnpm install --frozen-lockfile

# Build TypeScript output to /app/dist
RUN pnpm exec tsc --outDir dist


FROM node:20-bookworm-slim AS runner
WORKDIR /app

# Runtime environment
ENV NODE_ENV=production

# Make pnpm available in runner so we can install production deps
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy compiled files from builder
COPY --from=builder /app/dist ./dist

# Copy manifest files and lockfile so production install is deterministic
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies (this will fetch Prisma runtime appropriate for this image)
RUN pnpm install --prod --frozen-lockfile

# Expose port used by the app
EXPOSE 3000

# Run the compiled server
CMD ["node", "dist/server.js"]
