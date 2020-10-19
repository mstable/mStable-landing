import React, { createContext, FC, useContext } from 'react'
import useAsync, { AsyncState } from 'react-use/lib/useAsync'

import { STATS_API_ENDPOINT } from '../../constants'

interface Data {
  timestamp: number
  totalSupply: number
  totalSavings: number
  totalGenerated: number
  cumulativeSwapped: number
  cumulativeInterest: number // includes lending and fees
  totalHolders: number
  totalStaked: number
  totalStakers: number
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
