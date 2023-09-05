import React from 'react'

import styled from 'styled-components'

import { WITHDRAW_APP_LINK, YIELD_APP_LINK } from '../../constants'
import { Card, CardActions, CardContent, CardHeader } from '../Card'
import { LinkButton } from '../CTA'

import type { FC } from 'react'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  ${({ theme }) => theme.mixins.sectionSpacing};
`

export const Products: FC = () => {
  return (
    <Container>
      <Card bgColor="orange">
        <CardHeader>
          <h2>mStable Yield Products</h2>
        </CardHeader>
        <CardContent>
          <p>New yield products to earn best in market yields.</p>
        </CardContent>
        <CardActions>
          <LinkButton href={YIELD_APP_LINK} highlight external={false}>
            Earn Yield
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
