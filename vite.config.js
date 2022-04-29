import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path'
//https://vitejs.dev/config/
export default defineConfig({
  base: '/meal-plan/',
  plugins: [svelte()],
  resolve: {
    alias: {
      $src: path.resolve('./src')
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    },
    cors: true
  }
})