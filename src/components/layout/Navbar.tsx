import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { logoVisibilityCtx } from '../../context'
import { ReactComponent as LogoSvg } from '../../images/mstable-logo.svg'
import { ExternalLink } from '../ExternalLink'
import { Colors, Constants } from '../../theme'
import { LinkButton } from '../CTA'

const Container = styled.div<{ fill?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${Constants.navHeight};
  z-index: 1;
  transition: 0.5s linear background;
  background: ${({ fill }) => (fill ? Colors.spaceBlue : 'transparent')};
  display: grid;
  overflow-x: hidden;
  z-index: 1;
  overflow: hidden;

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
  font-size: 0.875rem;

  a {
    display: flex;
    font-weight: normal;
    color: white;
  }

  button {
    font-size: 0.875rem;
  }

  ul {
    display: flex;
    align-items: center;
    line-height: 100%;

    > * {
      margin-right: 2rem;
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
    <Container fill={visible}>
      <Nav>
        <Link to="/" title="mStable">
          <LogoImg stable={0} />
        </Link>
        <ul>
          <li>
            <ExternalLink href="#">Products</ExternalLink>
          </li>
          <li>
            <ExternalLink href="#">Community</ExternalLink>
          </li>
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
