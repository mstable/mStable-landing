import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore

import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { LinkButton } from '../CTA'

import { Colors } from '../../theme'
import { MTA_BUY_LINK } from '../../constants'

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

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

const Container = styled(FullBleed)`
  padding: 5rem 0;

  > div {
    background: url('../assets/img/circles.svg') no-repeat;
    background-size: 250% 200%;
    background-position: 50% -2rem;
    padding: 2rem;
  }

  @media (min-width: 480px) {
    > div {
      background-size: 150% 150%;
      background-position: 50% 3rem;
    }
  }

  > * {
    margin-top: 5rem;
  }
`

export const Govern: FC = () => {
  return (
    <Container>
      <div>
        <Section h1="Discuss, vote, govern" h2="Powered by the mStable Governance token: MTA" />
        <IconContainer>
          <div>
            <LinkButton href={'/governance-token-meta'}>Learn More</LinkButton>
            <LinkButton href={MTA_BUY_LINK} highlight>
              Buy MTA
            </LinkButton>
          </div>
        </IconContainer>
      </div>
    </Container>
  )
}
