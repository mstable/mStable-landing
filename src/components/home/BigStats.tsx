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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > span {
    position: relative;

    padding: 2rem 0rem;
  }

  > span::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(transparent 2%, rgba(0, 0, 0, 0.75), transparent 98%);
    filter: blur(0.15rem);
    inset: 1px;
    z-index: -1;
    border-radius: 0.75rem;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }
`

const Blue = styled.span`
  color: ${Colors.lightBlue};
  text-shadow: rgba(0, 35, 57, 0.5) 0 0 1px;
`

const Empty = styled.div`
  min-height: 10rem;
`

const StyledSlider = styled(Slider)`
  min-height: 20rem;
`

const apyOptions = { decimalPlaces: 2, suffix: '%' }

export const BigStats: FC = () => {
  const { loading, value } = useData()

  return loading || !value ? (
    <Empty />
  ) : (
    <StyledSlider>
      <BigStat>
        <span>
          Currently earning{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.musd.dailyAPY} options={apyOptions} />
          </Blue>{' '}
          for mUSD and{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.mbtc.dailyAPY} options={apyOptions} />
          </Blue>{' '}
          for mBTC
        </span>
      </BigStat>
      <BigStat>
        <span>
          mStable users have minted{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.musd.cumulativeMinted} /> mUSD
          </Blue>{' '}
          and{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.mbtc.cumulativeMinted} /> mBTC
          </Blue>
        </span>
      </BigStat>
      <BigStat>
        <span>
          Over <Blue>$500m</Blue> swapped
        </span>
      </BigStat>
      <BigStat>
        <span>
          <Blue>
            <StyledCountUp separator="," endVal={value.musd.totalSupply} /> mUSD
          </Blue>{' '}
          and{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.mbtc.totalSupply} /> mBTC
          </Blue>{' '}
          are in circulation
        </span>
      </BigStat>
      <BigStat>
        <span>
          mStable has{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.mta.totalStakers} /> governors
          </Blue>{' '}
          staking a total of{' '}
          <Blue>
            <StyledCountUp separator="," endVal={value.mta.totalStaked} /> MTA
          </Blue>
        </span>
      </BigStat>
    </StyledSlider>
  )
}
