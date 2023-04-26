import styled from 'styled-components'

import { Colors } from '../theme'

import type { FC } from 'react'

export type CardColor = 'purple' | 'orange' | 'blue' | 'pink' | 'transparent'

const Container = styled.div<{ bg: string }>`
  display: flex;
  flex: 1;
  max-width: 416px;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${({ bg }) => bg};
`

export const CardHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`

export const CardContent = styled.div`
  flex: 1;

  > p {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

export const CardActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: center;
  gap: 2rem;
`

const colorMapping: Record<CardColor, string> = {
  purple: Colors.neonPurpleDark,
  orange: Colors.neonOrangeDark,
  blue: Colors.neonBlueDark,
  pink: Colors.neonPinkDark75,
  transparent: 'transparent',
}

export const Card: FC<{ bgColor?: CardColor }> = ({ bgColor = 'transparent', ...rest }) => {
  const bg = colorMapping[bgColor]

  return <Container bg={bg} {...rest} />
}
