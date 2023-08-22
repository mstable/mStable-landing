import { useLayoutEffect } from 'react'

import { canUseDOM } from 'exenv'
import { Link } from 'react-router-dom'
import { useToggle, useWindowScroll } from 'react-use'
import useMeasure from 'react-use/lib/useMeasure'
import styled from 'styled-components'

import { WITHDRAW_APP_LINK, YIELD_APP_LINK } from '../../constants'
import { ReactComponent as LogoSvg } from '../../images/mstable-logo.svg'
import { Colors, Constants } from '../../theme'
import { LinkButton } from '../CTA'
import { ExternalLink, ExternalLinkChevron } from '../ExternalLink'
import { MobileNav as UnstyledMobileNav } from '../MobileNav'

import type { FC } from 'react'
import type { UseMeasureRef } from 'react-use/lib/useMeasure'

const LogoImg = styled(LogoSvg)<{ stable?: number }>`
  height: 20px;
  width: auto;
  #stable {
    transition: opacity 2s ease;
    opacity: ${({ stable }) => stable ?? 0};
  }
`

const DesktopNav = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`

const MobileNav = styled(UnstyledMobileNav)`
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  padding: 0 1rem;

  @media (min-width: 480px) {
    padding: 0 2rem;
  }

  a {
    display: flex;
    font-weight: normal;
    color: white;
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
  }

  ul {
    display: flex;
    align-items: center;

    > *:not(:last-child) {
      margin-right: 2rem;
    }
  }
`

const Container = styled.div<{ backgroundFill: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${Constants.navHeight};
  transition: 0.5s linear background;
  background: ${({ backgroundFill }) => (backgroundFill ? Colors.spaceBlue : 'transparent')};
  display: grid;
  z-index: 1;

  grid-template-columns:
    1fr
    min(1200px, 100%)
    1fr;
`

const urls: {
  title: string
  href: string
  isButton?: boolean
  highlight?: boolean
}[] = [
  {
    title: 'Open App',
    href: YIELD_APP_LINK,
    isButton: true,
    highlight: true,
  },
  {
    title: 'Legacy Support',
    href: WITHDRAW_APP_LINK,
    isButton: true,
  },
]

const DesktopLinks: FC = () => (
  <ul>
    {urls.map(({ title, href, isButton = false, highlight }) => (
      <li key={title}>
        {isButton ? (
          <LinkButton external={false} href={href} highlight={highlight}>
            {title}
          </LinkButton>
        ) : (
          <ExternalLink href={href}>{title}</ExternalLink>
        )}
      </li>
    ))}
  </ul>
)

const MobileLinks: FC = () => (
  <ul>
    {urls.map(({ title, href }) => (
      <li key={href}>
        <ExternalLinkChevron href={href}>{title}</ExternalLinkChevron>
      </li>
    ))}
  </ul>
)

const Content: FC = () => (
  <Nav>
    <Link to="/" title="mStable">
      <LogoImg />
    </Link>
    <DesktopNav>
      <DesktopLinks />
    </DesktopNav>
    <MobileNav>
      <MobileLinks />
    </MobileNav>
  </Nav>
)

const NavBarClient: FC = () => {
  const { y } = useWindowScroll()
  const [backgroundVisible, setBackgroundVisibility] = useToggle(false)
  const [ref, { bottom }] = useMeasure()

  useLayoutEffect(() => {
    if (backgroundVisible && y > bottom) return
    if (!backgroundVisible && y < bottom) return
    setBackgroundVisibility(y > bottom)
  }, [y, bottom, backgroundVisible, setBackgroundVisibility])

  return (
    <Container backgroundFill={backgroundVisible} ref={ref as UseMeasureRef<HTMLDivElement>}>
      <Content />
    </Container>
  )
}

const NavBarServer: FC = () => (
  <Container backgroundFill>
    <Content />
  </Container>
)

export const NavBar: FC = canUseDOM ? NavBarClient : NavBarServer
