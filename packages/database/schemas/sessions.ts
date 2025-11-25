import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '@/utils/schemas-types'
import { users } from './users'

export const sessions = pgTable('sessions', {
  id,
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt,
  updatedAt,
})
