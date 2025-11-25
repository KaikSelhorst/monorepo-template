import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '@/utils/schemas-types'

export const users = pgTable('users', {
  id,
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt,
  updatedAt,
})
