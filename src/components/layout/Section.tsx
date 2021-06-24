import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  h1?: string | ReactNode
  h2?: string | ReactNode
  h3?: string | ReactNode
  centre?: boolean
  className?: string
}

const Container = styled.section<Props>`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`

const Header = styled.header<Props>`
  padding: 2rem;
  text-align: ${({ centre }) => (centre ? 'center' : 'inherit')};

  h1 {
    margin: 4rem 0 2rem 0;
    font-size: 2rem;
    font-weight: normal;

    @media (min-width: 400px) {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.95);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 1rem;
    max-width: 50ch;
  }
`

export const Section: FC<Props> = ({ centre, h1, h2, h3, children, className }) => {
  return (
    <Container className={className}>
      {(h1 || h2 || h3) && (
        <Header centre={centre}>
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
        </Header>
      )}
      <div>{children}</div>
    </Container>
  )
}
