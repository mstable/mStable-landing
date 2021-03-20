import React, { FC, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useWindowScroll, useMeasure } from 'react-use'
import type { UseMeasureRef } from 'react-use/lib/useMeasure'

import { Section } from '../layout/Section'
import { logoVisibilityCtx } from '../../context'
import { FullBleed } from '../layout/FullBleed'
import { BigStats } from './BigStats'
import { AppCTA } from '../CTA'

const DownArrow = styled.div`
  position: relative;
  display: block;
  overflow: visible;
  > * {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 3rem;
    left: 50%;
    margin-left: -1rem;
    opacity: 0.4;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity 0.3s ease;
    width: 2rem;
    &:hover {
      opacity: 1;
    }
  }
`

const MissionH1 = styled.h1`
  text-align: center;
  margin: 4rem auto 2rem auto;
  max-width: 38ch;
  font-size: 2rem;
  font-weight: normal;

  @media (min-width: 400px) {
    font-size: 2.4rem;
  }
`

const BottomSection = styled(Section)`
  max-width: 50ch;
  margin: 0 auto;

  > div {
    > :first-child {
      margin-bottom: 8rem;
      > :first-child {
        > * {
          text-align: center;
        }
      }
    }
    > :last-child {
      display: flex;
      align-items: center;
      flex-direction: column;
      > :first-child {
        width: auto;
        button {
          width: auto;
        }
      }
    }
  }
`

const StyledFullBleed = styled(FullBleed)`
  margin-bottom: 0;
  > * {
    margin-bottom: 4rem;
  }
`

export const Intro: FC = () => {
  const { y } = useWindowScroll()
  const [ref, { height, top, bottom }] = useMeasure()
  const [, setLogoVisibility] = useContext(logoVisibilityCtx)

  useLayoutEffect(() => {
    setLogoVisibility(y > height + top)
  }, [y, height, top])

  return (
    <StyledFullBleed dark ref={ref as UseMeasureRef<HTMLDivElement>}>
      <Section>
        <MissionH1>Autonomous and non-custodial infrastructure for pegged-value crypto assets.</MissionH1>
      </Section>
      <BottomSection>
        <BigStats />
        <AppCTA href="https://app.mstable.org">Save with mStable</AppCTA>
      </BottomSection>
      <DownArrow
        onClick={() => {
          window.scrollTo({ top: bottom, behavior: 'smooth' })
        }}
      >
        <div>↓</div>
      </DownArrow>
    </StyledFullBleed>
  )
}
