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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: 16px;
  border-radius: 3px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
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
      <Section title="Secure, non-custodial contracts">
        <TwoColumns>
          <Header>
            <p>Smart contract security is mStable’s first priority.</p>
            <p>
              The mStable protocol was fully audited by Consensys Diligence and
              no critical bugs were found.
            </p>
          </Header>
          <div />
        </TwoColumns>
        <TwoColumns>
          <Box>
            <div>
              <h3>Consensys Audit</h3>
              <Quote>
                <img src={QuoteImg} alt="Quote" />
                <p>
                  Code quality is high and the code is well-documented. Test
                  coverage is outstanding with near-100% branch coverage. The
                  code adheres to best practices and does not contain trivial
                  bugs.
                </p>
              </Quote>
            </div>
            <Links>
              <CTA
                arrow
                href="https://consensys.net/diligence/audits/2020/07/mstable-1.1/"
              >
                Read the audit
              </CTA>
              <img src={Consensys} alt="Consensys" />
            </Links>
          </Box>
          <Box>
            <div>
              <h3>Bug Bounty Program</h3>
              <p>
                An open reward pool for discovering and reporting
                vulnerabilities in mStable is ongoing, with rewards of up to
                US$25,000.
              </p>
            </div>
            <Links>
              <CTA
                arrow
                href="https://docs.mstable.org/protocol/security/mstable-bug-bounty"
              >
                Learn More
              </CTA>
            </Links>
          </Box>
        </TwoColumns>
      </Section>
    </FullBleed>
  )
}
