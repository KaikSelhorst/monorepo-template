import { cors } from '@elysiajs/cors'
import Elysia from 'elysia'
import { env } from '@/env'

export const corsPlugin = new Elysia().use(
  cors({
    origin: env.ORIGIN_ALLOWED,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
