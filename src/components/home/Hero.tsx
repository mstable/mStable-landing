import styled from 'styled-components'

import { Constants } from '../../theme'
import { Section } from '../layout/Section'

import type { FC } from 'react'

const Container = styled(Section)`
  padding-top: 4rem;
  height: calc(100vh - ${Constants.navHeight});
  width: 100%;
  background: url('../assets/img/mstable-mobile-coming-soon.png') no-repeat center;
  background-size: 60% auto;
  display: flex;
  align-items: start;
  justify-content: center;

  @media (min-width: 992px) {
    padding-top: 0;
    align-items: center;
    background: url('../assets/img/mstable-desktop-coming-soon.png') no-repeat center center;
    height: calc(100vh - ${Constants.navHeight} - ${Constants.navHeight} - ${Constants.rootPt});
    background-size: 90% auto;
  }

  @media (orientation: landscape) and (max-width: 991px) {
    background: url('../assets/img/mstable-desktop-coming-soon.png') no-repeat center center;
    height: calc(100vh - ${Constants.navHeight});
    background-size: cover;
    align-items: center;
  }

  > header {
    margin-top: 0;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > *:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.125rem;
    opacity: 0.5;
    max-width: 80ch;
    font-weight: normal;

    @media (min-width: 480px) {
      font-size: 2.75rem;
      font-size: 1.25rem;
    }
  }
`

const Logo = styled.img`
  height: 36px;
  aspect-ratio: 477/80;

  @media (min-width: 992px) {
    height: 90px;
  }

  @media (orientation: landscape) and (max-width: 991px) {
    height: 90px;
  }
`

export const Hero: FC = () => (
  <Container>
    <Logo src="../mstable-logo.png"></Logo>
    <h1>Coming soon</h1>
  </Container>
)
