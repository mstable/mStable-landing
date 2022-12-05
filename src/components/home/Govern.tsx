import styled from 'styled-components'

import Bancor from '../../images/exchange/bancor.svg'
import Huobi from '../../images/exchange/huobi.svg'
import Uniswap from '../../images/exchange/uniswap.svg'
import { Colors } from '../../theme'
import { LinkButton } from '../CTA'
import { ExternalLink } from '../ExternalLink'
// @ts-ignore
import { Section } from '../layout/Section'

import type { FC } from 'react'

const ExchangeContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: 0.25s all linear;
    padding: 0.5rem;

    img {
      height: 2rem;
    }

    :hover {
      opacity: 1;
    }
  }
`

const Container = styled(Section)`
  background: url('../assets/img/circles.svg') no-repeat;
  background-size: 250% 200%;
  background-position: 50% -2rem;

  @media (min-width: 480px) {
    background-size: 75% 170%;
    background-position: 50% 0;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  div {
    display: flex;

    > * {
      margin: 0.5rem 0.75rem;
    }

    button {
      color: ${Colors.neonPink};
      background: ${Colors.neonPinkDark100};

      :hover {
        color: ${Colors.neonPink};
        box-shadow: 0 0 0.25rem ${Colors.neonPink};
      }
    }
  }
`

export const Govern: FC = () => {
  return (
    <Container h1="Discuss, vote, govern" h2="Powered by the mStable Governance token: MTA">
      <LinkButton external={false} href={'/governance-token-meta'}>
        Learn More
      </LinkButton>
      <ExchangeContainer>
        <ExternalLink href="https://app.bancor.network/eth/swap?from=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C&to=0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2">
          <img src={Bancor} alt="Buy on Bancor" />
        </ExternalLink>
        <ExternalLink href="https://www.huobi.com/en-us/exchange/mta_eth">
          <img src={Huobi} alt="https://www.huobi.com/en-us/exchange/mta_eth/" />
        </ExternalLink>
        <ExternalLink href="https://app.uniswap.org/#/swap?outputCurrency=0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2">
          <img src={Uniswap} alt="https://app.uniswap.org/#/swap?outputCurrency=0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2/" />
        </ExternalLink>
      </ExchangeContainer>
    </Container>
  )
}
