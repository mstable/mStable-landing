import React, { FC } from 'react'
import 'use-slider/lib/slider.min.css'
import styled from 'styled-components'
// @ts-ignore
import CountUp from 'react-countup-v2'

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

const apyOptions = { decimalPlaces: 2, suffix: '%' }

export const BigStats: FC = () => {
  const { loading, value } = useData()

  return loading || !value ? (
    <Empty />
  ) : (
    <StyledSlider>
      <BigStat>
        mStable Save currently has a{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.dailyAPY} options={apyOptions} />
        </Blue>{' '}
        interest rate for mUSD and a{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.dailyAPY} options={apyOptions} />
        </Blue>{' '}
        interest rate for mBTC
      </BigStat>
      <BigStat>
        mStable users have minted a total of{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.cumulativeMinted} /> mUSD
        </Blue>{' '}
        and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.cumulativeMinted} /> mBTC
        </Blue>
      </BigStat>
      <BigStat>
        The mStable protocol has swapped{' '}
        <Blue>
          {'$'}
          <StyledCountUp separator="," endVal={value.musd.cumulativeSwapped} />
        </Blue>{' '}
        worth of pegged-value crypto assets, and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.cumulativeSwapped} /> BTC
        </Blue>
      </BigStat>
      <BigStat>
        The mStable protocol has{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.totalSupply} /> mUSD
        </Blue>{' '}
        and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.totalSupply} /> mBTC{' '}
        </Blue>
        in circulation
      </BigStat>
      <BigStat>
        mStable has{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mta.totalStakers} /> governors
        </Blue>{' '}
        staking a total of{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mta.totalStaked} /> MTA
        </Blue>
      </BigStat>
    </StyledSlider>
  )
}
