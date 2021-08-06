import React, { FC } from 'react'
import styled from 'styled-components'
import Arrow from '../images/icons/arrow-circle.svg'

interface Props {
  href: string
  title?: string
  className?: string
}

const Anchor = styled.a`
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
`

const AnchorFlex = styled(Anchor)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Link: FC<Props & { external?: boolean }> = ({ children, className, href, title, external }) => {
  return (
    <Anchor className={className} href={href} title={title} target={(external && '_blank') || undefined} rel="nofollow noopener">
      {children}
    </Anchor>
  )
}

export const ExternalLink: FC<Props> = ({ children, className, href, title }) => {
  return (
    <Link href={href} title={title} className={className} external>
      {children}
    </Link>
  )
}

export const LinkChevron: FC<Props & { external?: boolean }> = ({ children, className, href, title, external }) => {
  return (
    <AnchorFlex className={className} href={href} title={title} target={(external && '_blank') || undefined} rel="nofollow noopener">
      <span>{children}</span>
      <img src={Arrow} />
    </AnchorFlex>
  )
}

export const ExternalLinkChevron: FC<Props> = ({ children, className, href, title }) => {
  return (
    <LinkChevron className={className} href={href} title={title} external>
      {children}
    </LinkChevron>
  )
}
