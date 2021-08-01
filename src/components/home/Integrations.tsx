import React, { FC } from 'react'
import styled from 'styled-components'

import OneInch from '../../images/integrations/1inch.svg'
import Aave from '../../images/integrations/aave.svg'
import Argent from '../../images/integrations/argent.svg'
import Balancer from '../../images/integrations/balancer.svg'
import Compound from '../../images/integrations/compound.svg'
import Matcha from '../../images/integrations/matcha.png'
import Curve from '../../images/integrations/curve.png'
import Sablier from '../../images/integrations/sablier.svg'
import Uniswap from '../../images/integrations/uniswap.svg'
import Polygon from '../../images/integrations/polygon.svg'

import { ExternalLink } from '../ExternalLink'
import { Section } from '../layout/Section'

interface Props {
  title: string
  colour: string
  image: string
  href: string
}

const partnersList: Props[] = [
  {
    title: 'Aave',
    colour: '#ab3994',
    href: 'https://aave.com/',
    image: Aave,
  },
  {
    title: 'Argent',
    colour: '#ff875b',
    href: 'https://www.argent.xyz/',
    image: Argent,
  },
  {
    title: 'Balancer',
    colour: '#fff',
    href: 'https://balancer.exchange/',
    image: Balancer,
  },
  {
    title: 'Compound',
    colour: '#00d395',
    href: 'https://compound.finance/',
    image: Compound,
  },
  {
    title: 'Curve',
    colour: '#da6fda',
    href: 'https://www.curve.fi/',
    image: Curve,
  },
  {
    title: 'Matcha',
    colour: '#ade57d',
    href: 'https://matcha.xyz/',
    image: Matcha,
  },
  {
    title: 'Sablier',
    colour: '#f77b27',
    href: 'https://sablier.finance/',
    image: Sablier,
  },
  {
    title: 'Uniswap',
    colour: '#ff007a',
    href: 'https://uniswap.org/',
    image: Uniswap,
  },
  {
    title: '1inch',
    colour: '#59f',
    href: 'https://1inch.exchange/',
    image: OneInch,
  },
  {
    title: 'Polygon',
    colour: '#8248e5',
    href: 'https://polygon.technology/',
    image: Polygon,
  },
]

const partnerRows = [
  partnersList.filter((_, i) => i < 2),
  partnersList.filter((_, i) => i >= 2 && i < 5),
  partnersList.filter((_, i) => i >= 5 && i < 7),
  partnersList.filter((_, i) => i >= 7 && i < 10),
]

const PartnerLink = styled(ExternalLink)<{ colour: string; offset: number }>`
  @keyframes ${({ colour }) => `scale-${colour.substr(1, 4)}`} {
    0% {
      transform: scale(0.833);
    }
    50% {
      transform: ${({ offset }) => `scale(${offset / 50 + 1})`};
    }
    100% {
      transform: scale(0.833);
    }
  }

  div {
    display: flex;
  }

  img {
    border-radius: 1rem;
    padding: 0.5rem;
    border: 2px rgba(255, 255, 255, 0.15) solid;
    transition: border-color 0.5s ease-out;
    animation: ${({ colour, offset }) => `scale-${colour.substr(1, 4)} ${offset * 2 + 10}s infinite ease-out`};
  }

  img:hover {
    border-color: ${({ colour }) => colour};
    color: white;
  }
`

const Icons = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 0.25rem 0;
    display: flex;
    justify-content: space-around;

    @media (min-width: 600px) {
      margin: -0.5rem 0;
    }
  }

  @media (min-width: 480px) {
    padding: 2rem 0;
  }

  > div:nth-child(1) {
    padding: 0 10%;

    @media (min-width: 600px) {
      padding: 0 20%;
    }
  }

  > div:nth-child(2) {
    @media (min-width: 600px) {
      padding: 0 12.5%;
    }
  }

  > div:nth-child(3) {
    padding: 0 10%;

    @media (min-width: 600px) {
      padding: 0 25%;
    }
  }

  > div:nth-child(4) {
    @media (min-width: 600px) {
      padding: 0 2.5%;
    }
  }
`

const Integration: FC<Props> = ({ href, colour, image, title }) => {
  const offset = Math.floor(Math.random() * 3)
  console.log(offset)
  return (
    <PartnerLink colour={colour} href={href} title={title} offset={offset}>
      <img src={image} alt={title} />
    </PartnerLink>
  )
}

export const Integrations: FC = () => (
  <Section h1="Open & decentralised" h2="Integrated with leading protocols">
    <Icons>
      {partnerRows.map((row) => (
        <div>
          {row.map(({ image, title, href, colour }) => (
            <Integration key={title} title={title} colour={colour} image={image} href={href} />
          ))}
        </div>
      ))}
    </Icons>
  </Section>
)
