# Web

Frontend application built with React, TanStack Router, Vite, and Tailwind CSS.

## Technologies

- **[React](https://react.dev/)** - JavaScript library for user interfaces
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing for React
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Better Auth](https://www.better-auth.com/)** - Authentication client

## Environment Variables

### `VITE_API_URL`

Backend API base URL.

**Format:**
```
https://api.example.com
```

**How to get:**
- **Local development:** Usually `http://localhost:3001` (or the port where your API is running)
- **Production:** URL of your deployed backend (e.g., `https://monorepo-template-api.fly.dev`)
- **Documentation:** [Vite - Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

**Example:**
```env
# Development
VITE_API_URL=http://localhost:3001

# Production
VITE_API_URL=https://monorepo-template-api.fly.dev
```

**⚠️ Important:** Environment variables in Vite must start with `VITE_` to be exposed to the client.

## Available Scripts

- `bun dev` - Starts the development server on port 3000
- `bun build` - Generates production build
- `bun preview` - Preview of production build

## Deploy

The web application is deployed on **Vercel**. CI/CD automatically:
1. Detects changes in the `apps/web` folder
2. Builds the application
3. Deploys to Vercel

For more information about deployment, see the [main README](../../README.md#deploy).

## Structure

```
apps/web/
├── src/
│   ├── app.tsx              # Root component
│   ├── main.tsx             # Entry point
│   ├── components/          # React components
│   ├── pages/               # Pages/routes
│   ├── lib/                 # Utilities and helpers
│   └── styles/              # Global styles
├── public/                  # Static files
└── vite.config.ts           # Vite configuration
```

## Useful Links

- [React Documentation](https://react.dev/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
