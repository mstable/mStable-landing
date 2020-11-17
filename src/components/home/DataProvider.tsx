import React, { createContext, FC, useContext } from 'react'
import useAsync, { AsyncState } from 'react-use/lib/useAsync'

import { STATS_API_ENDPOINT } from '../../constants'

interface Data {
  timestamp: number
  totalSupply: number
  totalSavings: number
  cumulativeMinted: number
  cumulativeSwapped: number
  cumulativeFeesPaid: number
  cumulativeDeposited: number
  cumulativeWithdrawn: number
  totalHolders: number
  totalStaked: number
  totalStakers: number
  totalTransfers: number
  totalMints: number
  totalSwaps: number
  dailyAPY: number
  utilisationRate: number
}

const URL = `${STATS_API_ENDPOINT}/key-metrics`

const ctx = createContext<AsyncState<Data>>({} as never)

export const useData = () => useContext(ctx)

export const DataProvider: FC = ({ children }) => {
  const ctxValue = useAsync(async (): Promise<Data> => {
    const response = await fetch(URL)
    return await response.json()
  }, [])

  return <ctx.Provider value={ctxValue}>{children}</ctx.Provider>
}
