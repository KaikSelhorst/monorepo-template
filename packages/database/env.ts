import { z } from '@org/validation/zod'

export const schema = z.object({ DATABASE_URL: z.url() })
export const env = schema.parse(process.env)
