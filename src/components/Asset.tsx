import React, { FC } from 'react'
import styled from 'styled-components'
import { ExternalLink } from './ExternalLink'

const Icon = styled.img`
  width: 100px;
  height: auto;
`

const Links = styled.div`
  display: flex;

  ${ExternalLink} {
    display: block;
    font-weight: normal;
    font-size: 14px;
  }

  span {
    margin: 0 0.5rem;
  }
`

const HeaderGroup = styled.div`
  h3 {
    font-size: 32px;
    margin-bottom: 0;
  }
`

const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;
`

const Content = styled.div``

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 6px;
  overflow: hidden;
`

export const Asset: FC<{
  address: string
  description: string
  symbol: string
  icon: string
}> = ({ icon, symbol, address, children, description }) => {
  return (
    <Container>
      <Header>
        <Icon src={icon} alt={symbol} />
        <HeaderGroup>
          <h3>{symbol}</h3>
          <p>{description}</p>
          <Links>
            <ExternalLink href={`https://etherscan.io/token/${address}`}>
              Etherscan
            </ExternalLink>
            <span>|</span>
            <ExternalLink
              href={`https://www.duneanalytics.com/alsco77/mstable_5`}
            >
              Dune Analytics
            </ExternalLink>
          </Links>
        </HeaderGroup>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}
