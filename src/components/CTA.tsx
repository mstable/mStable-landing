import React, { ComponentProps, FC } from 'react'
import styled, { keyframes } from 'styled-components'

import { ExternalLink } from './ExternalLink'
import { Colors } from '../theme'
import Ether from '../images/ether-logo.svg'
import { Button } from './Button'

const StyledExternalLink = styled(ExternalLink)<{ arrow?: boolean }>`
  &:before {
    // Right arrow and nbsp
    content: ${({ arrow }) => (arrow ? '"\\2794\\a0"' : 'none')};
  }
`

const AppCTAExternalLink = styled(ExternalLink)`
  pointer-events: none;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;
  > :first-child {
    pointer-events: all;
    width: auto;
    button {
      width: auto;
    }
  }
`

const animation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

export const AppCTAButton = styled(Button)`
  font-weight: 600;

  background: linear-gradient(-45deg, #ffb568, #9852fa, #00ade7, #252553);
  background-size: 400% 400%;
  animation: ${animation} 12s linear infinite;

  color: white;
  border: none;
  width: 100%;

  text-shadow: rgba(0, 75, 124, 0.4) 0 1px 1px;
  box-shadow: rgba(0, 153, 255, 0.6) 0 4px 24px;
  transition: transform 0.8s ease;

  &:hover,
  &:focus {
    color: white;
    transform: scale(1.1);
  }
`

export const CTA: FC<ComponentProps<typeof ExternalLink> & { arrow?: boolean }> = ({ arrow, children, className, title, href }) => {
  return (
    <StyledExternalLink className={className} href={href} title={title} arrow={arrow}>
      {children}
    </StyledExternalLink>
  )
}

export const AppCTA: FC<ComponentProps<typeof ExternalLink>> = ({ children, className, title, href }) => {
  return (
    <AppCTAExternalLink href={href} title={title}>
      <AppCTAButton className={className}>
        <img src={Ether} alt={title} />
        <div>{children}</div>
      </AppCTAButton>
    </AppCTAExternalLink>
  )
}
