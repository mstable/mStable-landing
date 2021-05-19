import React, { FC, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { SEO } from './SEO'
import { metadata } from '../../strings'
import { Coins } from '../home/Coins'

interface Props {
  title?: string
  description?: string
  path: string
  isHome: boolean
}

const Inner = styled.div`
  position: relative;

  > :first-child {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
  }
`

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

export const Wrapper: FC<Props> = ({ children, path, title, description, isHome }) => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <>
      <SEO path={path} description={description ?? metadata.description} title={title ?? metadata.title} />
      <Container>
        <NavBar />
        <Inner>
          <Coins isHome={isHome} />
          <div>{children}</div>
        </Inner>
        <Footer />
      </Container>
    </>
  )
}
