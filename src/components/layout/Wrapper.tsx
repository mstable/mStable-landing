import styled from 'styled-components'

import { metadata } from '../../strings'
import { Constants } from '../../theme'
// import { SpaceCanvas } from '../home/GL/SpaceCanvas'
// import { Footer } from './Footer'
import { NavBar } from './Navbar'
import { SEO } from './SEO'

import type { FC } from 'react'

interface Props {
  title?: string
  description?: string
  path: string
}

const Inner = styled.div`
  > div {
    overflow-x: hidden;
  }

  display: grid;
  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

const Container = styled.div`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 992px) {
    padding-top: ${Constants.rootPt};
  }
`

export const Wrapper: FC<Props> = ({ children, path, title, description }) => (
  <>
    <SEO path={path} description={description ?? metadata.description} title={title ?? metadata.title} />
    <Container>
      {/*<SpaceCanvas />*/}
      <NavBar />
      <Inner>
        <div>{children}</div>
      </Inner>
      {/*<Footer />*/}
    </Container>
  </>
)
