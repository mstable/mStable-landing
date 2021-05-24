import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { ExternalLink } from './ExternalLink'

const Icon = styled.img`
  width: 100px;
  height: auto;
`

const Links = styled.div`
  display: flex;

  ${ExternalLink as any} {
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
    color: white;
  }
`

const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 1rem 2rem;
`

const Content = styled.div``

const gradientShift = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

const Container = styled.div`
  background: linear-gradient(-130deg, #201d26, #d49346, #4255cd, #201d26);
  background-size: 200% 200%;
  animation: ${gradientShift} 12s linear infinite;
  padding: 0.1rem;
  border-radius: 1rem;

  > div {
    border-radius: 1rem;
    background: radial-gradient(farthest-corner at 10% 10%, #181b21, black);
    padding: 1rem;
    overflow: hidden;
  }
`

export const Asset: FC<{
  address: string
  description: string
  symbol: string
  icon: string
}> = ({ icon, symbol, address, children, description }) => {
  const isMusd = symbol === 'mUSD'
  return (
    <Container>
      <div>
        <Header>
          <Icon src={icon} alt={symbol} />
          <HeaderGroup>
            <h3>{symbol}</h3>
            <p>{description}</p>
            <Links>
              <ExternalLink href={`https://etherscan.io/token/${address}`}>Etherscan</ExternalLink>
              {isMusd && (
                <>
                  <span>|</span>
                  <ExternalLink href={`https://www.duneanalytics.com/alsco77/mstable_5`}>Dune Analytics</ExternalLink>
                </>
              )}
            </Links>
          </HeaderGroup>
        </Header>
        <Content>{children}</Content>
      </div>
    </Container>
  )
}
