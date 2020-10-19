import formatDate from 'date-fns/format'
import Numeral from 'numeral'
import styled from 'styled-components'

export const formatISODate = (
  isoDate: string | number | (string | number)[],
): string => formatDate(new Date(isoDate as string), 'yyyy-MM-dd')

export const toK = (value: number): string => Numeral(value).format('0.[00]a')

export const formatDollarAmount = (
  value: number | string | (string | number)[],
): string => `$${toK(value as number)}`
