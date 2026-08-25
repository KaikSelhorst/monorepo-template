# API

Backend API built with Elysia and Bun, providing RESTful endpoints with authentication and database integration.

## Technologies

- **[Bun](https://bun.sh/)** - High-performance JavaScript/TypeScript runtime
- **[Elysia](https://elysiajs.com/)** - Fast and type-safe TypeScript web framework
- **[Better Auth](https://www.better-auth.com/)** - Authentication system
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM for PostgreSQL
- **[Redis](https://redis.io/)** - Cache and sessions

## Environment Variables

The API uses environment variables from multiple packages. Check each package's documentation for details on how to configure each variable:

### Database Package Variables

- **`DATABASE_URL`** - PostgreSQL connection URL
  - 📖 [See database package documentation](../../packages/database/README.md#environment-variables)

### Cache Package Variables

- **`SECONDARY_DATABASE_URL`** - Redis connection URL
  - 📖 [See cache package documentation](../../packages/cache/README.md#environment-variables)

### Auth Package Variables

- **`DISCORD_CLIENT_ID`** - Discord application ID
  - 📖 [See auth package documentation](../../packages/auth/README.md#discord_client_id)
- **`DISCORD_CLIENT_SECRET`** - Discord application secret
  - 📖 [See auth package documentation](../../packages/auth/README.md#discord_client_secret)
- **`ORIGIN_ALLOWED`** - Allowed origins for CORS
  - 📖 [See auth package documentation](../../packages/auth/README.md#origin_allowed)

## Quick Variables Summary

```env
# Database
DATABASE_URL=postgresql://user:password@host:port/database_name

# Cache
SECONDARY_DATABASE_URL=redis://host:port

# Auth
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
ORIGIN_ALLOWED=http://localhost:3000
```

## Available Scripts

- `bun dev` - Starts the server in development mode with hot-reload
- `bun build` - Compiles the application to an executable
- `bun build:alpine` - Compiles for Linux Alpine (used by the Docker image)
- `bun run docker:build` - Compiles for Alpine and builds a local `api:local` image
- `bun preview` - Runs the compiled binary

## Deploy

CI publishes a Docker image to **GitHub Container Registry**. On push to `main` it:
1. Compiles the application for Linux Alpine (`bun-linux-x64-musl`)
2. Builds the image from this `Dockerfile`
3. Pushes `ghcr.io/<owner>/<repo>/api:latest` and a SHA tag

Pull and run:

```bash
docker pull ghcr.io/<owner>/<repo>/api:latest
docker run --env-file .env -p 3001:3001 ghcr.io/<owner>/<repo>/api:latest
```

Build locally without pushing:

```bash
bun run docker:build
docker run --env-file .env -p 3001:3001 api:local
```

For more information about deployment, see the [main README](../../README.md#deploy-and-cicd).

## Structure

```
apps/api/
├── src/
│   ├── index.ts              # Entry point
│   ├── env.ts                # Environment variables validation
│   └── infra/
│       └── http/             # HTTP server configuration
├── Dockerfile                # Docker configuration
└── .dockerignore             # Docker build exclusions
```

## Useful Links

- [Elysia Documentation](https://elysiajs.com/)
- [Bun Documentation](https://bun.sh/docs)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
