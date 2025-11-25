# @org/database

Package responsible for PostgreSQL database configuration and management using Drizzle ORM.

## Technologies

- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM for PostgreSQL
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - CLI tool for migrations and schema management
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database

## Environment Variables

### `DATABASE_URL`

PostgreSQL database connection URL.

**Format:**
```
postgresql://user:password@host:port/database_name
```

**How to get:**
- **Local (Docker):** Docker Compose automatically configures it when you run `bun docker:up`
- **Production:** Configure your PostgreSQL URL on the hosting service (e.g., Fly.io, Railway, Supabase, etc.)
- **Documentation:** [Drizzle - Database Connection](https://orm.drizzle.team/docs/get-started-postgresql#postgresjs)

**Example:**
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/monorepo_template_db
```

## Available Scripts

- `bun dev` - Starts Docker Compose and opens Drizzle Studio on port 7000
- `bun db:generate` - Generates migrations based on schema changes
- `bun db:migrate` - Runs pending migrations on the database
- `bun docker:up` - Starts Docker containers (PostgreSQL)
- `bun docker:down` - Stops Docker containers
- `bun docker:kill` - Removes Docker containers and volumes

## Structure

```
packages/database/
├── schemas/          # Database schema definitions
├── migrations/       # Generated migration files
├── utils/           # Utilities and types
└── drizzle.config.ts # Drizzle Kit configuration
```

## Useful Links

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Drizzle Kit - Migrations](https://orm.drizzle.team/kit-docs/overview#migrations)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
