/* eslint-disable no-empty */
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

export const Adverts: FC = () => (
  <Container>
    <Card bgColor="blue">
      <CardHeader>
        <h2>New MTA Yield</h2>
      </CardHeader>
      <CardContent>
        <p>
          New opportunity to earn <b>&gt;100% APR</b> by providing MTA liquidity on Optimism Velodrome.
        </p>
      </CardContent>
      <CardActions>
        <LinkButton href="https://app.optimism.io/bridge/deposit" highlight>
          Bridge to Optimism
        </LinkButton>
        <LinkButton
          href="https://app.velodrome.finance/deposit?token0=0x7f5c764cbc14f9669b88837ca1490cca17c31607&token1=0x929b939f8524c3be977af57a4a0ad3fb1e374b50&stable=false"
          highlight
        >
          Earn &gt;100% APR
        </LinkButton>
      </CardActions>
    </Card>
    <Card bgColor="pink">
      <CardHeader>
        <h2>MTA Buyback</h2>
      </CardHeader>
      <CardContent>
        <p>Burn MTA to receive stablecoin yield on Optimism. Swap fixed at $0.0318 USD / MTA.</p>
      </CardContent>
      <CardActions>
        <LinkButton href="" disabled>
          More Coming Soon
        </LinkButton>
      </CardActions>
    </Card>
  </Container>
)
