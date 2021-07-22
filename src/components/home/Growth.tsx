import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore
import ReactCountUp from 'react-countup-v2'
import { useInView } from 'react-hook-inview'
import Skeleton from 'react-loading-skeleton'

import Musd from '../../images/musd.svg'
import Mbtc from '../../images/mbtc.svg'
import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { TwoColumns } from '../layout/Gridd'
import { toK, toK2 } from '../../utils'
import { Totals } from './Totals'
import { Supply } from './Supply'
import { Asset } from '../Asset'
import { Colors } from '../../theme'
import { useData } from './DataProvider'

const StyledFull = styled(FullBleed)`
  @media (min-width: 520px) {
    padding: 0 2rem;
  }
`

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
      opacity: 0.6;
      font-size: 16px;
    }
  }

  @media (min-width: 520px) {
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

const Metric: FC<{ value: number; label: string; options: { decimalPlaces: number } }> = ({ value, label, options }) => {
  const [ref, inView] = useInView({ unobserveOnEnter: true, threshold: 1 })
  return (
    <MetricContainer ref={ref}>
      <div>
        <ReactCountUp endVal={inView ? value : 0} formattingFn={toK} options={options} />
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
    grid-template-columns: repeat(5, 1fr);
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

const assetDetails: Record<MassetType, { symbol: string; description: string; address: string; icon: string }> = {
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

const musdOptions = { decimalPlaces: 0, formattingFn: toK }
const mbtcOptions = { decimalPlaces: 2, formattingFn: toK2 }
const apyOptions = { decimalPlaces: 2, suffix: '%' }

export const Growth: FC = () => {
  const { loading, value } = useData()
  const assets = { musd: value?.musd, mbtc: value?.mbtc }

  if (Object.keys(assets).find((asset) => !assets[asset as MassetType])) return null

  return (
    <StyledFull dark>
      {Object.keys(assets).map((asset) => {
        const masset = assets[asset as MassetType]
        const { symbol, icon, address, description } = assetDetails[asset as MassetType]

        if (!masset) return null

        const options = asset === 'musd' ? musdOptions : mbtcOptions

        return (
          <Section key={asset}>
            <Asset symbol={symbol} icon={icon} address={address} description={description}>
              {loading || !masset ? (
                <Skeleton height={100} />
              ) : (
                <MetricsGrid>
                  {masset.dailyAPY > 0 && <Metric options={apyOptions} value={masset.dailyAPY} label="Current APY" />}
                  {masset.cumulativeMinted > 0 && <Metric options={options} value={masset.cumulativeMinted} label="Generated" />}
                  {masset.cumulativeSwapped > 0 && <Metric options={options} value={masset.cumulativeSwapped} label="Swapped" />}
                  {masset.totalSupply > 0 && <Metric options={options} value={masset.totalSupply} label="Supply" />}
                  {masset.totalSavings > 0 && <Metric options={options} value={masset.totalSavings} label="Saved" />}
                </MetricsGrid>
              )}
              <TwoColumns>
                <Graph>
                  <Supply asset={asset as 'musd' | 'mbtc'} />
                  <h4>Total Supply</h4>
                </Graph>
                <Graph>
                  <Totals asset={asset as 'musd' | 'mbtc'} />
                  <h4>Cumulative Volumes</h4>
                </Graph>
              </TwoColumns>
            </Asset>
          </Section>
        )
      })}
    </StyledFull>
  )
}
