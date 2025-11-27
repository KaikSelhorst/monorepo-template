# @org/cache

Package responsible for cache configuration and management using Redis.

## Technologies

- **[Redis](https://redis.io/)** - Cache and in-memory storage system

## Environment Variables

### `SECONDARY_DATABASE_URL`

Redis server connection URL.

**Format:**
```
redis://user:password@host:port
```

**How to get:**
- **Local (Docker):** Docker Compose automatically configures it when you run `bun docker:up`
- **Production:** Configure your Redis URL on the hosting service (e.g., Fly.io, Upstash, Redis Cloud, etc.)
- **Documentation:** [Redis Connection Strings](https://redis.io/docs/management/connection-strings/)

**Example:**
```env
SECONDARY_DATABASE_URL=redis://localhost:6379
```

## Available Scripts

- `bun dev` - Starts Docker Compose with Redis
- `bun docker:up` - Starts Docker containers (Redis)
- `bun docker:down` - Stops Docker containers
- `bun docker:kill` - Removes Docker containers and volumes

## Useful Links

- [Redis Documentation](https://redis.io/docs/)
- [Redis Connection Strings](https://redis.io/docs/management/connection-strings/)
- [Upstash Redis (Cloud)](https://upstash.com/docs/redis/overall/getstarted)
