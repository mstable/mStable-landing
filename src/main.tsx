import './style.css'

import viteSSR from 'vite-ssr/react'
import styleCollector from 'vite-ssr/react/style-collectors/styled-components'

import { App } from './App'
import { routes } from './routes'

export default viteSSR(App, { routes, styleCollector })
