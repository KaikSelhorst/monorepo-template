import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => ({
    message: 'Hello Elysia',
  }))
  .get('/health', () => ({
    message: 'OK',
  }))
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
