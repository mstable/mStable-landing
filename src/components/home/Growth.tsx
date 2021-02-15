import React, { FC } from 'react'
import styled from 'styled-components'
import ReactCountUp from 'react-countup'
import { useInView } from 'react-hook-inview'
import Skeleton from 'react-loading-skeleton'

import Musd from '../../images/musd.svg'
import Mbtc from '../../images/mbtc.svg'
import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { TwoColumns } from '../layout/Grid'
import { toK } from '../../utils'
import { Totals } from './Totals'
import { Supply } from './Supply'
import { Asset } from '../Asset'
import { Colors } from '../../theme'
import { useData } from './DataProvider'

const MetricContainer = styled.div`
  position: relative;
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > :first-child {
      display: block;
      font-family: 'DM Mono', monospace;
      font-size: 32px;
    }

    > :last-child {
      color: ${Colors.whiteTransparent};
      font-size: 16px;
    }
  }

  @media (min-width: 520px) {
    margin-bottom: 64px;

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      > :first-child {
        font-size: min(32px, 3vw);
      }

      > :last-child {
        font-size: min(20px, 2vw);
      }
    }
  }
`

const Metric: FC<{ value: number; label: string }> = ({ value, label }) => {
  const [ref, inView] = useInView({ unobserveOnEnter: true, threshold: 1 })
  return (
    <MetricContainer ref={ref}>
      <div>
        <ReactCountUp end={inView ? value : 0} formattingFn={toK} />
        <div>{label}</div>
      </div>
    </MetricContainer>
  )
}

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Graph = styled.div`
  text-align: center;
  margin-bottom: 32px;
  > :first-child {
    margin-bottom: 16px;
  }
  h4 {
    color: ${Colors.whiteTransparent};
    font-weight: normal;
    font-size: 16px;
  }
`

type MassetType = 'mbtc' | 'musd'

const assetDetails: Record<
  MassetType,
  { symbol: string; description: string; address: string; icon: string }
> = {
  musd: {
    symbol: 'mUSD',
    description: 'mStable USD',
    address: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
    icon: Musd,
  },
  mbtc: {
    symbol: 'mBTC',
    description: 'mStable BTC',
    address: '0x945facb997494cc2570096c74b5f66a3507330a1',
    icon: Mbtc,
  },
}

export const Growth: FC = () => {
  const { loading, value } = useData()
  const assets = { musd: value?.musd, mbtc: value?.mbtc }

  return (
    <FullBleed dark>
      {Object.keys(assets).map((asset) => {
        const masset = assets[asset as MassetType]
        const { symbol, icon, address, description } = assetDetails[
          asset as MassetType
        ]

        if (!masset) return null

        return (
          <Section key={asset}>
            <Asset
              symbol={symbol}
              icon={icon}
              address={address}
              description={description}
            >
              {loading || !masset ? (
                <Skeleton height={100} />
              ) : (
                <MetricsGrid>
                  {masset.cumulativeMinted > 0 && (
                    <Metric value={masset.cumulativeMinted} label="Generated" />
                  )}
                  {masset.cumulativeSwapped > 0 && (
                    <Metric value={masset.cumulativeSwapped} label="Swapped" />
                  )}
                  {masset.totalSupply > 0 && (
                    <Metric value={masset.totalSupply} label="Supply" />
                  )}
                  {masset.totalSavings > 0 && (
                    <Metric value={masset.totalSavings} label="Saved" />
                  )}
                </MetricsGrid>
              )}
              {asset === 'musd' && (
                <TwoColumns>
                  <Graph>
                    <Supply />
                    <h4>Total Supply</h4>
                  </Graph>
                  <Graph>
                    <Totals />
                    <h4>Cumulative Volumes</h4>
                  </Graph>
                </TwoColumns>
              )}
            </Asset>
          </Section>
        )
      })}
    </FullBleed>
  )
}
