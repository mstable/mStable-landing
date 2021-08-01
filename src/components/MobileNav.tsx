import React, { FC, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useToggle } from 'react-use'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'

import { ReactComponent as MenuIcon } from '../images/icons/menu.svg'
import { ReactComponent as CloseIcon } from '../images/icons/close.svg'
import { ReactComponent as LogoSvg } from '../images/mstable-logo.svg'
import { Colors } from '../theme'
import { ExternalLinkChevron } from './ExternalLink'

const LogoImg = styled(LogoSvg)<{ stable?: number }>`
  height: 20px;
  width: auto;
  #stable {
    transition: opacity 2s ease;
    opacity: ${({ stable }) => stable ?? 0};
  }
`

const MenuButton = styled.button`
  outline: none;
  border: none;
  width: 2.25rem;
  border-radius: 1.25rem;
  background: none;
  cursor: pointer;

  svg {
    display: block;
    height: 1rem;
  }
`

const Inner = styled.div`
  width: 100%;
  display: flex;
  border-radius: 0.75rem;
  background: ${Colors.spaceBlueLight};
  max-width: calc(1200px - 2rem);
  flex-direction: column;

  > *:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    height: 72px;

    @media (min-width: 480px) {
      padding: 0 2rem;
    }
  }

  > *:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    font-size: 1.125rem;
    padding: 0 1.25rem 1rem 1rem;

    > * {
      width: 100%;
    }
    @media (min-width: 480px) {
      padding: 0 2.25rem 1rem 2rem;
    }
  }
`

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
`

export const MobileNav: FC<{ className?: string }> = ({ className, children }) => {
  const [show, toggleShow] = useToggle(false)
  const container = useRef(null)

  useOnClickOutside(container, () => {
    toggleShow(false)
  })

  return show ? (
    <Container ref={container}>
      <Inner>
        <div>
          <Link to="/" title="mStable">
            <LogoImg />
          </Link>
          <MenuButton onClick={toggleShow}>
            <CloseIcon />
          </MenuButton>
        </div>
        {children}
      </Inner>
    </Container>
  ) : (
    <MenuButton className={className} onClick={toggleShow}>
      <MenuIcon />
    </MenuButton>
  )
}
