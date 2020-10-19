import React, { FC } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import 'use-slider/lib/slider.min.css'

import { Slider } from '../Slider'
import { useData } from './DataProvider'

const StyledCountUp = styled(CountUp)`
  font-family: 'DM Mono', monospace;
`

const BigStat = styled.div`
  font-size: 24px;
  padding: 1px; // hide the edges for the slider

  @media (min-width: 400px) {
    font-size: 30px;
  }
`

const Blue = styled.span`
  color: rgb(20, 160, 255);
  text-shadow: rgba(0, 153, 255, 0.5) 0 0 8px;
`

const Empty = styled.div`
  min-height: 300px;
`

const StyledSlider = styled(Slider)`
  min-height: 300px;
`

export const BigStats: FC = () => {
  const { loading, value } = useData()

  return loading || !value?.totalSupply ? (
    <Empty />
  ) : (
    <StyledSlider>
      <BigStat>
        The mStable protocol has generated{' '}
        <Blue>
          <StyledCountUp separator="," end={value.totalGenerated} /> mUSD
        </Blue>
      </BigStat>
      <BigStat>
        The mStable protocol has swapped{' '}
        <Blue>
          <StyledCountUp separator="," end={value.cumulativeSwapped} /> in
          stablecoins
        </Blue>
      </BigStat>
      {/*<BigStat>*/}
      {/*  The mStable protocol has paid savers{' '}*/}
      {/*  <Blue>*/}
      {/*    <StyledCountUp prefix="$" separator="," end={4028182} /> interest*/}
      {/*  </Blue>*/}
      {/*</BigStat>*/}
      <BigStat>
        The mStable protocol has{' '}
        <Blue>
          <StyledCountUp separator="," end={value.totalSupply} /> mUSD
        </Blue>{' '}
        in circulation
      </BigStat>
      <BigStat>
        The mStable protocol has{' '}
        <Blue>
          <StyledCountUp separator="," end={value.totalStaked} /> MTA staked
        </Blue>{' '}
        by{' '}
        <Blue>
          <StyledCountUp separator="," end={498} /> governors
        </Blue>
      </BigStat>
    </StyledSlider>
  )
}
