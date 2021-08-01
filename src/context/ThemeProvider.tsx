import React, { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { defaultTheme } from '../theme'

export const ThemeProvider: FC = ({ children }) => (
  <StyledComponentsThemeProvider theme={defaultTheme}>{children}</StyledComponentsThemeProvider>
)
