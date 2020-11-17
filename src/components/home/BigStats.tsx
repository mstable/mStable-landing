import React, { FC } from 'react'
import CountUp from 'react-countup'
import 'use-slider/lib/slider.min.css'

import styled from 'styled-components'

import { Slider } from '../Slider'
import { useData } from './DataProvider'
import { Colors } from '../../theme'

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
  color: ${Colors.lightBlue};
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

  return loading || !(value && value.totalSupply && value.cumulativeMinted) ? (
    <Empty />
  ) : (
    <StyledSlider>
      <BigStat>
        mStable users have minted a total of{' '}
        <Blue>
          <StyledCountUp separator="," end={value.cumulativeMinted} /> mUSD
        </Blue>
      </BigStat>
      <BigStat>
        The mStable protocol has swapped{' '}
        <Blue>
          {'$'}
          <StyledCountUp separator="," end={value.cumulativeSwapped} />
        </Blue>{' '}
        worth of stablecoins
      </BigStat>
      {/*<BigStat>*/}
      {/*  The mStable protocol has paid savers{' '}*/}
      {/*  <Blue>*/}
      {/*    <StyledCountUp*/}
      {/*      prefix="$"*/}
      {/*      separator=","*/}
      {/*      end={value.cumulativeWithdrawn - value.cumulativeDeposited}*/}
      {/*    />{' '}*/}
      {/*    interest*/}
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
        mStable has{' '}
        <Blue>
          <StyledCountUp separator="," end={value.totalStakers} /> governors
        </Blue>{' '}
        staking a total of{' '}
        <Blue>
          <StyledCountUp separator="," end={value.totalStaked} /> MTA
        </Blue>
      </BigStat>
    </StyledSlider>
  )
}
