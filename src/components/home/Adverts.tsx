/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { VELODROME_API_ENDPOINT } from '../../constants'
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

export const Adverts: FC = () => {
  const [apr, setApr] = useState(0)

  useEffect(() => {
    const fetchApy = async () => {
      try {
        const { data } = await (await fetch(VELODROME_API_ENDPOINT)).json()
        const a = data.find((d: { symbol: string }) => d.symbol === 'vAMM-USDC/MTA').apr
        setApr(a * 100)
      } catch {
        setApr(0)
      }
    }

    fetchApy()
  }, [])

  return (
    <Container>
      <Card bgColor="blue">
        <CardHeader>
          <h2>New MTA Yield</h2>
        </CardHeader>
        <CardContent>
          <p>
            New opportunity to earn<b>{apr > 1 && ` ${apr.toFixed(2)}% APR`}</b> by providing MTA liquidity on Optimism Velodrome.
          </p>
        </CardContent>
        <CardActions>
          <LinkButton href="https://app.optimism.io/bridge/deposit" highlight>
            Bridge to Optimism
          </LinkButton>
          <LinkButton href="https://app.velodrome.finance/liquidity/manage?address=0x66a8bd7ccfd52bfb5bc838d149fba78e6920303f" highlight>
            Earn x% APY
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
}
