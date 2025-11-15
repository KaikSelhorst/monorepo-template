import { schema as databaseSchema } from '@org/database/env'
import { z } from '@org/validation/zod'

export const schema = z.object({
  ...databaseSchema.shape,
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_CLIENT_SECRET: z.string().min(1),
  ORIGIN_ALLOWED: z
    .string()
    .transform((value) => value.split(',').map((origin) => origin.trim())),
})

export const env = schema.parse(process.env)
