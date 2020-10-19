import React, { FC } from 'react'
import styled from 'styled-components'
import createStateContext from 'react-use/lib/createStateContext'

import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { Section } from './Section'

interface Props {
  title?: string
  subtitle?: string
}

const Container = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

const [useLogoVisibility, LogoVisibilityProvider] = createStateContext(false)

export const Page: FC<Props> = ({ title, subtitle, children }) => (
  <LogoVisibilityProvider>
    <Container>
      <NavBar />
      {title && (
        <header>
          <Section title={title} subtitle={subtitle} />
        </header>
      )}
      {children}
      <Footer />
    </Container>
  </LogoVisibilityProvider>
)

export { useLogoVisibility }
