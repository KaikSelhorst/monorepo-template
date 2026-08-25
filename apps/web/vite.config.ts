import { defineConfig } from 'vite'
import { alias } from './vite-config/alias.ts'
import { plugins } from './vite-config/plugins.ts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  build: { outDir: '.vite/dist' },
  resolve: { alias },
})
