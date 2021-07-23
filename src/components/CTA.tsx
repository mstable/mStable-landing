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

  :hover {
    text-decoration: none;
  }

  > :first-child {
    pointer-events: all;
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
      <Button className={className} highlight={highlight}>
        {children}
      </Button>
    </StyledExternalLink>
  )
}
