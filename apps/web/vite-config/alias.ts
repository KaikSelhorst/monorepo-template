import { fileURLToPath } from 'node:url'
import type { AliasOptions } from 'vite'

export const alias: AliasOptions = {
  '@': fileURLToPath(new URL('../src', import.meta.url)),
  '@org': fileURLToPath(new URL('../../../packages', import.meta.url)),
}
