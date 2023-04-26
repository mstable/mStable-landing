import styled from 'styled-components'

import { LinkButton } from '../components/CTA'
import { Coins } from '../components/home/GL/Coins'
import { FullBleed } from '../components/layout/FullBleed'
import { TwoColumns as TwoColumnsBase } from '../components/layout/Gridd'
import { Section } from '../components/layout/Section'

import type { FC } from 'react'

const Icons = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;

    img:last-child {
      margin-left: -6rem;
    }

    img {
      max-height: 10rem;
    }
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
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
    box-shadow: rgba(255, 255, 255, 0.4) 0 0 3rem;
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

  > div {
    margin-top: 0;
  }

  @media (max-width: calc(480px - 1px)) {
    > header {
      margin-top: 0;
    }
    > div:last-child > div:last-child {
      display: none;
    }
  }
`

export const SEO = {
  title: 'mStable Save',
  description: 'High yielding savings accounts powered by the mStable AMM',
}

export const Save: FC = () => {
  return (
    <FullBleed>
      <Container h1={'mStable Save'} h2="High yielding savings accounts">
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
          <div>
            <div>
              <h4>Why mStable Save?</h4>
              <p>
                With Save, you do not need to continuously sell rewards and pay expensive gas fees to compound your deposits. Deposit once
                and watch your assets grow.
              </p>
            </div>
            <Links>
              <LinkButton highlight href="https://mstable.app/#/musd/save/">
                Start Saving
              </LinkButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
        <TwoColumns>
          <div />
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
              <LinkButton highlight href="https://staking.mstable.app/">
                Stake MTA
              </LinkButton>
              <LinkButton highlight href="https://mstable.app/#/musd/save">
                Earn MTA
              </LinkButton>
            </Links>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <div>
              <h4>Where can I buy mStable MTA?</h4>
              <p>
                MTA is traded on major exchanges like <span>Huobi</span> and decentralized exchanges like <span>Uniswap</span>.
              </p>
            </div>
            <Links>
              <LinkButton highlight href="https://app.uniswap.org/#/swap?outputCurrency=0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2">
                Uniswap
              </LinkButton>
              <LinkButton highlight href="https://www.huobi.com/en-us/exchange/?s=mta_usdt">
                Huobi
              </LinkButton>
              <LinkButton highlight href="https://www.gate.io/trade/MTA_USDT">
                Gate.io
              </LinkButton>
            </Links>
          </div>
          <div />
        </TwoColumns>
        <Coins />
      </Container>
    </FullBleed>
  )
}
