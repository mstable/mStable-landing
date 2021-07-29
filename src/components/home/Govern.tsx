import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore
import ReactCountUp from 'react-countup-v2'
import { useInView } from 'react-hook-inview'
import Skeleton from 'react-loading-skeleton'

import Musd from '../../images/musd.svg'
import Mbtc from '../../images/mbtc.svg'
import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { LinkButton } from '../CTA'

import { TwoColumns } from '../layout/Gridd'
import { toK, toK2 } from '../../utils'
import { Totals } from './Totals'
import { Supply } from './Supply'
import { Asset } from '../Asset'
import { Colors } from '../../theme'
import { useData } from './DataProvider'
import GovernMTA from '../../images/govern.svg'
import MTA from '../../images/mstable-m.svg'
import { MTA_BUY_LINK } from '../../constants'

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  /* height: 6rem; */

  button {
    color: ${Colors.neonPink};
    background: ${Colors.neonPinkDark};
    margin: 2rem;

    :hover {
      color: ${Colors.neonPink};
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
          <LinkButton href={MTA_BUY_LINK} highlight>
            Buy MTA
          </LinkButton>
        </IconContainer>
      </div>
    </Container>
  )
}
