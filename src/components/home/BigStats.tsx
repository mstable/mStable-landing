import styled, { css } from 'styled-components'

import { ExternalLink } from '../ExternalLink'
import { ThemedSkeleton } from '../ThemedSkeleton'
import { useData } from './DataProvider'

import type { FC } from 'react'

const BTC_PRICE_ESTIMATE = 35000

const Skeleton = styled(ThemedSkeleton)`
  width: 6rem;
  height: 4rem;
  margin-bottom: 1rem;
`

const BigStatCss = css`
  font-size: 1.275rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  color: rgba(255, 255, 255);
  transition: 0.25s all ease-out;

  p {
    font-size: 1rem;
    font-size: 0.875rem;
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
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

const BigStatLink = styled(ExternalLink)`
  ${BigStatCss};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    text-decoration: none;
  }
`

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin: 0.25rem;
  }

  > * {
    padding: 1rem 0;
    flex-basis: calc(50% - 1rem);
  }

  @media (min-width: 400px) {
    > * {
      margin: 1rem;
    }

    > * {
      width: calc(50% - 2rem);
      max-width: 12rem;
    }
  }

  @media (min-width: 600px) {
    > * {
      width: 12rem;
    }
  }
`

function moneyFormat(amount: number) {
  // Nine Zeroes for Billions
  return Math.abs(Number(amount)) >= 1.0e9
    ? (Math.abs(Number(amount)) / 1.0e9).toFixed(1) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(amount)) >= 1.0e6
    ? (Math.abs(Number(amount)) / 1.0e6).toFixed(1) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(amount)) >= 1.0e3
    ? (Math.abs(Number(amount)) / 1.0e3).toFixed(1) + 'k'
    : Math.abs(Number(amount))
}

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
      <BigStatLink href="https://app.mstable.org/#/musd/stats">
        {!loading && volumeEstimate ? <h3>${volumeEstimate.toString().substr(0, 1)}b+</h3> : <Skeleton />}
        <p>All Time Volume</p>
      </BigStatLink>
      <BigStatLink href="https://staking.mstable.org/">
        {!loading && value?.mta?.totalStakers ? <h3>{value.mta.totalStakers}</h3> : <Skeleton />}
        <p>Active Governors</p>
      </BigStatLink>
      <BigStatLink href="https://defillama.com/protocol/mstable">
        {!loading && value?.tvl ? <h3>${moneyFormat(value.tvl)}</h3> : <Skeleton />}
        <p>TVL (USD)</p>
      </BigStatLink>
      <BigStatLink href="https://www.coingecko.com/en/coins/meta">
        {!loading && mtaPrice ? <h3>${mtaPrice.toFixed(2)}</h3> : <Skeleton />}
        <p>MTA Price</p>
      </BigStatLink>
    </StatsSection>
  )
}
