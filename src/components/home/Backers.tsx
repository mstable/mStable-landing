import React, { FC } from 'react'

import styled, { css } from 'styled-components'

import { FullBleed } from '../layout/FullBleed'
import { Section } from '../layout/Section'
import { ExternalLink } from '../ExternalLink'

import Defiance from '../../images/backers/defiance_cap.png'
import DACM from '../../images/backers/dacm.png'
import Alameda from '../../images/backers/alameda.png'
import ThreeArrows from '../../images/backers/three_arrows.png'
import TwitterIcon from '../../images/twitter-light.svg'

interface BackerProps {
  title: string
  image?: string
  colour: string
  href?: string
}

const backersList: BackerProps[] = [
  {
    title: 'DeFiance Capital',
    image: Defiance,
    colour: '#00d395',
    href: 'https://www.defiance.capital/',
  },
  {
    title: 'Alameda Research',
    image: Alameda,
    colour: '#fff',
    href: 'https://www.alameda-research.com/',
  },
  {
    title: 'DACM',
    image: DACM,
    colour: '#ff875b',
    href: 'https://dacm.io/',
  },
  {
    title: 'Three Arrows Capital',
    image: ThreeArrows,
    colour: '#ab3994',
    href: 'https://www.threearrowscap.com/',
  },
  {
    title: 'Anthony Sassano',
    colour: '#ade57d',
    href: 'https://twitter.com/sassal0x',
  },
  {
    title: 'Kain Warwick',
    colour: '#f77b27',
    href: 'https://twitter.com/kaiynne',
  },
  {
    title: 'Eric Conner',
    colour: '#ff007a',
    href: 'https://twitter.com/econoar',
  },
  {
    title: 'Zhuoxun Yin',
    colour: '#e61c3f',
    href: 'https://twitter.com/zhuoxunyin',
  },
  {
    title: 'Andrew Kang',
    colour: '#00e5dd',
    href: 'https://twitter.com/Rewkang',
  },
]

const backerCss = css<{ colour: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  transition: 0.25s ease-out;
  margin: 0.5rem 0;

  > img {
    height: 3.5rem;
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.75rem;
    }
  }

  :hover {
    transform: scale(1.05);
    text-decoration: none;
  }
`

const BackerLink = styled(ExternalLink)<{ colour: string }>`
  ${backerCss}
`

const BackerSpan = styled.span<{ colour: string }>`
  ${backerCss}
`

const BackersGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr;
  margin: 2rem;

  > * {
    :nth-child(-n + 9):nth-child(n + 5) {
      display: none;
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);

    > * {
      :nth-child(-n + 9):nth-child(n + 5) {
        display: inherit;
      }
    }
  }
`

const Container = styled(FullBleed)`
  padding: 5rem 0;

  > * {
    margin-top: 5rem;
  }
`

const Backer: FC<BackerProps> = ({ colour, image, title, href }) => {
  return href ? (
    <BackerLink colour={colour} title={title} href={href}>
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <div>
          <img src={TwitterIcon} />
          {title}
        </div>
      )}
    </BackerLink>
  ) : (
    <BackerSpan colour={colour} title={title}>
      {image ? <img src={image} alt={title} /> : title}
    </BackerSpan>
  )
}

export const Backers: FC = () => {
  return (
    <Container>
      <Section h1="Backed by the best">
        <BackersGrid>
          {backersList.map(({ title, image, colour, href }) => (
            <Backer key={title} title={title} colour={colour} href={href} image={image} />
          ))}
        </BackersGrid>
      </Section>
    </Container>
  )
}
