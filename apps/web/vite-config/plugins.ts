import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'

const tanstackRouterPlugin = tanstackRouter({
  target: 'react',
  autoCodeSplitting: true,
  generatedRouteTree: './src/routeTree.gen.ts',
  routesDirectory: './src/pages',
  routeToken: 'layout',
  quoteStyle: 'single',
})

const tanstackDevTools = devtools({ removeDevtoolsOnBuild: true })

const tailwindPlugin = tailwindcss()
const reactPlugin = viteReact()

export const plugins = [
  tanstackRouterPlugin,
  reactPlugin,
  tailwindPlugin,
  tanstackDevTools,
]
