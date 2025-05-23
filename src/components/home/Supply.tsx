import { useMedia } from 'react-use'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'

import { Colors } from '../../theme'
import { formatBTCAmount, formatDollarAmount, formatISODate, toK, toK2 } from '../../utils'
import { ThemedSkeleton } from '../ThemedSkeleton'
import { useData } from './DataProvider'

import type { FC } from 'react'

const Container = styled.div`
  > * {
    overflow: hidden;
    font-family: 'DM Mono', monospace;
  }
`

export const Supply: FC<{
  asset: 'musd' | 'mbtc'
}> = ({ asset }) => {
  const isMobile = useMedia('(max-width: 400px)')
  const suffix = asset === 'mbtc' ? 'mBTC ' : '$'
  const { loading, value } = useData()
  const data = value?.charts[asset].totalSupply

  return (
    <Container>
      {loading ? (
        <ThemedSkeleton height={150} />
      ) : (
        <ResponsiveContainer aspect={isMobile ? 60 / 24 : 60 / 18}>
          <AreaChart margin={{ top: 0, right: 10, bottom: 6, left: 10 }} barCategoryGap={1} data={data}>
            <XAxis hide dataKey="t" />
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
              dataKey="value"
            />
            <Tooltip
              cursor={true}
              formatter={(value: unknown) => (asset === 'mbtc' ? toK2(value as number) : toK(value as number))}
              labelFormatter={formatISODate}
              label={suffix}
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
              dataKey="value"
              name={suffix}
              yAxisId={0}
              opacity={1}
              fill="none"
              stroke={Colors.lightBlue}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Container>
  )
}
