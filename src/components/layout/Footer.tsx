import React, { FC } from 'react'
import styled from 'styled-components'

import Discord from '../../images/discord.svg'
import Medium from '../../images/medium.svg'
import Twitter from '../../images/twitter.svg'
import Github from '../../images/github.svg'
import Email from '../../images/email.svg'
import Telegram from '../../images/telegram.svg'
import { ExternalLink } from '../ExternalLink'
import { Grid } from './Grid'
import { FullBleed } from './FullBleed'
import Signup from '../Signup'

const Header = styled.h4`
  margin: 8px 0;
  font-weight: normal;
`

const Links = styled.div`
  > * {
    display: block;
    margin-bottom: 8px;
  }
  a {
    font-weight: normal;
  }
`

const EasterEgg = styled.div`
  font-size: 10px;
  opacity: 0.08;
`

const Social = styled.div`
  margin: 4px 0 8px 0;

  ${Links} {
    display: flex;
    gap: 16px;
    > * {
      display: block;
    }
  }

  @media (min-width: 600px) {
    grid-column: 4 / 7;
    text-align: right;

    ${Links} {
      justify-content: flex-end;
    }
  }
`

const Top = styled(Grid)`
  margin-bottom: 64px;
  padding: 0 24px;
`

const Bottom = styled(Grid)`
  padding: 0 24px;

  > :first-child {
    grid-column: left;
  }

  > :last-child {
    grid-column: right;
    text-align: right;
  }
`

const Container = styled.footer``

const StyledFullBleed = styled(FullBleed)`
  padding-top: 16px;
  padding-bottom: 32px;
  background-color: #f6f6f6;
  color: #666;
`

export const Footer: FC = () => {
  return (
    <StyledFullBleed>
      <Container>
        <Top>
          <div>
            <Header>Protocol</Header>
            <Links>
              <ExternalLink href="https://app.mstable.org">App</ExternalLink>
              <ExternalLink href="https://docs.mstable.org">
                Documentation
              </ExternalLink>
              <ExternalLink href="https://github.com/mstable">
                Developers
              </ExternalLink>
            </Links>
          </div>
          <div>
            <Header>Governance</Header>
            <Links>
              <ExternalLink href="https://governance.mstable.org">
                Governance App
              </ExternalLink>
              <ExternalLink href="https://forum.mstable.org">
                Forum
              </ExternalLink>
              <ExternalLink href="https://snapshot.page/#/mstable">
                Vote
              </ExternalLink>
            </Links>
          </div>
          <Social>
            <Header>Keep up to date and join the community</Header>
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
            </Links>
            <Signup />
          </Social>
        </Top>
        <Bottom>
          <Links>
            <div>
              Powered by{' '}
              <ExternalLink href="https://ethereum.org/en/">
                Ethereum
              </ExternalLink>
            </div>
            <div>
              Hosted on{' '}
              <ExternalLink href="https://ipfs.io/">IPFS</ExternalLink>
            </div>
          </Links>
          <EasterEgg>Ape Together Strong 💪</EasterEgg>
        </Bottom>
      </Container>
    </StyledFullBleed>
  )
}
