import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'
import { env } from '@/env'
import * as schemas from './schemas'

console.log('Database URL:', env.DATABASE_URL)
const client = new SQL(env.DATABASE_URL)
export const database = drizzle({ client, schema: schemas })
