import React from 'react'
import { matchRoutes } from 'react-router-config'
import viteSSR from 'vite-ssr'

import './style.css'
import { App } from './App'
import { routes } from './routes'

export default viteSSR(App, { routes }, ({ url, ...context }) => {
  const [{ route = {} } = {}] = matchRoutes(routes, url.pathname)
  return { ...route, ...context, url }
})
