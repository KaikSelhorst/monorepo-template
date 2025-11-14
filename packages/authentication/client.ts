import { createAuthClient } from 'better-auth/react'

export function generateAuthClient(baseURL: string) {
  return createAuthClient({
    baseURL: baseURL,
    basePath: '/auth',
  })
}
