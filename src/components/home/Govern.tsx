import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore

import { Section } from '../layout/Section'
import { LinkButton } from '../CTA'

import { Colors } from '../../theme'

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    gap: 2rem;

    button {
      color: ${Colors.neonPink};
      background: ${Colors.neonPinkDark100};

      :hover {
        color: ${Colors.neonPink};
        box-shadow: 0 0 0.25rem ${Colors.neonPink};
      }
    }
  }
`

const Container = styled(Section)`
  background: url('../assets/img/circles.svg') no-repeat;
  background-size: 250% 200%;
  background-position: 50% -2rem;

  @media (min-width: 480px) {
    background-size: 75% 170%;
    background-position: 50% 0;
  }
`

export const Govern: FC = () => {
  return (
    <Container h1="Discuss, vote, govern" h2="Powered by the mStable Governance token: MTA">
      <IconContainer>
        <div>
          <LinkButton external={false} href={'/governance-token-meta'}>
            Learn More
          </LinkButton>
        </div>
      </IconContainer>
    </Container>
  )
}
