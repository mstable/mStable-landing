import React, { createContext, useContext } from 'react'

import useAsync from 'react-use/lib/useAsync'

import { STATS_API_ENDPOINT } from '../../constants'

import type { FC } from 'react'
import type { AsyncState } from 'react-use/lib/useAsync'

interface MassetData {
  // cumulativeInterest: number
  cumulativeMinted: number
  cumulativeSwapped: number
  cumulativeWithdrawn: number
  cumulativeDeposited: number
  cumulativeFeesPaid: number
  dailyAPY: number
  // totalHolders: number
  totalMints: number
  totalSavings: number
  totalSupply: number
  totalSwaps: number
  totalTransfers: number
  utilisationRate: number
}

interface ChartData {
  totalSupply?: { t: number; value?: number }[]
  cumulativeVolume?: {
    t: number
    m: number
    r: number
    s: number
  }[]
}

interface Data {
  timestamp?: number
  musd: MassetData
  mbtc: MassetData
  mta: {
    totalStakers: number
    totalStaked: number
    totalStakedUSD?: number
  }
  charts: {
    musd: ChartData
    mbtc: ChartData
  }
  tvl: number
}

interface MassetMetrics {
  cumulativeMinted: number
  cumulativeRedeemed: number
  cumulativeSwapped: number
  cumulativeFeesPaid: number
  cumulativeWithdrawn: number
  cumulativeDeposited: number
  dailyAPY: number
  totalMints: number
  totalSavings: number
  totalSupply: number
  totalSwaps: number
  totalTransfers: number
  utilisationRate: number
}

type HistoricMetrics<T> = (T & { date: { _seconds: number } })[]

interface Masset {
  address: string
  symbol: string
  decimals: number
  metrics: {
    current: MassetMetrics
    historic: HistoricMetrics<MassetMetrics>
  }
}

const ctx = createContext<AsyncState<Data>>({} as never)

const getChartData = (data: HistoricMetrics<MassetMetrics>): ChartData =>
  data.reduce<ChartData>(
    (prev, { totalSupply, date, cumulativeRedeemed, cumulativeSwapped, cumulativeMinted }) => ({
      cumulativeVolume: [
        ...(prev.cumulativeVolume ?? []),
        { t: date._seconds * 1000, m: cumulativeMinted, r: cumulativeRedeemed, s: cumulativeSwapped },
      ],
      totalSupply: [...(prev.totalSupply ?? []), { t: date._seconds * 1000, value: totalSupply }],
    }),
    {
      totalSupply: [],
      cumulativeVolume: [],
    },
  )

export const useData = () => useContext(ctx)

export const DataProvider: FC = ({ children }) => {
  const ctxValue = useAsync(async (): Promise<Data> => {
    const responses = await Promise.all(['massets', 'stakers', 'tvl'].map((resource) => fetch(`${STATS_API_ENDPOINT}/${resource}`)))

    const [{ musd, mbtc }, { totalStakers, totalStaked, totalStakedUSD }, { tvl }] = (await Promise.all(
      responses.map((response) => response.json()),
    )) as [{ musd: Masset; mbtc: Masset }, { totalStakers: number; totalStaked: number; totalStakedUSD?: number }, { tvl: number }]

    return {
      musd: musd.metrics.current,
      mbtc: mbtc.metrics.current,
      mta: { totalStaked, totalStakers, totalStakedUSD },
      charts: { musd: getChartData(musd.metrics.historic), mbtc: getChartData(mbtc.metrics.historic) },
      tvl,
    } as Data
  }, [])

  return <ctx.Provider value={ctxValue}>{children}</ctx.Provider>
}
