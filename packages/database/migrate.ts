import { migrate } from 'drizzle-orm/bun-sql/migrator'
import { database } from '.'

async function main() {
  console.log('Starting database migration...')

  try {
    await migrate(database, { migrationsFolder: './migrations' })
    console.log('Migration completed successfully.')
  } catch (error: unknown) {
    console.error('Migration failed!')
    if (error instanceof Error) {
      console.error(`Error details: ${error.message}`)
    } else {
      console.error(`Error details: ${String(error)}`)
    }
    process.exit(1)
  }
  process.exit(0)
}

main()
