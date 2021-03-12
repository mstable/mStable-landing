import React, { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../../theme'

interface Props {
  title?: string
  className?: string
  subtitle?: string
}

const Container = styled.section<Props>`
  margin-bottom: 2rem;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  > * {
    padding: 0 24px;
  }
`

const Header = styled.header`
  margin-bottom: 16px;

  h2 {
    font-size: 2rem;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 32px;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 16px;
    max-width: 30ch;
  }
`

export const Section: FC<Props> = ({ title, subtitle, children, className }) => {
  return (
    <Container className={className}>
      {(title || subtitle) && (
        <Header>
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
        </Header>
      )}
      <div>{children}</div>
    </Container>
  )
}
