import React from 'react'

import { Layout } from './src/components/layout/Layout'

if (module.hot) {
  module.hot.addStatusHandler((status) => {
    if (status === 'apply') document.location.reload()
  })
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
