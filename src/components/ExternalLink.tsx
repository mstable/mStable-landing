import React, { FC } from 'react'
import styled from 'styled-components'

const Anchor = styled.a`
  font-weight: 500;
`

export const ExternalLink: FC<{
  href: string
  title?: string
  className?: string
}> = ({ children, className, href, title }) => {
  return (
    <Anchor className={className} href={href} title={title} target="_blank" rel="nofollow noopener">
      {children}
    </Anchor>
  )
}
