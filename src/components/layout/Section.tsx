import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  h1?: string | ReactNode
  h2?: string | ReactNode
  h3?: string | ReactNode
  className?: string
}

const Container = styled.section<Props>`
  margin: 2rem 0 4rem 0;
`

const Header = styled.header<Props>`
  padding: 2rem 0 4rem 0;
  text-align: center;

  h1,
  h2 {
    font-weight: normal;
    padding: 0 2rem;
  }

  h1 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    @media (min-width: 400px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    opacity: 0.5;
  }
`

export const Section: FC<Props> = ({ h1, h2, h3, children, className }) => {
  return (
    <Container className={className}>
      {(h1 || h2 || h3) && (
        <Header>
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
        </Header>
      )}
      <div>{children}</div>
    </Container>
  )
}
