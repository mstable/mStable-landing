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
  background: rgba(255, 255, 255, 0.05);
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  p {
    font-size: 1rem;
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
  }

  &:not:last-child {
    margin-right: 1rem;
  }
`

const Empty = styled.div`
  min-height: 10rem;
`

const StatsSection = styled.div`
  margin: 5rem 0 7.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  > div {
    padding: 1rem 0;
    width: 12rem;
  }
`

export const BigStats: FC = () => {
  const { loading, value } = useData()

  console.log(value)

  return loading || !value ? (
    <Empty />
  ) : (
    <StatsSection>
      <BigStat>
        <h3>$1b+</h3>

        <p>All Time Volume</p>
      </BigStat>
      <BigStat>
        <h3>{value.mta.totalStakers}</h3>
        <p>Active Governors</p>
      </BigStat>
      <BigStat>
        <h3>9.40%</h3>
        <p>Average USD APY</p>
      </BigStat>
      <BigStat>
        <h3>$0.78</h3>
        <p>MTA Price</p>
      </BigStat>
    </StatsSection>
  )
}
