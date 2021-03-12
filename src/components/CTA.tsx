import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

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

export const AppCTAButton = styled(Button)`
  font-weight: normal;
  background: ${Colors.blue};
  color: white;
  border: none;
  width: 100%;
  text-shadow: rgba(0, 75, 124, 0.4) 0 1px 1px;
  box-shadow: rgba(0, 153, 255, 0.4) 0 6px 20px;

  &:hover {
    color: white;
    background: ${Colors.gold};
    text-shadow: rgba(124, 95, 0, 0.4) 0 1px 1px;
    box-shadow: rgba(255, 197, 0, 0.4) 0 6px 20px;
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
    <ExternalLink href={href} title={title}>
      <AppCTAButton className={className}>
        <img src={Ether} alt={title} />
        <div>{children}</div>
      </AppCTAButton>
    </ExternalLink>
  )
}
