import React, { FC, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { SpaceCanvas } from '../home/GL/SpaceCanvas'
import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { SEO } from './SEO'
import { metadata } from '../../strings'

interface Props {
  title?: string
  description?: string
  path: string
  isHome: boolean
}

const Inner = styled.div`
  > div {
    overflow-x: hidden;
  }
`

const Container = styled.div`
  display: grid;
  min-height: 100vh;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

export const Wrapper: FC<Props> = ({ children, path, title, description, isHome }) => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <>
      <SEO path={path} description={description ?? metadata.description} title={title ?? metadata.title} />
      <Container>
        <SpaceCanvas />
        <NavBar />
        <Inner>
          <div>{children}</div>
        </Inner>
        <Footer />
      </Container>
    </>
  )
}
