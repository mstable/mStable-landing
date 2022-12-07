import styled from 'styled-components'

import Metavault from '../../images/integrations/metavault.svg'
import { Colors } from '../../theme'
import { LinkButton } from '../CTA'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const Border = styled.div`
  position: relative;
  background: linear-gradient(
    125deg,
    ${Colors.neonPurpleTransparent} 0%,
    ${Colors.neonOrangeTransparent} 25%,
    ${Colors.neonBlueTransparent} 50%,
    ${Colors.neonPinkTransparent} 75%
  );
  background-size: 100%;
  border-radius: 1rem;
  width: 400px;
  height: 60px;
`

const Inner = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  background: ${Colors.spaceBlue};
  border-radius: inherit;
`

const Logo = styled.img`
  height: 42px;
  width: 42px;
`

export const Banner = () => {
  return (
    <Container>
      <Border>
        <Inner>
          <Logo src={Metavault} />
          Meta Vaults are now live!
          <LinkButton external highlight href="https://yield.mstable.org">
            Use App
          </LinkButton>
        </Inner>
      </Border>
    </Container>
  )
}
