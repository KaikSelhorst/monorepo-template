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
- `bun build:alpine` - Compiles for Linux Alpine (used in deployment)
- `bun preview` - Runs the compiled binary

## Deploy

The API is deployed on **Fly.io** using Docker. CI/CD automatically:
1. Compiles the application for Linux Alpine
2. Deploys using Fly.io CLI
3. Runs health checks
4. Performs automatic rollback on failure

For more information about deployment, see the [main README](../../README.md#deploy).

## Structure

```
apps/api/
├── src/
│   ├── index.ts              # Entry point
│   ├── env.ts                # Environment variables validation
│   └── infra/
│       └── http/             # HTTP server configuration
├── Dockerfile                # Docker configuration
└── fly.toml                  # Fly.io configuration
```

## Useful Links

- [Elysia Documentation](https://elysiajs.com/)
- [Bun Documentation](https://bun.sh/docs)
- [Fly.io Documentation](https://fly.io/docs/)
