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
  font-size: 1.3rem;
  padding: 1px; // hide the edges for the slider

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }
`

const Blue = styled.span`
  color: ${Colors.lightBlue};
  text-shadow: rgba(0, 153, 255, 0.5) 0 0 8px;
`

const Empty = styled.div`
  min-height: 10rem;
`

const StyledSlider = styled(Slider)``

const apyOptions = { decimalPlaces: 2, suffix: '%' }

export const BigStats: FC = () => {
  const { loading, value } = useData()

  return loading || !value ? (
    <Empty />
  ) : (
    <StyledSlider>
      <BigStat>
        Currently earning{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.dailyAPY} options={apyOptions} />
        </Blue>{' '}
        for mUSD and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.dailyAPY} options={apyOptions} />
        </Blue>{' '}
        for mBTC
      </BigStat>
      <BigStat>
        mStable users have minted{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.cumulativeMinted} /> mUSD
        </Blue>{' '}
        and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.cumulativeMinted} /> mBTC
        </Blue>
      </BigStat>
      <BigStat>
        Over <Blue>$500m</Blue> in pegged-value crypto assets swapped
      </BigStat>
      <BigStat>
        <Blue>
          <StyledCountUp separator="," endVal={value.musd.totalSupply} /> mUSD
        </Blue>{' '}
        and{' '}
        <Blue>
          <StyledCountUp separator="," endVal={value.mbtc.totalSupply} /> mBTC
        </Blue>{' '}
        are in circulation
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
