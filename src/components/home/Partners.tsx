import React, { FC } from 'react'

import styled from 'styled-components'

import OneInch from '../../images/1inch-small.svg'
import Aave from '../../images/aave.svg'
import Argent from '../../images/argent.svg'
import Balancer from '../../images/balancer-small.svg'
import Compound from '../../images/compound.svg'
import Curve from '../../images/curve.svg'
import IntegrationsBackground from '../../images/integrations-background.svg'
import Matcha from '../../images/matcha.png'
import Sablier from '../../images/sablier.svg'
import Uniswap from '../../images/uniswap-small.svg'
import { Colors } from '../../theme'
import { ExternalLink } from '../ExternalLink'
import { FullBleed } from '../layout/FullBleed'
import { Section } from '../layout/Section'

interface PartnerProps {
  title: string
  colour: string
  subtitle: string
  description: string
  image: string
  href: string
}

const Title = styled.h4`
  font-weight: bold;
  font-size: 22px;
  color: white;
  margin: 0;
`

const Subtitle = styled.div`
  font-size: 14px;
  color: ${Colors.whiteTransparent};
  margin: 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;

  img {
    max-width: 50px;
    height: auto;
  }
`

const PartnerLink = styled(ExternalLink)<{ colour: string }>`
  background: black;
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  border: 1px rgba(255, 255, 255, 0.15) solid;
  transition: border-color 1s ease;
  color: white;
  font-weight: normal;
  &:hover {
    border-color: ${({ colour }) => colour};
    color: white;
  }
`

const Partner: FC<PartnerProps> = ({ href, colour, image, subtitle, title, description }) => {
  return (
    <PartnerLink colour={colour} href={href} title={title}>
      <Header>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
        <img src={image} alt={title} />
      </Header>
      <p>{description}</p>
    </PartnerLink>
  )
}

const PartnersGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-rows: 1fr;

  > :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const partnersList: PartnerProps[] = [
  {
    title: 'Aave',
    subtitle: 'Native interest rate',
    colour: '#ab3994',
    description: 'The mStable protocol programmatically lends deposits via Aave’s lending markets',
    href: 'https://aave.com/',
    image: Aave,
  },
  {
    title: 'Argent',
    subtitle: 'Smart wallet',
    colour: '#ff875b',
    description: 'Trade mUSD and MTA on Argent wallet',
    href: 'https://www.argent.xyz/',
    image: Argent,
  },
  {
    title: 'Balancer',
    subtitle: 'Ecosystem liquidity',
    colour: '#fff',
    description: 'mStable leverages Balancer to produce deep liquidity for mStable assets',
    href: 'https://balancer.exchange/',
    image: Balancer,
  },
  {
    title: 'Compound',
    subtitle: 'Native interest rate',
    colour: '#00d395',
    description: 'The mStable protocol programmatically lends deposits via Compound’s lending markets',
    href: 'https://compound.finance/',
    image: Compound,
  },
  {
    title: 'Curve',
    subtitle: 'Optionality and liquidity',
    colour: '#00e5dd',
    description: 'Highly efficient mUSD liquidity',
    href: 'https://www.curve.fi/',
    image: Curve,
  },
  {
    title: 'Matcha',
    subtitle: 'Efficient swaps',
    colour: '#ade57d',
    description: `mStable's SWAP is a source of stablecoin liquidity for the Matcha DEX aggregator`,
    href: 'https://matcha.xyz/',
    image: Matcha,
  },
  {
    title: 'Sablier',
    subtitle: 'Money streaming',
    colour: '#f77b27',
    description: `MTA's emission for investors, team and institutional liquidity providers is programmatic and automated through Sablier contracts`,
    href: 'https://sablier.finance/',
    image: Sablier,
  },
  {
    title: 'Uniswap',
    subtitle: 'Ecosystem liquidity',
    colour: '#ff007a',
    description: 'The mStable protocol leverages Uniswap to produce deep liquidity for mStable assets',
    href: 'https://uniswap.org/',
    image: Uniswap,
  },
  {
    title: '1inch',
    subtitle: 'Efficient swaps',
    colour: '#e61c3f',
    description: `mStable's SWAP is a source of stablecoin liquidity for the 1inch DEX aggregator`,
    href: 'https://1inch.exchange/',
    image: OneInch,
  },
]

export const Partners: FC = () => {
  return (
    <FullBleed background={IntegrationsBackground} dark>
      <Section title="Integrated with leading protocols">
        <PartnersGrid>
          {partnersList.map(({ image, description, title, subtitle, href, colour }) => (
            <Partner key={title} title={title} colour={colour} subtitle={subtitle} description={description} image={image} href={href} />
          ))}
        </PartnersGrid>
      </Section>
    </FullBleed>
  )
}
