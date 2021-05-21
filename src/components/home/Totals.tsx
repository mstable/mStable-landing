import React, { FC, useMemo } from 'react'
import { Area, XAxis, YAxis, Tooltip, AreaChart, ResponsiveContainer } from 'recharts'

import { formatBTCAmount, formatDollarAmount, formatISODate, toK, toK2 } from '../../utils'
import { STATS_API_ENDPOINT } from '../../constants'
import { Graph } from '../Graph'
import { Colors } from '../../theme'

const TotalsGraph: FC<{
  asset: 'musd' | 'mbtc'
  data: { d: string; m: number; s: number; r: number }[]
  isMobile: boolean
}> = ({ data, isMobile, asset }) => {
  const filteredData = useMemo(() => data?.filter((datum, index, arr) => arr.findIndex((_datum) => _datum.d === datum.d) === index), [data])
  const suffix = asset === 'mbtc' ? 'BTC ' : '$'
  return (
    <ResponsiveContainer aspect={isMobile ? 60 / 24 : 60 / 18}>
      <AreaChart margin={{ top: 0, right: 10, bottom: 6, left: 10 }} barCategoryGap={1} data={filteredData}>
        <XAxis hide dataKey="d" />
        <YAxis
          hide={isMobile}
          type="number"
          tickMargin={16}
          orientation="left"
          tickFormatter={asset === 'mbtc' ? formatBTCAmount : formatDollarAmount}
          axisLine={false}
          tickLine={false}
          interval="preserveEnd"
          minTickGap={60}
          yAxisId={0}
          dataKey="m"
        />
        <Tooltip
          cursor={true}
          formatter={(value) => (asset === 'mbtc' ? toK2(value as number) : toK(value as number))}
          labelFormatter={formatISODate}
          separator=""
          contentStyle={{
            fontSize: '14px',
            padding: '0 8px',
            background: 'black',
            textAlign: 'right',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
          wrapperStyle={{
            top: 0,
            left: 0,
          }}
        />
        <Area
          strokeWidth={2}
          dot={false}
          type="monotone"
          label={false}
          dataKey="m"
          name={`Minted ${suffix}`}
          yAxisId={0}
          opacity={1}
          fill="none"
          stroke={Colors.lightBlue}
        />
        <Area
          strokeWidth={2}
          dot={false}
          type="monotone"
          label={false}
          dataKey="r"
          name={`Redeemed ${suffix}`}
          yAxisId={0}
          opacity={1}
          fill="none"
          stroke={Colors.red}
        />
        <Area
          strokeWidth={2}
          dot={false}
          type="monotone"
          label={false}
          dataKey="s"
          name={`Swapped ${suffix}`}
          yAxisId={0}
          opacity={1}
          fill="none"
          stroke={Colors.gold}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export const Totals: FC<{ asset: 'musd' | 'mbtc' }> = ({ asset }) => {
  return <Graph url={`${STATS_API_ENDPOINT}/${asset}-totals`} component={TotalsGraph} asset={asset} />
}
