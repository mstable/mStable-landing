import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import M from '../../images/mstable-m.svg'
import Ether from '../../images/ether-logo.svg'
import { ExternalLink } from '../ExternalLink'
import { useLogoVisibility } from './Page'
import { Constants } from '../../theme'

const AppLink = styled(ExternalLink)`
  display: flex;
  align-items: center;

  img {
    height: 20px;
  }

  // flex-gap polyfill fail
  > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${Constants.navHeight};
  background: black;
  z-index: 1;

  display: grid;
  overflow-x: hidden;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;
`

const Nav = styled.nav`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  padding: 0 24px;

  a {
    color: white;
  }

  ul {
    display: flex;
    gap: 32px;
    line-height: 48px;
  }
`

const LogoImg = styled.img<{ visible: boolean }>`
  width: 20px;
  height: auto;
  transition: opacity 2s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`

export const NavBar: FC = () => {
  const [visible] = useLogoVisibility()
  return (
    <FixedContainer>
      <Nav>
        <Link to="/">
          <LogoImg src={M} alt="mStable" visible={visible} />
        </Link>

        <ul>
          <li>
            <ExternalLink href="https://github.com/mstable">Code</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://docs.mstable.org">Docs</ExternalLink>
          </li>
          <li>
            <AppLink href="https://mstable.app">
              <img src={Ether} alt="App" />
              <div>App</div>
            </AppLink>
          </li>
        </ul>
      </Nav>
    </FixedContainer>
  )
}
