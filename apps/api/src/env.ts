import { schema as cacheEnv } from '@org/cache/env'
import { schema as databaseEnv } from '@org/database/env'
import { z } from '@org/validation/zod'

const schema = z.object({
  ...databaseEnv.shape,
  ...cacheEnv.shape,
  FRONT_END_URL: z.url(),
})

export const env = schema.parse(process.env)
