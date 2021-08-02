import React, { FC, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoSvg } from '../../images/mstable-logo.svg'
import { ExternalLink, ExternalLinkChevron } from '../ExternalLink'
import { Colors, Constants } from '../../theme'
import { LinkButton } from '../CTA'
import { MobileNav as UnstyledMobileNav } from '../MobileNav'
import useMeasure, { UseMeasureRef } from 'react-use/lib/useMeasure'
import { useToggle, useWindowScroll } from 'react-use'

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
    gap: 2rem;
  }
`

const Container = styled.div<{ backgroundFill: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${Constants.navHeight};
  z-index: 1;
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
}[] = [
  {
    title: 'Analytics',
    href: 'https://duneanalytics.com/derc/mta-community',
  },
  {
    title: 'Governance',
    href: 'https://governance.mstable.org',
  },
  {
    title: 'Use mStable',
    href: 'https://mstable.app',
    isButton: true,
  },
]

const DesktopLinks: FC = () => (
  <ul>
    {urls.map(({ title, href, isButton = false }) => (
      <li key={title}>
        {isButton ? (
          <LinkButton external={false} href={href} highlight>
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
      <li>
        <ExternalLinkChevron href={href}>{title}</ExternalLinkChevron>
      </li>
    ))}
  </ul>
)

export const NavBar: FC = () => {
  const { y } = useWindowScroll()
  const [backgroundVisible, setBackgroundVisibility] = useToggle(false)
  const [ref, { bottom }] = useMeasure()

  useLayoutEffect(() => {
    if (backgroundVisible && y > bottom) return
    if (!backgroundVisible && y < bottom) return
    setBackgroundVisibility(y > bottom)
  }, [y, top])

  return (
    <Container backgroundFill={backgroundVisible} ref={ref as UseMeasureRef<HTMLDivElement>}>
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
    </Container>
  )
}
