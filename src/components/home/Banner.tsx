import styled from 'styled-components'

import { ReactComponent as WarningIcon } from '../../images/icons/warning.svg'
import { Button } from '../Button'

const Container = styled.div`
  /* position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 4rem 1rem;

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
  align-items: flex-start;
  gap: 1rem;
  background-color: rgba(44, 48, 78, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 1rem;
  border: 1px solid #fff6a1;
`

export const Banner = () => {
  return (
    <Container>
      <Modal>
        <WarningIcon />
        <p>
          mStable is sunsetting its entire product line, earning interest through the protocol has been disabled and the project’s smart
          contracts are no longer operated by the mStableDAO.
        </p>
        <p>It is strongly advised to withdraw all liquidity positions from the protocol. Read more in the official announcement.</p>
        <Button highlight>Read More</Button>
      </Modal>
    </Container>
  )
}
