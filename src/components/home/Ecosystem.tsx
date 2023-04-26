import styled from 'styled-components'

import { Card, CardContent, CardHeader } from '../Card'
import { ExternalLink } from '../ExternalLink'
import { Section } from '../layout/Section'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  img {
    height: 3rem;
  }
`

export const Ecosystem = () => {
  return (
    <Section h1="Ecosystem" h2="Discover our partners">
      <Container>
        <Card>
          <CardHeader>
            <ExternalLink href="https://toros.finance/">
              <img src="/assets/img/toros_logo.svg" alt="toros" />
            </ExternalLink>
          </CardHeader>
          <CardContent>
            <p>Discover automated strategies on toros.finance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ExternalLink href="https://app.dhedge.org/#">
              <img src="/assets/img/dhedge_logo.svg" alt="dhedge" />
            </ExternalLink>
          </CardHeader>
          <CardContent>
            <p>Create your own vault of find the best asset managers.</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
