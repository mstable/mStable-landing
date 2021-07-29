import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore

import { useData } from './DataProvider'
import { ThemedSkeleton } from '../ThemedSkeleton'

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
  }

  h3 {
    font-weight: 600;
    font-size: 3rem;
    height: 4rem;
    margin-bottom: 1rem;
  }

  &:not:last-child {
    margin-right: 1rem;
  }
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

  return (
    <StatsSection>
      <BigStat>
        {!loading && value?.mta?.totalStakers ? <h3>$–b+</h3> : <Skeleton />}
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
        {!loading && value?.musd?.dailyAPY ? <h3>$–</h3> : <Skeleton />}
        <p>MTA Price</p>
      </BigStat>
    </StatsSection>
  )
}
