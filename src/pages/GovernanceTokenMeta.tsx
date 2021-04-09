import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../components/layout/Section'
import { TwoColumns as TwoColumnsBase } from '../components/layout/Grid'
import { FullBleed } from '../components/layout/FullBleed'
import { CTA } from '../components/CTA'
import { Colors } from '../theme'
import { ExternalLink } from '../components/ExternalLink'

const BigButton = styled(CTA)`
  text-transform: none;
  font-weight: 500;
  font-size: 1.1rem;
  width: auto;
  background: ${Colors.blue};
  color: white;
  border: none;
  text-shadow: rgba(0, 75, 124, 0.4) 0 1px 1px;
  box-shadow: rgba(0, 153, 255, 0.4) 0 6px 20px;
  padding: 0.75rem 1.75rem;
  border-radius: 1.5rem;
  transition: all 0.5s ease;

  &:hover {
    color: white;
    background: ${Colors.gold};
    text-shadow: rgba(124, 95, 0, 0.4) 0 1px 1px;
    box-shadow: rgba(255, 197, 0, 0.4) 0 6px 20px;
  }
`

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
      font-weight: bold;
    }
  }
`

const Header = styled.div`
  margin-bottom: 6rem;
  text-align: center;

  h3 {
    display: block;
    max-width: 40ch;
    font-weight: normal;
    span {
      font-weight: bold;
      color: white;
    }
  }

  img {
    display: block;
    max-width: 8rem;
    height: auto;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;

    img {
      margin: 0 2rem 0 0;
      max-width: 10rem;
    }
  }
`

const TwoColumns = styled(TwoColumnsBase)`
  gap: 2rem;

  p span {
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }
`

export const SEO = {
  title: 'mStable Governance Token Meta (MTA)',
  description: 'Meta (MTA) is the governance token for the DeFi protocol mStable, with staking and yield farming rewards',
}

export const GovernanceTokenMeta: FC = () => {
  return (
    <FullBleed>
      <Section
        centre
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
              creates value for the protocol and its users.
            </h3>
            <ExternalLink href="https://coingecko.com/en/coins/meta">See MTA on Coingecko</ExternalLink>
          </div>
        </Header>
        <TwoColumns>
          <div />
          <div>
            <div>
              <h4>What is mStable's governance token MTA used for?</h4>
              <p>
                MTA stakers earn staking rewards and can also earn <span>boosted rewards</span> across the protocol to incentivise long-term
                holders. By staking, MTA governors vote on the direction of the protocol, its parameters and funding.
              </p>
            </div>
            <Links>
              <BigButton href="https://governance.mstable.org">Stake MTA</BigButton>
              <BigButton href="https://medium.com/mstable/guide-mstable-staking-249660be3e0">Guide: Staking MTA</BigButton>
            </Links>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <div>
              <h4>How can I earn MTA tokens?</h4>
              <p>
                Anyone can earn MTA through mStable’s rewards: <span>MTA Staking, Save Vaults, Feeder Pools</span>, and the{' '}
                <span>Grants Program</span>.
              </p>
            </div>
            <Links>
              <BigButton href="https://app.mstable.org/">Start earning MTA</BigButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
        <TwoColumns>
          <div />
          <div>
            <div>
              <h4>Which exchanges sell MTA tokens?</h4>
              <p>
                MTA is traded on major exchanges like <span>Huobi</span> and <span>FTX</span>, and decentralized exchanges like{' '}
                <span>Uniswap</span>.
              </p>
            </div>
            <Links>
              <BigButton href="https://app.uniswap.org/#/swap?outputCurrency=0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2">Uniswap</BigButton>
              <BigButton href="https://ftx.com/trade/MTA/USD">FTX</BigButton>
              <BigButton href="https://www.huobi.com/en-us/exchange/?s=mta_usdt">Huobi</BigButton>
              <BigButton href="https://www.gate.io/trade/MTA_USDT">Gate.io</BigButton>
            </Links>
          </div>
        </TwoColumns>
      </Section>
    </FullBleed>
  )
}
