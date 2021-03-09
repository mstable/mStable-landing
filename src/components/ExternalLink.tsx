import React, { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../theme'

const Container = styled.a`
  &:hover {
    color: ${Colors.gold};
  }
`

export const ExternalLink: FC<{
  href: string
  title?: string
  className?: string
}> = ({ children, className, href, title }) => {
  return (
    <Container
      className={className}
      href={href}
      title={title}
      target="_blank"
      rel="nofollow noopener"
    >
      {children}
    </Container>
  )
}
