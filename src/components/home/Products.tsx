import React from 'react'

import styled from 'styled-components'

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
          <LinkButton href="https://yield.mstable.app" highlight external={false}>
            mStable Yield App
          </LinkButton>
        </CardActions>
      </Card>
      <Card bgColor="purple">
        <CardHeader>
          <h2>Exit Legacy Products</h2>
        </CardHeader>
        <CardContent>
          <p>Withdraw from your legacy mStable product positions.</p>
        </CardContent>
        <CardActions>
          <LinkButton href="https://withdraw.mstable.app" external={false}>
            Legacy Support
          </LinkButton>
        </CardActions>
      </Card>
    </Container>
  )
}
