import React, { createContext, FC, useContext } from 'react'
import useAsync, { AsyncState } from 'react-use/lib/useAsync'

import { STATS_API_ENDPOINT } from '../../constants'

type MassetData = {
  cumulativeInterest: number
  cumulativeMinted: number
  cumulativeSwapped: number
  cumulativeWithdrawn: number
  cumulativeDeposited: number
  cumulativeFeesPaid: number
  dailyAPY: number
  totalHolders: number
  totalMints: number
  totalSavings: number
  totalSupply: number
  totalSwaps: number
  totalTransfers: number
  utilisationRate: number
}

type MTAData = {
  totalStakers: number
  totalStaked: number
}

interface Data {
  timestamp: number
  musd: MassetData
  mbtc: MassetData
  mta: MTAData
}

const URL = `${STATS_API_ENDPOINT}/key-metrics`

const ctx = createContext<AsyncState<Data>>({} as never)

export const useData = () => useContext(ctx)

export const DataProvider: FC = ({ children }) => {
  const ctxValue = useAsync(async (): Promise<Data> => {
    const response = await fetch(URL)
    const { musd, mbtc, timestamp, mta } = await response.json()
    return { timestamp, musd, mbtc, mta } as Data
  }, [])

  return <ctx.Provider value={ctxValue}>{children}</ctx.Provider>
}
