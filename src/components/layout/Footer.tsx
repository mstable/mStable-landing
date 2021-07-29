import React, { FC } from 'react'
import styled from 'styled-components'

import Discord from '../../images/social/discord.svg'
import Medium from '../../images/social/medium.svg'
import Twitter from '../../images/social/twitter.svg'
import Github from '../../images/social/github.svg'
import Email from '../../images/social/email.svg'
import Telegram from '../../images/social/telegram.svg'
import DefiPulse from '../../images/social/defi-pulse.svg'
import Arrow from '../../images/arrow-circle.svg'
import { ExternalLink } from '../ExternalLink'
import { Gridd } from './Gridd'
import { FullBleed } from './FullBleed'
import Signup from '../Signup'
import { MTA_BUY_LINK } from '../../constants'

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`

const Link = styled(ExternalLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
`

const Links = styled.div`
  > * {
    margin-bottom: 0.5rem;
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

const EasterEgg = styled.div`
  font-size: 10px;
  opacity: 0.1;
  position: absolute;
  bottom: -1.5rem;
  right: 0;
`

const Social = styled.div`
  margin: 4px 0 8px 0;
  text-align: center;
  padding: 0 2rem;

  ${Links} {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    flex-wrap: wrap;
    > * {
      display: block;
    }
    img {
      height: 28px;
    }
  }
`

const Top = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  gap: 2rem;

  a {
    font-size: 1rem;
  }

  > div > div {
    display: flex;
    padding: 2rem;
    align-items: center;
    gap: 1rem;

    font-size: 1rem;
    flex-direction: column;

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
      gap: 1.5rem;
      position: relative;
    }

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const Bleed = styled.div`
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

const Container = styled.footer`
  background: linear-gradient(180deg, transparent, #000000);

  > div:first-child {
    > * {
      margin: 5rem 0;
    }
  }
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

const LinkWithChevron: FC<{ title: String; href: string }> = ({ title, href }) => {
  return (
    <Link href={href}>
      <span>{title}</span>
      <img src={Arrow} />
    </Link>
  )
}

export const Footer: FC = () => {
  return (
    <Container>
      <Bleed>
        <KeepUpdated />
        <Top>
          <div>
            <Header>Protocol</Header>
            <LinkWithChevron href="https://app.mstable.org" title="App" />
            <LinkWithChevron href="https://docs.mstable.org" title="Documentation" />
            <LinkWithChevron href="https://github.com/mstable" title="Developers" />
          </div>
          <div>
            <Header>Governance</Header>
            <LinkWithChevron href="https://governance.mstable.org" title="Governance App" />
            <LinkWithChevron href="https://forum.mstable.org" title="Forum" />
            <LinkWithChevron href="https://snapshot.page/#/mstable" title="Vote" />
          </div>
        </Top>
      </Bleed>
      <Bottom>
        <Bleed>
          <div>
            <div>
              <b>mStable</b> powered by <ExternalLink href="https://ethereum.org/en/">Ethereum</ExternalLink>
            </div>
            <div>
              <Link href={MTA_BUY_LINK}>Buy MTA</Link>
              <Link href={'https://docs.mstable.org/'}>Docs</Link>
              <Link href={'https://docs.mstable.org/mstable-assets/brand-assets'}>Brand</Link>
              <EasterEgg>Ape Together Strong 💪</EasterEgg>
            </div>
          </div>
        </Bleed>
      </Bottom>
    </Container>
  )
}
