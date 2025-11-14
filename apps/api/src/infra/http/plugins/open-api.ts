import openapi from '@elysiajs/openapi'
import { betterAuthOpenAPI } from '@org/authentication/openapi'
import { Elysia } from 'elysia'
import z from 'zod'

export const openApiPlugin = new Elysia().use(
  openapi({
    mapJsonSchema: { zod: z.toJSONSchema },
    documentation: {
      components: await betterAuthOpenAPI.components,
      paths: await betterAuthOpenAPI.getPaths(),
    },
  }),
)
