import '@/env'

import { server } from './infra/http/server'

const app = server
  .get('/', async () => ({ message: 'Your API is running. <3' }))
  .get('/health', () => ({
    message: 'OK',
  }))
  .listen({ hostname: '0.0.0.0', port: 3001 })

console.log(`🦊 Elysia is running at ${app.server?.url}`)
