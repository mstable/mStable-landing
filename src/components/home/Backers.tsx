import React, { FC } from 'react'

import styled, { css } from 'styled-components'

import { FullBleed } from '../layout/FullBleed'
import { Section } from '../layout/Section'
import { ExternalLink } from '../ExternalLink'

interface BackerProps {
  title: string
  colour: string
  href?: string
}

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  color: white;
  margin: 0;
`

const backerCss = css<{ colour: string }>`
  background: black;
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  border: 1px rgba(255, 255, 255, 0.15) solid;
  transition: border-color 1s ease;
  color: white;
  font-weight: normal;
  text-align: center;
  &:hover {
    border-color: ${({ colour }) => colour};
    color: white;
  }
`

const BackerLink = styled(ExternalLink)<{ colour: string }>`
  ${backerCss}
`

const BackerSpan = styled.span<{ colour: string }>`
  ${backerCss}
`

const Backer: FC<BackerProps> = ({ colour, title, href }) => {
  return href ? (
    <BackerLink colour={colour} title={title} href={href}>
      <Title>{title}</Title>
    </BackerLink>
  ) : (
    <BackerSpan colour={colour} title={title}>
      <Title>{title}</Title>
    </BackerSpan>
  )
}

const BackersGrid = styled.div`
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

const backersList: BackerProps[] = [
  {
    title: 'DACM',
    colour: '#ff875b',
    href: 'https://dacm.io/',
  },
  {
    title: 'Three Arrows Capital',
    colour: '#ab3994',
    href: 'https://www.threearrowscap.com/',
  },
  {
    title: 'Alameda Research',
    colour: '#fff',
    href: 'https://www.alameda-research.com/',
  },
  {
    title: 'DeFiance Capital',
    colour: '#00d395',
    href: 'https://www.defiance.capital/',
  },
  {
    title: 'Decision Tree Capital',
    colour: '#00e5dd',
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
  {
    title: '...and more',
    colour: '#ff875b',
  },
]

export const Backers: FC = () => {
  return (
    <FullBleed dark>
      <Section h2="Backed by the best">
        <BackersGrid>
          {backersList.map(({ title, colour, href }) => (
            <Backer key={title} title={title} colour={colour} href={href} />
          ))}
        </BackersGrid>
      </Section>
    </FullBleed>
  )
}
