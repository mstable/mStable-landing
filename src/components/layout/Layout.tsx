import React, { FC } from 'react'

import '../../styles/index.styl'
import { SEO } from './SEO'

export const Layout: FC = ({ children }) => (
  <>
    <SEO />
    {children}
  </>
)
