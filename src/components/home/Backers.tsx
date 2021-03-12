import React, { FC } from 'react'

import styled from 'styled-components'

import { Colors } from '../../theme'
import { FullBleed } from '../layout/FullBleed'
import { Section } from '../layout/Section'

interface BackerProps {
  title: string
  colour: string
}

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  color: white;
  margin: 0;
`

const BackerLink = styled.span<{ colour: string }>`
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

const Backer: FC<BackerProps> = ({ colour, title }) => {
  return (
    <BackerLink colour={colour} title={title}>
      <Title>{title}</Title>
    </BackerLink>
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
    title: 'Three Arrows Capital',
    colour: '#ab3994',
  },
  {
    title: 'DACM',
    colour: '#ff875b',
  },
  {
    title: 'Alameda Research',
    colour: '#fff',
  },
  {
    title: 'Defiance Capital',
    colour: '#00d395',
  },
  {
    title: 'Decision Tree Capital',
    colour: '#00e5dd',
  },
  {
    title: 'Anthony Sassano',
    colour: '#ade57d',
  },
  {
    title: 'Kain Warwick',
    colour: '#f77b27',
  },
  {
    title: 'Eric Conner',
    colour: '#ff007a',
  },
  {
    title: 'Zhuoxun Yin',
    colour: '#e61c3f',
  },
  {
    title: 'Andrew Kang',
    colour: '#00e5dd',
  },
  {
    title: '...and more',
    colour: '#ff875b',
  },
]

export const Backers: FC = () => {
  return (
    <FullBleed dark>
      <Section title="Backed by the best">
        <BackersGrid>
          {backersList.map(({ title, colour }) => (
            <Backer key={title} title={title} colour={colour} />
          ))}
        </BackersGrid>
      </Section>
    </FullBleed>
  )
}
