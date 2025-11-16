import { Elysia } from 'elysia'
import { betterAuthPlugin, corsPlugin, openApiPlugin } from './plugins'

export const server = new Elysia()
  .use(corsPlugin)
  .use(openApiPlugin)
  .use(betterAuthPlugin)

export type Server = typeof server
