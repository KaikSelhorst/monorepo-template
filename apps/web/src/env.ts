import { z } from '@org/validation/zod'

const envSchema = z.object({})

export const env = envSchema.parse(process.env)
