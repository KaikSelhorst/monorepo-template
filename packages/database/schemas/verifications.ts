import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '@/utils/schemas-types'

export const verifications = pgTable('verifications', {
  id,
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt,
  updatedAt,
})
