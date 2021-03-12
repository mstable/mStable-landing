import React, { FC } from 'react'
import styled from 'styled-components'

import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { SEO } from './SEO'
import { metadata } from '../../strings'

interface Props {
  title?: string
  description?: string
}

const Container = styled.div`
  display: grid;
  overflow-x: hidden;
  min-height: 100vh;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

export const Wrapper: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO description={description ?? metadata.description} title={title ?? metadata.title} />
      <Container>
        <NavBar />
        {children}
        <Footer />
      </Container>
    </>
  )
}
