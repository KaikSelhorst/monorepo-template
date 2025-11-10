# apps/api/Dockerfile
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copia apenas o necessário para instalar deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copia código
COPY . .

# GERA O BINÁRIO STANDALONE
RUN bun build ./src/index.ts \
    --compile \
    --minify \
    --sourcemap \
    --target=bun-linux-x64 \
    --outfile /app/zomboid-api

# ETAPA FINAL: IMAGEM MINIMALISTA
FROM alpine:latest

WORKDIR /app

# Copia apenas o binário
COPY --from=builder /app/zomboid-api .

# Permissão de execução
RUN chmod +x zomboid-api

# Porta
EXPOSE 3000

# Roda o binário
CMD ["./zomboid-api"]
