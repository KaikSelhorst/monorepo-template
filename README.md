# Zomboid Build

Monorepo template for full-stack development with TypeScript, React, Bun, and Elysia.

## 🚀 Main Technologies

### Runtime & Build Tools
- **[Bun](https://bun.sh/)** - High-performance JavaScript/TypeScript runtime
  - 📖 [Documentation](https://bun.sh/docs)
- **[Turbo](https://turbo.build/)** - Build system for monorepos
  - 📖 [Documentation](https://turbo.build/repo/docs)

### Frontend
- **[React](https://react.dev/)** - Library for user interfaces
  - 📖 [Documentation](https://react.dev/)
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
  - 📖 [Documentation](https://tanstack.com/router/latest)
- **[TanStack Query](https://tanstack.com/query)** - Server state management
  - 📖 [Documentation](https://tanstack.com/query/latest)
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
  - 📖 [Documentation](https://vitejs.dev/)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
  - 📖 [Documentation](https://tailwindcss.com/docs)

### Backend
- **[Elysia](https://elysiajs.com/)** - Fast TypeScript web framework
  - 📖 [Documentation](https://elysiajs.com/)
- **[Better Auth](https://www.better-auth.com/)** - Authentication system
  - 📖 [Documentation](https://www.better-auth.com/docs)

### Database
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM for PostgreSQL
  - 📖 [Documentation](https://orm.drizzle.team/)
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
  - 📖 [Documentation](https://www.postgresql.org/docs/)
- **[Redis](https://redis.io/)** - Cache and in-memory storage
  - 📖 [Documentation](https://redis.io/docs/)

### DevOps & Deploy
- **[Vercel](https://vercel.com/)** - Frontend deployment
  - 📖 [Documentation](https://vercel.com/docs)
- **[Fly.io](https://fly.io/)** - Backend deployment
  - 📖 [Documentation](https://fly.io/docs)
- **[GitHub Actions](https://docs.github.com/en/actions)** - CI/CD
  - 📖 [Documentation](https://docs.github.com/en/actions)

### Code Quality
- **[Biome](https://biomejs.dev/)** - Linter and formatter
  - 📖 [Documentation](https://biomejs.dev/)
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset with types
  - 📖 [Documentation](https://www.typescriptlang.org/docs/)

## 📦 Project Structure

```
zomboid-build/
├── apps/
│   ├── api/          # Backend API (Elysia + Bun)
│   └── web/          # Frontend (React + Vite)
├── packages/
│   ├── auth/         # Authentication (Better Auth)
│   ├── cache/         # Cache (Redis)
│   ├── database/      # Database (Drizzle + PostgreSQL)
│   ├── design-system/ # Shared UI components
│   ├── linter/        # Linting configuration
│   ├── tsconfig/      # TypeScript configurations
│   └── validation/    # Validation schemas (Zod)
└── scripts/           # Utility scripts
```

## 🛠️ How to Use

This project is a template. To create a new repository from this template:

1. Click the **"Use this template"** button on GitHub
2. Follow the instructions to create your repository
3. Clone the created repository
4. Configure environment variables (see sections below)

## 🔐 Environment Variables

### Local Configuration

For local development, create `.env` files in the respective apps/packages. Check the documentation for each app/package:

- 📖 [API - Environment Variables](./apps/api/README.md#environment-variables)
- 📖 [Web - Environment Variables](./apps/web/README.md#environment-variables)
- 📖 [Auth Package](./packages/auth/README.md)
- 📖 [Database Package](./packages/database/README.md)
- 📖 [Cache Package](./packages/cache/README.md)

### Required Variables Summary

#### For API (Fly.io)
- `DATABASE_URL` - PostgreSQL URL
- `SECONDARY_DATABASE_URL` - Redis URL
- `ORIGIN_ALLOWED` - Allowed origins (CORS)
- `DISCORD_CLIENT_ID` - Discord application ID
- `DISCORD_CLIENT_SECRET` - Discord application secret

#### For Web (Vercel)
- `VITE_API_URL` - Backend API URL

## 🚢 Deploy and CI/CD

The project uses GitHub Actions for automatic CI/CD. Deployment is triggered when a **release is published** on GitHub.

### How It Works

1. **Trigger:** Publishing a release on GitHub
2. **Change Detection:** The workflow detects changes in `apps/web` or `apps/api`
3. **Automatic Deploy:**
   - **Web:** Deploy to Vercel
   - **API:** Deploy to Fly.io
4. **Health Check:** Automatic API health verification
5. **Rollback:** Automatic rollback on failure

### GitHub Secrets Configuration

For CI/CD to work, you need to add the following secrets on GitHub:

#### 1. Access Secrets Configuration

1. Go to the repository on GitHub
2. Click **Settings**
3. In the sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

#### 2. Required Secrets

##### `VERCEL_TOKEN`

Vercel access token for frontend deployment.

**How to get:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings** → **Tokens**
3. Click **Create Token**
4. Give the token a name (e.g., "GitHub Actions")
5. Copy the generated token
6. **Documentation:** [Vercel - Authentication](https://vercel.com/docs/security/api-tokens)

**Add to GitHub:**
- Name: `VERCEL_TOKEN`
- Value: Paste the copied token
- Click **Add secret**

##### `FLY_API_TOKEN`

Fly.io access token for backend deployment.

**How to get:**
1. Go to [Fly.io Dashboard](https://fly.io/dashboard)
2. Run in terminal: `fly auth token`
3. Copy the displayed token
4. **Documentation:** [Fly.io - Access Tokens](https://fly.io/docs/reference/tokens/)

**Add to GitHub:**
- Name: `FLY_API_TOKEN`
- Value: Paste the copied token
- Click **Add secret**

### Environment Variables Configuration on Platforms

#### Fly.io (Backend)

After creating the app on Fly.io, add environment variables:

**Via CLI:**
```bash
fly secrets set DATABASE_URL="postgresql://..." -a zomboid-api
fly secrets set SECONDARY_DATABASE_URL="redis://..." -a zomboid-api
fly secrets set ORIGIN_ALLOWED="https://your-app.vercel.app" -a zomboid-api
fly secrets set DISCORD_CLIENT_ID="your_client_id" -a zomboid-api
fly secrets set DISCORD_CLIENT_SECRET="your_client_secret" -a zomboid-api
```

**Via Dashboard:**
1. Go to [Fly.io Dashboard](https://fly.io/dashboard)
2. Select your app (`zomboid-api`)
3. Go to **Secrets**
4. Add each environment variable
5. **Documentation:** [Fly.io - Secrets](https://fly.io/docs/reference/secrets/)

**Reference Links:**
- 📖 [Fly.io - Environment Variables](https://fly.io/docs/reference/secrets/)
- 📖 [Fly.io - PostgreSQL](https://fly.io/docs/postgres/)
- 📖 [Fly.io - Redis](https://fly.io/docs/redis/)

#### Vercel (Frontend)

**Via Dashboard:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (`zomboid-web`)
3. Go to **Settings** → **Environment Variables**
4. Add the variable:
   - **Key:** `VITE_API_URL`
   - **Value:** Your API URL (e.g., `https://zomboid-api.fly.dev`)
   - **Environment:** Production, Preview, Development (select as needed)
5. Click **Save**
6. **Documentation:** [Vercel - Environment Variables](https://vercel.com/docs/projects/environment-variables)

**Reference Links:**
- 📖 [Vercel - Environment Variables](https://vercel.com/docs/projects/environment-variables)
- 📖 [Vercel - Deployments](https://vercel.com/docs/deployments/overview)

### How to Create a Release

To trigger deployment:

1. Go to the **Releases** tab on GitHub
2. Click **Create a new release**
3. Choose the tag (or create a new one)
4. Fill in the title and description
5. Click **Publish release**
6. CI/CD will be triggered automatically

**Documentation:** [GitHub - Creating Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

## 📚 Apps and Packages Documentation

### Apps

- 📖 [API](./apps/api/README.md) - Backend API with Elysia
- 📖 [Web](./apps/web/README.md) - Frontend with React

### Packages

- 📖 [Auth](./packages/auth/README.md) - Authentication with Better Auth
- 📖 [Database](./packages/database/README.md) - Database with Drizzle ORM
- 📖 [Cache](./packages/cache/README.md) - Cache with Redis

## 🧑‍💻 Development

### Prerequisites

- [Bun](https://bun.sh/) installed (version 1.3.3 or higher)
- Docker and Docker Compose (for local database)

### Main Commands

```bash
# Install dependencies
bun install

# Development (all apps)
bun dev

# Build (all apps)
bun build

# Linting
bun lint

# Formatting
bun format
```

### Available Scripts

- `bun dev` - Starts all apps in development mode
- `bun build` - Builds all apps
- `bun preview` - Preview of builds
- `bun lint` - Runs the linter
- `bun format` - Formats the code
- `bun check` - Checks code and formatting
- `bun check:write` - Automatically fixes found issues

## 📝 Notes

### Bun Warning on Windows

When running `bun run dev` on Windows, you may see a message about files "outside the project directory" not being watched. This is a Windows limitation related to the limited number of file watchers. It's just a safety measure from Bun and doesn't affect functionality. For more details, see the [API README](./apps/api/README.md).

## 🔗 Useful Links

- [Bun Documentation](https://bun.sh/docs)
- [Turbo Documentation](https://turbo.build/repo/docs)
- [Elysia Documentation](https://elysiajs.com/)
- [React Documentation](https://react.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Fly.io Documentation](https://fly.io/docs)
