import styled from 'styled-components'

import { DHEDGE_APP_LINK } from '../../constants'
import { Card, CardContent, CardHeader } from '../Card'
import { ExternalLink } from '../ExternalLink'
import { Section } from '../layout/Section'
import { Banner } from './Banner'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
            <ExternalLink href={DHEDGE_APP_LINK}>
              <img src="/assets/img/dhedge_logo.svg" alt="dhedge" />
            </ExternalLink>
          </CardHeader>
          <CardContent>
            <p>Create your own vault or find the best asset managers.</p>
          </CardContent>
        </Card>
      </Container>
      <Banner />
    </Section>
  )
}
