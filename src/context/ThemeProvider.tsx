import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { defaultTheme } from '../theme'

import type { FC } from 'react'

export const ThemeProvider: FC = ({ children }) => (
  <StyledComponentsThemeProvider theme={defaultTheme}>{children}</StyledComponentsThemeProvider>
)
