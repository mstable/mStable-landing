import React, { ComponentProps, FC } from 'react'
import styled, { css } from 'styled-components'

import { ExternalLink, Link } from './ExternalLink'
import { Button } from './Button'

const LinkDefaults = css`
  pointer-events: none;
  user-select: none;

  :hover {
    text-decoration: none;
  }

  > :first-child {
    pointer-events: all;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  ${LinkDefaults}
`

const StyledLink = styled(Link)`
  ${LinkDefaults}
`

export const CTA: FC<ComponentProps<typeof ExternalLink> & { arrow?: boolean }> = ({ arrow, children, className, title, href }) => {
  return (
    <ExternalLink className={className} href={href} title={title}>
      {children}
    </ExternalLink>
  )
}

export const LinkButton: FC<ComponentProps<typeof ExternalLink> & { highlight?: boolean; external?: boolean }> = ({
  children,
  className,
  title,
  href,
  highlight,
  external = true,
}) => {
  return external ? (
    <StyledExternalLink href={href} title={title}>
      <Button className={className} highlight={highlight}>
        {children}
      </Button>
    </StyledExternalLink>
  ) : (
    <StyledLink href={href} title={title}>
      <Button className={className} highlight={highlight}>
        {children}
      </Button>
    </StyledLink>
  )
}
