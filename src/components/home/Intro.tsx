import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../layout/Section'
import { LinkButton } from '../CTA'
import { BigStats } from './BigStats'

const Action = styled.div`
  display: flex;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (min-width: 480px) {
    > *:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

const Container = styled(Section)`
  > header {
    @media (max-width: calc(480px - 1px)) {
      margin-top: 0;
    }
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

export const Intro: FC = () => (
  <Container
    h1="Decentralised Stablecoin Ecosystem"
    h2="Swap, save and protect your stablecoins on mStable, a decentralised, community driven platform powered by $MTA"
  >
    <Action>
      <LinkButton href="https://mstable.app" highlight>
        Use mStable
      </LinkButton>
      <LinkButton href="https://www.notion.so/mStable-7b694f44df6344369feaa5223b297162">Learn more</LinkButton>
    </Action>
    <BigStats />
  </Container>
)
