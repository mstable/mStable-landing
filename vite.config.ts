import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import viteSSR from 'vite-ssr/plugin.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), viteSSR(), react()],
  build: {
    assetsInlineLimit: 1,
  },
})
