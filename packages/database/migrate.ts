import { migrate } from 'drizzle-orm/bun-sql/migrator'
import { database } from '.'

export async function migrateDatabase() {
  console.log('Starting database migration...')

  try {
    await migrate(database, { migrationsFolder: './migrations' })
    console.log('Migration completed successfully.')
  } catch (error: unknown) {
    console.error('Migration failed!')
    if (error instanceof Error) {
      console.error(`Error details: ${error.message}`)
    }
    console.error(`Error details: ${String(error)}`)
    process.exit(1)
  }
}

// This verifies if this file is being run directly
// ex: bun run migrate.ts (this file will be executed)
// if another file imports this file, it will not be executed
if (import.meta.path === Bun.main) {
  await migrateDatabase()
  process.exit(0)
}
