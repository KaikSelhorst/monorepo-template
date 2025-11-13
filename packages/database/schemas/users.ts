import { sql } from 'drizzle-orm'
import { pgTable, uuid } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: uuid('id').default(sql`uuidv7()`).primaryKey(),
})
