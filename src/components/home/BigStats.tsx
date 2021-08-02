import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore

import { useData } from './DataProvider'
import { ThemedSkeleton } from '../ThemedSkeleton'

const BTC_PRICE_ESTIMATE = 35000

const Skeleton = styled(ThemedSkeleton)`
  width: 6rem;
  height: 4rem;
  margin-bottom: 1rem;
`

const BigStat = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  p {
    font-size: 1rem;
    font-size: 0.875rem;
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
    height: 4rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    height: 3rem;
  }

  @media (min-width: 400px) {
    p {
      font-size: 1rem;
    }
    h3 {
      font-size: 3rem;
      height: 4rem;
    }
  }

  &:not:last-child {
    margin-right: 1rem;
  }
`

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  > div {
    padding: 1rem 0;
    flex-basis: calc(50% - 1rem);
  }

  @media (min-width: 400px) {
    gap: 2rem;

    > div {
      width: calc(50% - 2rem);
      max-width: 12rem;
    }
  }

  @media (min-width: 600px) {
    > div {
      width: 12rem;
    }
  }
`

export const BigStats: FC = () => {
  const { loading, value } = useData()

  const mtaPrice = (value?.mta?.totalStakedUSD && value.mta.totalStakedUSD / value.mta.totalStaked) || undefined
  const volumeEstimate =
    (!!value &&
      value.musd.cumulativeMinted +
        value.musd.cumulativeSwapped +
        value.musd.cumulativeWithdrawn +
        (value.mbtc.cumulativeMinted + value.mbtc.cumulativeSwapped + value.mbtc.cumulativeWithdrawn) * BTC_PRICE_ESTIMATE) ||
    undefined

  return (
    <StatsSection>
      <BigStat>
        {!loading && volumeEstimate ? <h3>${volumeEstimate.toString().substr(0, 1)}b+</h3> : <Skeleton />}
        <p>All Time Volume</p>
      </BigStat>
      <BigStat>
        {!loading && value?.mta?.totalStakers ? <h3>{value.mta.totalStakers}</h3> : <Skeleton />}
        <p>Active Governors</p>
      </BigStat>
      <BigStat>
        {!loading && value?.musd?.dailyAPY ? <h3>{Math.floor(value.musd.dailyAPY)}%</h3> : <Skeleton />}
        <p>Average USD APY</p>
      </BigStat>
      <BigStat>
        {!loading && mtaPrice ? <h3>${mtaPrice}</h3> : <Skeleton />}
        <p>MTA Price</p>
      </BigStat>
    </StatsSection>
  )
}
