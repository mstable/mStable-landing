import React, { FC, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useWindowScroll, useMeasure } from 'react-use'
import type { UseMeasureRef } from 'react-use/lib/useMeasure'

import { Section } from '../layout/Section'
import { logoVisibilityCtx } from '../../context'
import { FullBleed } from '../layout/FullBleed'
import { LinkButton } from '../CTA'
import { BigStats } from './BigStats'

const Mission = styled(Section)`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    @media (min-width: 400px) {
      font-size: 2.75rem;
    }
  }

  h2 {
    font-size: 1.125rem;
    opacity: 0.5;
    max-width: 90ch;
    font-weight: normal;
  }
`

const BottomSection = styled(Section)`
  overflow: visible;
  > div {
    display: flex;
    justify-content: center;
    > :not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

const Container = styled(FullBleed)`
  padding: 5rem 0;

  > * {
    margin-top: 5rem;
  }
`

export const Intro: FC = () => {
  const { y } = useWindowScroll()
  const [ref, { height, top }] = useMeasure()
  const [, setLogoVisibility] = useContext(logoVisibilityCtx)

  useLayoutEffect(() => {
    setLogoVisibility(y > top)
  }, [y, height, top])

  return (
    <Container ref={ref as UseMeasureRef<HTMLDivElement>}>
      <Mission>
        <h1>Decentralised Stablecoin Ecosystem</h1>
        <h2>
          Low slippage swaps, interest-bearing assets, and an open community.
          <br /> mStable is a stablecoin ecosystem, built on the EVM and powered by $MTA.
        </h2>
      </Mission>
      <BottomSection>
        <LinkButton href="https://mstable.app" highlight>
          Use mStable
        </LinkButton>
        <LinkButton href="https://www.notion.so/mStable-7b694f44df6344369feaa5223b297162">Learn more</LinkButton>
      </BottomSection>
      <BigStats />
    </Container>
  )
}
