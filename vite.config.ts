import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'
// @ts-ignore
import viteSSR from 'vite-ssr/plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), viteSSR({ features: { reactStyledComponents: true } }), reactRefresh()],
  build: {
    assetsInlineLimit: 1,
  },
})
