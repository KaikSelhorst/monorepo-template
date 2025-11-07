import { defineConfig } from 'vite'
import { alias } from './vite-config/alias'
import {
  reactPlugin,
  tailwindPlugin,
  tanstackRouterPlugin,
} from './vite-config/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouterPlugin, reactPlugin, tailwindPlugin],
  build: { outDir: '.vite/dist' },
  resolve: { alias },
})

console.log('Node ENV', process.env.NODE_ENV)
