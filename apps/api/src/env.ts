import { z } from '@org/validation/zod'

const schema = z.object({ DATABASE_URL: z.url() })

export const env = schema.parse(process.env)
