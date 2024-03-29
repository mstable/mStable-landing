import styled from 'styled-components'

import { DHEDGE_APP_LINK } from '../../constants'
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
  backdrop-filter: blur(2px);

  > p {
    text-align: center;
  }
`

export const Banner = () => {
  return (
    <Container>
      <Modal>
        <p>
          We are delighted to announce that mStable has been acquired by <ExternalLink href={DHEDGE_APP_LINK}>dHEDGE</ExternalLink>.
          This strategic acquisition marks a significant milestone for mStable.
        </p>
        <LinkButton
          highlight
          href="https://medium.com/mstable/mstable-acquisition-completed-by-dhedge-the-next-chapter-of-defi-yield-vaults-begins-79a326157132"
        >
          Read More
        </LinkButton>
      </Modal>
    </Container>
  )
}
