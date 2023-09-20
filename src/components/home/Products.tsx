import React from 'react'

import styled from 'styled-components'

import { WITHDRAW_APP_LINK, YIELD_APP_LINK } from '../../constants'
import { Card, CardActions, CardContent, CardHeader } from '../Card'
import { LinkButton } from '../CTA'

import type { FC } from 'react'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  ${({ theme }) => theme.mixins.sectionSpacing};
`

export const Products: FC = () => {
  return (
    <Container>
      <Card bgColor="orange">
        <CardHeader>
          <h2>mStable Meta Harvester</h2>
        </CardHeader>
        <CardContent>
          <p>Always earn the best yield 🚀</p>
          <p>The Meta Harvester automatically switches to the highest yield source supported</p>
        </CardContent>
        <CardActions>
          <LinkButton href={`${YIELD_APP_LINK}/vault/0x9c6de13d4648a6789017641f6b1a025816e66228`} highlight external={false}>
            Meta Harvester
          </LinkButton>
        </CardActions>
      </Card>
      <Card bgColor="purple">
        <CardHeader>
          <h2>Legacy Support</h2>
        </CardHeader>
        <CardContent>
          <p>Withdraw from your legacy mStable product positions. Option to redeem governance token at floor price.</p>
        </CardContent>
        <CardActions>
          <LinkButton href={WITHDRAW_APP_LINK} external={false}>
            Legacy Support
          </LinkButton>
        </CardActions>
      </Card>
    </Container>
  )
}
