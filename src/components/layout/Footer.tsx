import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import Discord from '../../images/social/discord.svg'
import Medium from '../../images/social/medium.svg'
import Twitter from '../../images/social/twitter.svg'
import Github from '../../images/social/github.svg'
import Email from '../../images/social/email.svg'
import Telegram from '../../images/social/telegram.svg'
import DefiPulse from '../../images/social/defi-pulse.svg'
import { ExternalLink, LinkChevron, ExternalLinkChevron } from '../ExternalLink'
import Signup from '../Signup'
import { MTA_BUY_LINK } from '../../constants'
import { Section } from './Section'

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`

const Links = styled.div`
  > * {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }
  a {
    font-weight: normal;
    opacity: 0.5;
    transition: opacity 0.5s ease-out;
    font-size: 1.125rem;
    color: white;
  }
  a:hover {
    opacity: 1;
  }
`

const Social = styled.div`
  margin: 4px 0 8px 0;
  text-align: center;
  padding: 0 2rem;

  ${Links} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > * {
      display: block;
    }
    > *:not(:last-child) {
      margin-right: 1.5rem;
    }
    img {
      height: 28px;
    }
  }
`

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20%;

  > div {
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Bottom = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  a {
    font-size: 1rem;
  }

  > div > div {
    display: flex;
    padding: 1rem;
    align-items: center;
    font-size: 1rem;
    flex-direction: column;

    > *:not(:last-child) {
      margin-right: 1rem;
    }

    b {
      color: white;
      font-weight: 500;
    }

    > div:first-child {
      color: rgba(255, 255, 255, 0.75);

      a {
        color: rgba(255, 255, 255, 0.75);
        font-weight: normal;
      }
    }

    > div:last-child {
      display: flex;
      position: relative;

      > *:not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    @media (min-width: 480px) {
      padding: 2rem;
    }

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const BleedCss = css`
  display: grid;
  grid-column: 1 / 4 !important;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`

const TopFooter = styled(Section)`
  ${BleedCss}
  > div:last-child > div:first-child {
    margin-bottom: 5rem;
  }
  @media (min-width: 480px) {
    > div:last-child > div:first-child {
      margin-bottom: 10rem;
    }
  }
`

const BottomFooter = styled.div`
  ${BleedCss}
`

const Container = styled.footer`
  background: linear-gradient(180deg, transparent, #000000);
`

const KeepUpdated: FC = () => (
  <Social>
    <Header>Keep up to date</Header>
    <Signup />
    <Links>
      <ExternalLink href="https://discord.gg/pgCVG7e">
        <img src={Discord} alt="Discord" />
      </ExternalLink>
      <ExternalLink href="mailto:info@mstable.org">
        <img src={Email} alt="Email" />
      </ExternalLink>
      <ExternalLink href="https://github.com/mstable">
        <img src={Github} alt="Github" />
      </ExternalLink>
      <ExternalLink href="https://medium.com/mstable">
        <img src={Medium} alt="Medium" />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/mstable_">
        <img src={Twitter} alt="Twitter" />
      </ExternalLink>
      <ExternalLink href="https://t.me/mstableofficial">
        <img src={Telegram} alt="Telegram" />
      </ExternalLink>
      <ExternalLink href="https://defipulse.com/mstable">
        <img src={DefiPulse} alt="Defi Pulse" />
      </ExternalLink>
    </Links>
  </Social>
)

export const Footer: FC = () => {
  return (
    <Container>
      <TopFooter>
        <KeepUpdated />
        <Top>
          <div>
            <Header>Protocol</Header>
            <ExternalLinkChevron href="https://mstable.app">App</ExternalLinkChevron>
            <ExternalLinkChevron href="https://docs.mstable.org">Documentation</ExternalLinkChevron>
            <ExternalLinkChevron href="https://github.com/mstable">Developers</ExternalLinkChevron>
            <LinkChevron href="/save">About Save</LinkChevron>
          </div>
          <div>
            <Header>Governance</Header>
            <ExternalLinkChevron href="https://governance.mstable.org">Governance App</ExternalLinkChevron>
            <ExternalLinkChevron href="https://forum.mstable.org">Forum</ExternalLinkChevron>
            <ExternalLinkChevron href="https://snapshot.page/#/mstable">Vote</ExternalLinkChevron>
          </div>
        </Top>
      </TopFooter>
      <Bottom>
        <BottomFooter>
          <div>
            <div>
              <b>mStable</b> powered by <ExternalLink href="https://ethereum.org/en/">Ethereum</ExternalLink>
            </div>
            <div>
              <ExternalLink href={MTA_BUY_LINK}>Buy MTA</ExternalLink>
              <ExternalLink href={'https://docs.mstable.org/'}>Docs</ExternalLink>
              <ExternalLink href={'https://docs.mstable.org/mstable-assets/brand-assets'}>Brand</ExternalLink>
            </div>
          </div>
        </BottomFooter>
      </Bottom>
    </Container>
  )
}
