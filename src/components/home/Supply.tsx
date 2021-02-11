import React, { FC } from 'react'
import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
} from 'recharts'

import { formatDollarAmount, formatISODate, toK } from '../../utils'
import { STATS_API_ENDPOINT } from '../../constants'
import { Graph } from '../Graph'
import { Colors } from '../../theme'

const SupplyGraph: FC<{
  data: { d: string; $: number }[]
  isMobile: boolean
}> = ({ data, isMobile }) => (
  <ResponsiveContainer aspect={isMobile ? 60 / 24 : 60 / 18}>
    <AreaChart
      margin={{ top: 0, right: 10, bottom: 6, left: 10 }}
      barCategoryGap={1}
      data={data}
    >
      <XAxis hide dataKey="d" />
      <YAxis
        hide={isMobile}
        type="number"
        tickMargin={16}
        orientation="left"
        tickFormatter={formatDollarAmount}
        axisLine={false}
        tickLine={false}
        interval="preserveEnd"
        minTickGap={60}
        yAxisId={0}
        dataKey="$"
      />
      <Tooltip
        cursor={true}
        formatter={(value) => toK(value as number)}
        labelFormatter={formatISODate}
        label="$"
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
        dataKey="$"
        yAxisId={0}
        opacity={1}
        fill="none"
        stroke={Colors.blue}
      />
    </AreaChart>
  </ResponsiveContainer>
)

export const Supply: FC<{ masset: 'mbtc' | 'musd' }> = ({ masset }) => {
  return (
    <Graph
      url={`${STATS_API_ENDPOINT}/${masset as string}-supply`}
      component={SupplyGraph}
    />
  )
}
