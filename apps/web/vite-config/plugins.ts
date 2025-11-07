import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'

export const tanstackRouterPlugin = tanstackRouter({
  target: 'react',
  autoCodeSplitting: true,
})

export const tailwindPlugin = tailwindcss()
export const reactPlugin = viteReact()
