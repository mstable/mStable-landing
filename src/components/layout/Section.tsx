import styled from 'styled-components'

import type { FC, ReactNode } from 'react'

interface Props {
  h1?: string | ReactNode
  h2?: string | ReactNode
  h3?: string | ReactNode
  className?: string
}

const Container = styled.section<Props>`
  ${({ theme }) => theme.mixins.defaultSpacing};
`

const Header = styled.header<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  text-align: center;

  h1,
  h2 {
    padding: 0 2rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.75rem;
    @media (min-width: 400px) {
      font-size: 2rem;
    }
  }

  h1:not(:last-child) {
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: normal;
    font-size: 1rem;
    opacity: 0.5;

    @media (min-width: 400px) {
      font-size: 1.125rem;
    }
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
