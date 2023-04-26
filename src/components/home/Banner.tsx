import styled from 'styled-components'

import { LinkButton } from '../CTA'
import { ExternalLink } from '../ExternalLink'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  ${({ theme }) => theme.mixins.sectionSpacing};

  @media (max-width: 400px) {
    top: 0;
    left: 0;
    width: 1;
  }
`

const Modal = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: rgba(44, 48, 78, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 1rem;

  > p {
    text-align: center;
  }
`

export const Banner = () => {
  return (
    <Container>
      <Modal>
        <p>
          We are delighted to announce that mStable has been acquired by <ExternalLink href="https://app.dhedge.org/">dHEDGE</ExternalLink>,
          a decentralized asset management platform.
        </p>
        <p>
          This strategic acquisition marks a significant milestone for mStable, positioning us to become a leading yield vault aggregator
          across multiple chains and broaden our reach within the DeFi ecosystem.
        </p>
        <LinkButton highlight href="https://forum.mstable.org/t/dhedge-acquisition-update/1024">
          Read More
        </LinkButton>
      </Modal>
    </Container>
  )
}
