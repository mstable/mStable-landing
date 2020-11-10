import React, { FC } from 'react'
import styled from 'styled-components'
import createStateContext from 'react-use/lib/createStateContext'

import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { SEO } from './SEO'

import '../../styles/index.styl'
import { metadata } from '../../strings'

interface Props {
  title?: string
  description?: string
}

const Container = styled.div`
  display: grid;
  overflow-x: hidden;
  height: 100%;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

const [useLogoVisibility, LogoVisibilityProvider] = createStateContext(false)

export const Wrapper: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO
        description={description ?? metadata.description}
        title={title ?? metadata.title}
      />
      <LogoVisibilityProvider>
        <Container>
          <NavBar />
          {children}
          <Footer />
        </Container>
      </LogoVisibilityProvider>
    </>
  )
}

export { useLogoVisibility }
