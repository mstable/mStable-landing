import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../components/layout/Section'
import { TwoColumns as TwoColumnsBase } from '../components/layout/Gridd'
import { FullBleed } from '../components/layout/FullBleed'
import { LinkButton } from '../components/CTA'
import { Colors } from '../theme'
import { ExternalLink } from '../components/ExternalLink'

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  text-transform: uppercase;
  padding: 1rem 0;
  min-width: 0;
  flex-wrap: wrap;

  > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`

const Headline = styled.span`
  > span {
    color: ${Colors.whiteTransparent};
    > span {
      color: white;
      font-weight: 500;
    }
  }
`

const Header = styled.div`
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 2rem;
  padding: 2rem 0;

  h3 {
    display: block;
    max-width: 40ch;
    font-weight: normal;
    margin-top: 2rem;
    span {
      font-weight: bold;
      color: white;
    }
  }

  > img {
    display: block;
    max-width: 8rem;
    height: auto;
    margin: 0 auto;
    box-shadow: rgba(77, 217, 252, 0.25) 0 0 1.5rem;
    border-radius: 50%;
    margin-bottom: 4rem;
  }

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0 5rem;

    h3 {
      margin-top: 0;
    }

    img {
      margin: 0 4rem 0 0;
      max-width: 10rem;
    }
  }
`

const TwoColumns = styled(TwoColumnsBase)`
  padding: 0;

  @media (min-width: 480px) {
    padding: 2rem 0;
  }

  p {
    opacity: 0.75;
  }

  p span {
    font-weight: 500;
  }

  h4 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`

const Container = styled(Section)`
  padding: 0 0.5rem;

  > header {
    @media (max-width: calc(480px - 1px)) {
      margin-top: 0;
    }
  }

  > div {
    margin-top: 0;
  }
`

export const SEO = {
  title: 'mStable Governance Token Meta (MTA)',
  description: 'Meta (MTA) is the governance token for the DeFi protocol mStable, with staking and yield farming rewards',
}

export const GovernanceTokenMeta: FC = () => {
  return (
    <FullBleed>
      <Container
        h1={
          <Headline>
            mStable Meta{' '}
            <span>
              (<span>MTA</span>)
            </span>
          </Headline>
        }
        h2="Governance token for the mStableDAO"
      >
        <Header>
          <img alt="mStable MTA Token" src="/tokens/mta.png" />
          <div>
            <h3>
              Meta (<span>MTA</span>) coordinates mStable’s decentralised governance, fosters long-term alignment for stakeholders, and
              creates value for the protocol and its users. &nbsp;
              <ExternalLink href="https://coingecko.com/en/coins/meta">See MTA on Coingecko</ExternalLink>
            </h3>
          </div>
        </Header>
        <TwoColumns>
          <div>
            <div>
              <h4>What is mStable's governance token MTA used for?</h4>
              <p>
                MTA stakers earn staking rewards and can also earn <span>boosted rewards</span> across the protocol to incentivise long-term
                holders. By staking, MTA governors vote on the direction of the protocol, its parameters and funding.
              </p>
            </div>
            <Links>
              <LinkButton highlight href="https://staking.mstable.app">
                Stake MTA
              </LinkButton>
              <LinkButton highlight href="https://medium.com/mstable/staking-migration-guide-8f0ec7e0b267">
                Guide: Staking MTA
              </LinkButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
        <TwoColumns>
          <div />
          <div>
            <div>
              <h4>How can I earn MTA tokens?</h4>
              <p>
                Anyone can earn MTA through mStable’s rewards: <span>MTA Staking, Save Vaults, Feeder Pools</span>, and the{' '}
                <span>Grants Program</span>.
              </p>
            </div>
            <Links>
              <LinkButton highlight href="https://mstable.app/">
                Start earning MTA
              </LinkButton>
            </Links>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <div>
              <h4>Where can I buy mStable MTA?</h4>
              <p>
                MTA is traded on major exchanges like <span>Huobi</span> and <span>FTX</span>, and decentralized exchanges like{' '}
                <span>Uniswap</span>.
              </p>
            </div>
            <Links>
              <LinkButton highlight href="https://app.uniswap.org/#/swap?outputCurrency=0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2">
                Uniswap
              </LinkButton>
              <LinkButton highlight href="https://ftx.com/trade/MTA/USD">
                FTX
              </LinkButton>
              <LinkButton highlight href="https://www.huobi.com/en-us/exchange/?s=mta_usdt">
                Huobi
              </LinkButton>
              <LinkButton highlight href="https://www.gate.io/trade/MTA_USDT">
                Gate.io
              </LinkButton>
              <LinkButton
                highlight
                href="https://app.bancor.network/eth/swap?from=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C&to=0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2"
              >
                Bancor
              </LinkButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
      </Container>
    </FullBleed>
  )
}
