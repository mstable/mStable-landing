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
  margin: 2rem 0 4rem 0;
  text-align: center;

  h1,
  h2 {
    font-weight: normal;
    padding: 0 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 400px) {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 1.2rem;
  }
`

const BottomSection = styled(Section)`
  margin: 2rem 0 4rem 0;
  overflow: visible;
  > div {
    display: flex;
    justify-content: center;
    > :not(:last-child) {
      margin-right: 2rem;
    }
  }
`

export const Intro: FC = () => {
  const { y } = useWindowScroll()
  const [ref, { height, top }] = useMeasure()
  const [, setLogoVisibility] = useContext(logoVisibilityCtx)

  useLayoutEffect(() => {
    setLogoVisibility(y > height + top)
  }, [y, height, top])

  return (
    <FullBleed ref={ref as UseMeasureRef<HTMLDivElement>}>
      <Mission>
        <h1>Decentralised Stablecoin Ecosystem</h1>
        <h2>
          mStable is a fully encompassing stablecoin ecosystem. It is built on the EVM and designed to address challenges faced with
          stablecoin innovation and growth.
        </h2>
      </Mission>
      <BottomSection>
        <LinkButton href="https://app.mstable.org" highlight>
          Use mStable
        </LinkButton>
        <LinkButton href="">Learn more</LinkButton>
      </BottomSection>
      <BigStats />
    </FullBleed>
  )
}
