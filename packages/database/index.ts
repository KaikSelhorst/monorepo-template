import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'
import { env } from '@/env'
import * as schemas from './schemas'

const client = new SQL(env.DATABASE_URL)
export const db = drizzle({ client, schema: schemas })
