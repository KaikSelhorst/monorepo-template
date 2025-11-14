import '@/env'
import { auth } from '@org/authentication'
import { cacheClient } from '@org/cache'
import { database } from '@org/database'

import { Elysia } from 'elysia'

const app = new Elysia()
  .mount(auth.handler)
  .get('/', async () => {
    try {
      const cachedUsers = await cacheClient.get('users')

      if (cachedUsers) {
        return JSON.parse(cachedUsers)
      }

      const users = await database.query.usersTable.findMany()

      if (!cachedUsers) {
        await cacheClient.set('users', JSON.stringify(users), 'EX', 60)
      }

      return users
    } catch (error) {
      console.error(error)
      return { error: 'Failed to fetch users' }
    }
  })
  .get('/health', () => ({
    message: 'OK',
  }))
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
