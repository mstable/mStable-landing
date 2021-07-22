import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

import { ExternalLink } from './ExternalLink'
import { Button } from './Button'
import { Colors } from '../theme'

const StyledExternalLink = styled(ExternalLink)`
  pointer-events: none;
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

export const CTAButton = styled(Button)<{ highlight?: boolean }>`
  font-weight: 500;
  background: ${({ highlight }) => (highlight ? Colors.lightBlue : '#3e4b60')};
  color: white;
  border: none;
  width: 100%;
  transition: transform 0.25s ease-out;
  resize: none;

  &:hover,
  &:focus {
    color: white;
    transform: scale(1.05);
  }
`

export const CTA: FC<ComponentProps<typeof ExternalLink> & { arrow?: boolean }> = ({ arrow, children, className, title, href }) => {
  return (
    <StyledExternalLink className={className} href={href} title={title}>
      {children}
    </StyledExternalLink>
  )
}

export const LinkButton: FC<ComponentProps<typeof ExternalLink> & { highlight?: boolean }> = ({
  children,
  className,
  title,
  href,
  highlight,
}) => {
  return (
    <StyledExternalLink href={href} title={title}>
      <CTAButton className={className} highlight={highlight}>
        {children}
      </CTAButton>
    </StyledExternalLink>
  )
}
