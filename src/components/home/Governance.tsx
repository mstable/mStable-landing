import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Section } from '../layout/Section'
import { AppCTA, CTA } from '../CTA'
import { MainAndAside } from '../layout/Grid'
import { FullBleed } from '../layout/FullBleed'

const Links = styled.div`
  display: flex;
  margin-top: 16px;

  > * {
    margin-right: 16px;
  }
`

const GetInformed = styled.div`
  margin-top: 32px;
`

const Jobs = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  > a {
    margin-bottom: 8px;
  }
`

const Container = styled(Section)`
  > div {
    border-radius: 1rem;
    background: radial-gradient(farthest-corner at 10% 10%, #181b21, black);
    padding: 2rem;
    overflow: hidden;
    box-sizing: border-box;

    > div {
      gap: 0;
    }

    @media (min-width: 520px) {
      margin: 0 2rem;
    }
  }
`

export const Governance: FC = () => {
  return (
    <FullBleed>
      <Container h2="An open & decentralised ecosystem">
        <MainAndAside>
          <div>
            <p>
              mStable is governed by <Link to="/governance-token-meta">MTA</Link> holders who have staked their tokens to vote on proposals.
              mStable's governance goes through a process where consensus is reached in progressively concrete stages.
            </p>
            <p>Proposals and ideas are surfaced on the Discord or public forum, and are finalised by on-chain signalling by MTA holders.</p>
          </div>
          <AppCTA href="https://governance.mstable.org">Govern mStable</AppCTA>
        </MainAndAside>
        <GetInformed>
          <h3>Join us and get informed</h3>
          <Links>
            <CTA arrow href="https://forum.mstable.org">
              Forum
            </CTA>
            <CTA arrow href="https://discord.gg/pgCVG7e">
              Discord
            </CTA>
            <CTA arrow href="https://t.me/mstableofficial">
              Telegram
            </CTA>
          </Links>
        </GetInformed>
        <Jobs>
          <h3>We’re hiring!</h3>
          <CTA arrow href="https://cryptocurrencyjobs.co/startups/mstable/">
            Explore our open positions
          </CTA>
        </Jobs>
      </Container>
    </FullBleed>
  )
}
