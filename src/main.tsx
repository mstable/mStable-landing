import './style.css'

import viteSSR from 'vite-ssr/react'

import { App } from './App'
import { routes } from './routes'

export default viteSSR(App, { routes })
