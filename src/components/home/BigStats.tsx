import React, { FC } from 'react'
import styled from 'styled-components'
import Numeral from 'numeral'
// @ts-ignore
import CountUp from 'react-countup-v2'

import { useData } from './DataProvider'

const StyledCountUp = styled(CountUp)`
  font-family: 'DM Mono', monospace;
`

const BigStat = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:not:last-child {
    margin-right: 1rem;
  }

  @media (min-width: 400px) {
    > :first-child {
      min-width: 12rem;
      font-family: 'DM Mono', monospace;
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    > :last-child {
      font-size: 1rem;
    }
  }
`

const Empty = styled.div`
  min-height: 10rem;
`

const StatsSection = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: space-around;
`

const apyOptions = { decimalPlaces: 2, suffix: '%' }

const priceOptions = { decimalPlaces: 2, prefix: '$' }

const volOptions = { decimalPlaces: 0, formattingFn: (value: number) => Numeral(value).format('0a'), prefix: '$', suffix: '+' }

export const BigStats: FC = () => {
  const { loading, value } = useData()

  return loading || !value ? (
    <Empty />
  ) : (
    <StatsSection>
      <BigStat>
        <div>
          $<StyledCountUp endVal={1000000000} options={volOptions} />+
        </div>
        <div>All Time Volume</div>
      </BigStat>
      <BigStat>
        <StyledCountUp endVal={931} />
        <div>Active Governors</div>
      </BigStat>
      <BigStat>
        <div>
          <StyledCountUp endVal={9.4} options={apyOptions} />
        </div>
        <div>Average USD APY</div>
      </BigStat>
      <BigStat>
        <div>
          <StyledCountUp endVal={0.78} options={priceOptions} />
        </div>
        <div>MTA Price</div>
      </BigStat>
    </StatsSection>
  )
}
