import styled from 'styled-components'

import { Section } from '../layout/Section'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 416px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  li {
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 0.5rem;
  }
`

export const Roadmap = () => {
  return (
    <Section h1="Roadmap" h2="Have a look at the future of mStable">
      <Container>
        <div>
          <h3>Phase 1 - Increased Focus</h3>
          <ul>
            <li>High yield vaults on Optimism</li>
            <li>MTA liquidity on Velodrome</li>
            <li>MTA buy-back and burn</li>
            <li>Long term support withdrawals</li>
          </ul>
        </div>
        <div>
          <h3>Phase 2 - Flatcoin</h3>
          <ul>
            <li>Flatcoin with no de-peg risk</li>
            <li>More info soon</li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}
