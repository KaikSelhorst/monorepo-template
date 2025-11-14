import { z } from '@org/validation/zod'

// Traduzir para plural
export const schema = z.object({
  ORIGIN_ALLOWED: z
    .string()
    .transform((value) => value.split(',').map((origin) => origin.trim())),
})

export const env = schema.parse(process.env)
