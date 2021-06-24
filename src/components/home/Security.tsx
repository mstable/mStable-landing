import React, { FC } from 'react'
import styled from 'styled-components'

import Consensys from '../../images/consensys.svg'
import QuoteImg from '../../images/quote.svg'
import { Section } from '../layout/Section'
import { TwoColumns } from '../layout/Grid'
import { FullBleed } from '../layout/FullBleed'
import { CTA } from '../CTA'

const Header = styled.div`
  margin-bottom: 32px;
`

const Columns = styled(TwoColumns)`
  padding: 0 2rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: radial-gradient(farthest-corner at 10% 10%, #181b21, black);

  @media (min-width: 400px) {
    margin: 0 2rem;
  }
`

const Quote = styled.blockquote`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  img {
    flex-shrink: 0;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-transform: uppercase;
`

export const Security: FC = () => {
  return (
    <FullBleed>
      <Section h1="Secure, non-custodial contracts">
        <Columns>
          <Header>
            <p>Smart contract security is mStable’s first priority.</p>
            <p>The mStable protocol was fully audited by Consensys Diligence and no critical bugs were found.</p>
          </Header>
          <div />
        </Columns>
        <TwoColumns>
          <Box>
            <div>
              <h3>Consensys Audit</h3>
              <Quote>
                <img src={QuoteImg} alt="Quote" />
                <p>
                  Code quality is high and the code is well-documented. Test coverage is outstanding with near-100% branch coverage. The
                  code adheres to best practices and does not contain trivial bugs.
                </p>
              </Quote>
            </div>
            <Links>
              <CTA arrow href="https://consensys.net/diligence/audits/2020/07/mstable-1.1/">
                Read the audit
              </CTA>
              <img src={Consensys} alt="Consensys" />
            </Links>
          </Box>
          <Box>
            <div>
              <h3>Bug Bounty Program</h3>
              <p>
                An open reward pool for discovering and reporting vulnerabilities in mStable is ongoing, with rewards of up to US$50,000.
              </p>
            </div>
            <Links>
              <CTA arrow href="https://immunefi.com/bounty/mstable/">
                Learn More
              </CTA>
            </Links>
          </Box>
        </TwoColumns>
      </Section>
    </FullBleed>
  )
}
