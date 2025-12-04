import { auth } from '../auth'

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>

// biome-ignore lint/suspicious/noAssignInExpressions: i don`t know why it works
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema())

export const betterAuthOpenAPI = {
  getPaths: (prefix = '/auth') =>
    getSchema().then(({ paths }) => {
      const reference: typeof paths = Object.create(null)

      for (const path of Object.keys(paths)) {
        const key = prefix + path
        const pt = paths[path]
        if (!pt) continue
        reference[key] = pt

        for (const method of Object.keys(pt)) {
          const ref = reference[key]
          if (!ref) continue

          const operation = ref[method as keyof typeof ref]
          if (!operation) continue

          operation.tags = ['Better Auth']
        }
      }

      return reference
      // biome-ignore lint/suspicious/noExplicitAny: i don`t know why it works
    }) as Promise<any>,
  // biome-ignore lint/suspicious/noExplicitAny: i don`t know why it works
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const
