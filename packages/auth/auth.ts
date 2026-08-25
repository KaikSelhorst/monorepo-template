import { cacheClient } from '@org/cache'
import { database } from '@org/database'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { openAPI } from 'better-auth/plugins'
import { env } from './env'

export const auth = betterAuth({
  basePath: '/auth',
  plugins: [openAPI()],
  database: drizzleAdapter(database, { provider: 'pg', usePlural: true }),
  trustedOrigins: env.ORIGIN_ALLOWED,

  advanced: { database: { generateId: false } },
  secondaryStorage: {
    delete: async (key) => {
      await cacheClient.del(key)
    },
    get: (key) => cacheClient.get(key),
    getAndDelete: (key) => cacheClient.getdel(key),
    increment: async (key, ttl) => {
      const value = await cacheClient.send('EVAL', [
        'local value = redis.call("INCR", KEYS[1]) if value == 1 then redis.call("EXPIRE", KEYS[1], ARGV[1]) end return value',
        '1',
        key,
        String(ttl),
      ])
      return Number(value)
    },
    set: async (key, value, ttl) => {
      if (ttl) await cacheClient.set(key, value, 'EX', String(ttl))
      else await cacheClient.set(key, value)
    },
  },

  session: { cookieCache: { enabled: true, maxAge: 60 * 5 } },

  socialProviders: {
    discord: {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    },
  },
})
