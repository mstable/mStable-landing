/* eslint-disable no-empty */
import React from 'react'

import styled from 'styled-components'

import { YIELD_APP_LINK } from '../../constants'
import { Card, CardActions, CardContent, CardHeader } from '../Card'
import { LinkButton } from '../CTA'

import type { FC } from 'react'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

const ContainerWithSpacing = styled(Container)`
  ${({ theme }) => theme.mixins.sectionSpacing};
`

export const Adverts: FC = () => (
  <>
    <Container>
      <Card bgColor="pink">
        <CardHeader>
          <h2>mStable Meta Harvester</h2>
        </CardHeader>
        <CardContent>
          <p>Discover the Future of Yield Farming! 🚀</p>
          <p>Unlock maximum returns with Meta Harvester, the vault that redefines DeFi yield farming. </p>
        </CardContent>
        <CardActions>
          <LinkButton href={`${YIELD_APP_LINK}/vault/0x9c6de13d4648a6789017641f6b1a025816e66228`} highlight external={false}>
            Meta Harvester
          </LinkButton>
        </CardActions>
      </Card>
    </Container>
  </>
)
