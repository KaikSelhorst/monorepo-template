FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copia apenas o necessário para instalar deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copia código (sem node_modules graças ao .dockerignore)
COPY . .

# Gera o binário standalone
RUN bun build ./src/index.ts \
    --compile \
    --minify \
    --sourcemap \
    --target=bun-linux-x64 \
    --outfile /app/zomboid-api

# Etapa final
FROM oven/bun:1-alpine
WORKDIR /app
COPY --from=builder /app/zomboid-api .
RUN chmod +x zomboid-api
EXPOSE 3000
CMD ["./zomboid-api"]
