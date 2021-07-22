import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { logoVisibilityCtx } from '../../context'
import { ReactComponent as LogoSvg } from '../../images/mstable-logo.svg'
import { ExternalLink } from '../ExternalLink'
import { Constants } from '../../theme'
import { LinkButton } from '../CTA'

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${Constants.navHeight};
  z-index: 1;

  display: grid;
  overflow-x: hidden;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  padding: 0 2rem;

  a {
    display: flex;
    color: white;
  }

  ul {
    display: flex;
    align-items: center;
    line-height: 100%;

    li,
    button {
      font-size: 0.8rem;
    }

    button {
      padding: 0.5rem 1rem;
    }

    // flex-gap polyfill fail
    > * {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const LogoImg = styled(LogoSvg)<{ stable: number }>`
  height: 20px;
  width: auto;
  #stable {
    transition: opacity 2s ease;
    opacity: ${({ stable }) => stable};
  }
`

export const NavBar: FC = () => {
  const [visible] = useContext(logoVisibilityCtx)
  return (
    <Container>
      <Nav>
        <Link to="/" title="mStable">
          <LogoImg stable={visible ? 1 : 0} />
        </Link>
        <ul>
          <li>
            <ExternalLink href="#">Governance</ExternalLink>
          </li>
          <li>
            <LinkButton href="https://app.mstable.org" highlight>
              Use mStable
            </LinkButton>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}
