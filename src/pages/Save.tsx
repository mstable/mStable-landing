import React, { FC } from 'react'
import styled from 'styled-components'

import { Section } from '../components/layout/Section'
import { TwoColumns as TwoColumnsBase } from '../components/layout/Gridd'
import { FullBleed } from '../components/layout/FullBleed'
import { CTA } from '../components/CTA'
import { Colors } from '../theme'

const BigButton = styled(CTA)`
  text-transform: none;
  font-weight: 500;
  font-size: 1.1rem;
  width: auto;
  background: ${Colors.lightBlue};
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
    box-shadow: rgba(255, 255, 255, 0.4) 0 0 3rem;
    border-radius: 50%;
  }

  > div:last-child {
    padding: 0 2rem;
  }

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;

    h3 {
      margin-top: 0;
    }

    img {
      margin: 0 2rem 0 0;
      max-width: 10rem;
    }
  }
`

const TwoColumns = styled(TwoColumnsBase)`
  gap: 2rem;
  padding: 0 2rem;

  p span {
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;

    img:last-child {
      margin-left: -5rem;
    }

    img {
      max-height: 10rem;
    }
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`

export const SEO = {
  title: 'mStable Governance Token Meta (MTA)',
  description: 'Meta (MTA) is the governance token for the DeFi protocol mStable, with staking and yield farming rewards',
}

export const Save: FC = () => {
  return (
    <FullBleed>
      <Section centre h1={<Headline>mStable Save</Headline>} h2="The best passive savings account in DeFi">
        <Header>
          <Icons>
            <div>
              <img alt="mStable BTC" src="/tokens/imbtc.png" />
              <img alt="mStable USD" src="/tokens/imusd.png" />
            </div>
          </Icons>
          <div>
            <h3>
              mStable deposits your assets to decentralised lending markets to earn a base interest rate. This rate is then further
              increased by distributing mStable Swap fees and liquidating external protocol incentives.
            </h3>
          </div>
        </Header>
        <TwoColumns>
          <div />
          <div>
            <div>
              <h4>Why mStable Save?</h4>
              <p>
                With Save, you do not need to continuously sell rewards and pay expensive gas fees to compound your deposits. Deposit once
                and watch your assets grow.
              </p>
            </div>
            <Links>
              <BigButton href="https://mstable.app/#/musd/save/">Start Saving</BigButton>
            </Links>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <div>
              <h4>What is a Save Vault?</h4>
              <p>
                A <span>Save Vault</span> deposits your interest-bearing assets (imAssets) to a contract that distributes{' '}
                <span>MTA incentives</span> (imAsset Vault). You can boost the amount of MTA rewards earned - by up to 3x - by staking MTA
                in governance.
              </p>
            </div>
            <Links>
              <BigButton href="https://governance.mstable.org/">Stake MTA</BigButton>
              <BigButton href="https://mstable.app/#/musd/save">Earn MTA</BigButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
        <TwoColumns>
          <div />
          <div>
            <div>
              <h4>Where can I buy mStable MTA?</h4>
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
