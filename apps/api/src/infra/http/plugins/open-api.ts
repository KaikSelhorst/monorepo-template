import openapi from '@elysiajs/openapi'
import { betterAuthOpenAPI } from '@org/auth/openapi'
import { z } from '@org/validation/zod'
import { Elysia } from 'elysia'

export const openApiPlugin = new Elysia().use(
  openapi({
    mapJsonSchema: { zod: z.toJSONSchema },
    documentation: {
      components: await betterAuthOpenAPI.components,
      paths: await betterAuthOpenAPI.getPaths(),
    },
  }),
)
