import styled from 'styled-components'

import { Section } from '../layout/Section'

import type { FC } from 'react'

const Container = styled(Section)`
  padding-top: 20vh;

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

    @media (min-width: 480px) {
      > *:not(:last-child) {
        margin-bottom: 5rem;
      }
    }
  }

  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1.5rem;

    @media (min-width: 480px) {
      font-size: 2.75rem;
    }
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

export const Hero: FC = () => (
  <Container
    h1="Decentralized Stablecoin Ecosystem"
    h2="Trade and earn yield on your stablecoins on mStable, a decentralized and non-custodial protocol powered by $MTA"
  />
)
