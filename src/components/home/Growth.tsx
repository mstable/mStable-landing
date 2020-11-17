import React, { FC } from 'react'
import styled from 'styled-components'
import ReactCountUp from 'react-countup'
import { useInView } from 'react-hook-inview'
import Skeleton from 'react-loading-skeleton'

import Musd from '../../images/musd.svg'
import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { TwoColumns } from '../layout/Grid'
import { toK } from '../../utils'
import { MusdTotals } from './MusdTotals'
import { MusdSupply } from './MusdSupply'
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

export const Growth: FC = () => {
  const { loading, value } = useData()
  return (
    <FullBleed dark>
      <Section>
        <Asset
          symbol="mUSD"
          icon={Musd}
          address="0xe2f2a5c287993345a840db3b0845fbc70f5935a5"
          description="mStable USD"
        >
          {loading || !value ? (
            <Skeleton height={100} />
          ) : (
            <MetricsGrid>
              <Metric value={value.cumulativeMinted} label="Generated" />
              <Metric value={value.cumulativeSwapped} label="Swapped" />
              <Metric value={value.totalSupply} label="Supply" />
              <Metric value={value.totalSavings} label="Saved" />
              {/*<Metric*/}
              {/*  value={value.cumulativeWithdrawn - value.cumulativeDeposited}*/}
              {/*  label="Interest"*/}
              {/*/>*/}
              {/*<Metric value={value.totalTransfers} label="Transfers" />*/}
            </MetricsGrid>
          )}
          <TwoColumns>
            <Graph>
              <MusdSupply />
              <h4>Total Supply</h4>
            </Graph>
            <Graph>
              <MusdTotals />
              <h4>Cumulative Volumes</h4>
            </Graph>
          </TwoColumns>
        </Asset>
      </Section>
    </FullBleed>
  )
}
