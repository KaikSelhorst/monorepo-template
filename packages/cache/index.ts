import { RedisClient } from 'bun'
import { env } from '@/env'

export const cacheClient = new RedisClient(env.SECONDARY_DATABASE_URL)
