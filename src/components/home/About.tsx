import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-hook-inview'

import { Section } from '../layout/Section'
import { FullBleed } from '../layout/FullBleed'
import { CTA } from '../CTA'
import { ExternalLink } from '../ExternalLink'
import { Link } from 'react-router-dom'

const ItemContainer = styled.div<{ inView: boolean }>`
  position: relative;
  transition: all 1s ease;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform-origin: center bottom;
  transform: ${({ inView }) => `scale(${inView ? 1 : 0.8}) translateY(${inView ? 0 : 20}px)`};
  margin-bottom: 2rem;

  h4 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  @media (min-width: 520px) {
    &:nth-child(2) {
      transition-delay: 250ms;
    }
    &:nth-child(3) {
      transition-delay: 500ms;
    }
    &:nth-child(4) {
      transition-delay: 750ms;
    }
  }
`

const Item: FC<{ href: string; title: string; description: string | ReactNode }> = ({ href, description, title }) => {
  const [ref, inView] = useInView({
    unobserveOnEnter: true,
    threshold: 1,
  })
  return (
    <ItemContainer ref={ref} inView={inView}>
      <ExternalLink href={href}>
        <h4>{title}</h4>
      </ExternalLink>
      <p>{description}</p>
    </ItemContainer>
  )
}

const Grid = styled.div`
  margin: 2rem 0;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
  }
`

const Container = styled(Section)`
  border-radius: 1rem;
  background: radial-gradient(farthest-corner at 10% 10%, #181b21, black);
  padding: 2rem;
  overflow: hidden;

  @media (min-width: 520px) {
    margin: 2rem;
  }
`

export const About: FC = () => {
  return (
    <FullBleed dark={false}>
      <Container h3="mStable combines lending income with trading fees to produce higher yielding assets.">
        <Grid>
          <Item href="https://app.mstable.org/#/musd/forge/swap" title="SWAP" description="Efficiently swap pegged crypto assets" />
          <Item href="https://app.mstable.org/#/musd/save" title="SAVE" description="High yield savings account for anyone, anywhere" />
          <Item
            href="https://app.mstable.org/#/musd/pools"
            title="POOLS"
            description={
              <>
                All contributors can earn <Link to="/governance-token-meta">MTA</Link> in mStable's native liquidity pools
              </>
            }
          />
          <Item href="https://governance.mstable.org" title="GOVERN" description="Governed by a global community" />
        </Grid>
        <p>
          <CTA arrow href="https://cryptocurrencyjobs.co/startups/mstable/">
            We’re hiring!
          </CTA>
        </p>
        <p>
          <CTA arrow href="https://docs.mstable.org">
            Protocol docs
          </CTA>
        </p>
      </Container>
    </FullBleed>
  )
}
