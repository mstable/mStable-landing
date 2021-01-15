import React, { FC, useLayoutEffect } from 'react'
import styled from 'styled-components'
import useWindowScroll from 'react-use/lib/useWindowScroll'
import useMeasure, { UseMeasureRef } from 'react-use/lib/useMeasure'

import LogoSvg from '../../images/mstable-logo.svg'
import { Section } from '../layout/Section'
import { MainAndAside } from '../layout/Grid'
import { useLogoVisibility } from '../layout/Wrapper'
import { FullBleed } from '../layout/FullBleed'
import { BigStats } from './BigStats'
import { AppCTA } from '../CTA'
import { Colors } from '../../theme'

const LogoImg = styled.img`
  width: 100%;
  margin-bottom: 64px;

  @media (min-width: 520px) {
    min-width: 400px;
    width: 35%;
  }
`

const Logo: FC = () => {
  return <LogoImg src={LogoSvg} alt="mStable" />
}

const MissionText = styled.div`
  h1 {
    margin-top: -5px;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: normal;

    @media (min-width: 400px) {
      font-size: 36px;
    }
  }
`

const BottomSection = styled(Section)`
  margin-bottom: 0;
  > * {
    max-width: 75ch;
  }
`

const StyledFullBleed = styled(FullBleed)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 200px;
`

const HireText = styled.h3`
  margin-top: 32px;
  a {
    color: ${Colors.lightBlue};
    text-shadow: rgba(0, 153, 255, 0.5) 0 0 8px;
  }
  a:hover {
    color: ${Colors.gold};
    text-shadow: rgba(124, 95, 0, 0.4) 0 1px 1px;
  }
`

export const Intro: FC = () => {
  const { y } = useWindowScroll()
  const [ref, { height, top }] = useMeasure()
  const [, setLogoVisibility] = useLogoVisibility()

  useLayoutEffect(() => {
    setLogoVisibility(y > height + top)
  }, [y, height, top])

  return (
    <StyledFullBleed dark ref={ref as UseMeasureRef<HTMLDivElement>}>
      <Section>
        <Logo />
        <MainAndAside>
          <MissionText>
            <h1>Autonomous and non-custodial stablecoin infrastructure.</h1>
            <HireText>
              <a href="https://cryptocurrencyjobs.co/startups/mstable/">
                We’re hiring ➔
              </a>
            </HireText>
          </MissionText>
          <div>
            <AppCTA href="https://app.mstable.org">Use the app</AppCTA>
          </div>
        </MainAndAside>
      </Section>
      <BottomSection>
        <BigStats />
      </BottomSection>
    </StyledFullBleed>
  )
}
