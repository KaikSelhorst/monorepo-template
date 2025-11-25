import { sql } from 'drizzle-orm'
import {  timestamp, uuid } from 'drizzle-orm/pg-core'

export const id = uuid().default(sql`uuidv7()`).primaryKey()

export const createdAt = timestamp('created_at').notNull().defaultNow()
export const updatedAt = timestamp('updated_at').notNull().defaultNow()
export const deletedAt = timestamp('deleted_at').notNull().defaultNow()
