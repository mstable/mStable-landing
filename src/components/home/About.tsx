import React, { FC, ReactNode, useState } from 'react'
// @ts-ignore
import CountUp from 'react-countup-v2'

import { Section } from '../layout/Section'
import styled from 'styled-components'
import { ExternalLink } from '../ExternalLink'
import { LinkButton } from '../CTA'
import { Colors, Constants } from '../../theme'

interface Product {
  id: string
  name: string
  icon: ReactNode
  content: ReactNode
  highlight: string
}

const StyledCountUp = styled(CountUp)`
  font-family: 'DM Mono', monospace;
  font-size: 1.25rem;
  padding-right: 0.5rem;
`

const apyOptions = { decimalPlaces: 2, suffix: '%' }

const AMMIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.76345 6.37305L10.5714 6.79179L11.8057 1.50128L11.8231 1.49031L11.8089 1.48711L11.8126 1.47339L11.7952 1.48391L6.48505 0.262878L6.06585 2.07088L8.34928 2.55865L1.0094 7.13556L2.01283 8.74471L9.30791 4.19522L8.76345 6.37305Z"
      fill="#F9F1E9"
    />
    <path
      d="M21.6407 5.95337C19.9042 5.95314 18.2052 6.45842 16.7511 7.40755C15.297 8.35667 14.1506 9.70859 13.4519 11.2983C12.8552 11.1842 12.2491 11.1268 11.6416 11.1269C6.34424 11.1269 2.05029 15.4213 2.05029 20.7182C2.05029 26.0151 6.34424 30.3086 11.6416 30.3086C15.8638 30.3086 19.4487 27.5803 20.7296 23.7911C21.0323 23.8216 21.3364 23.8368 21.6407 23.8368C26.5778 23.8368 30.5829 19.8331 30.5829 14.8946C30.5829 9.95611 26.5792 5.95337 21.6407 5.95337ZM25.3778 18.6327C24.8882 19.125 24.3058 19.5153 23.6643 19.781C23.0228 20.0467 22.335 20.1825 21.6407 20.1806C21.4981 20.1806 21.3568 20.1746 21.2165 20.1637C21.1299 18.6578 20.6891 17.1936 19.9299 15.8903C19.1708 14.5869 18.1147 13.4811 16.8476 12.6629C17.1737 11.9632 17.6491 11.3435 18.2404 10.8473C18.8316 10.351 19.5244 9.99024 20.2699 9.79035C21.0155 9.59045 21.7958 9.55626 22.5561 9.69018C23.3163 9.8241 24.0379 10.1229 24.6703 10.5655C25.3027 11.0082 25.8305 11.5839 26.2166 12.2523C26.6027 12.9208 26.8377 13.6656 26.9051 14.4346C26.9725 15.2036 26.8708 15.978 26.6069 16.7034C26.3431 17.4288 25.9235 18.0867 25.3778 18.6327Z"
      fill="#F9F1E9"
    />
  </svg>
)

const SaveIcon = (
  <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 16H21V18H0V16Z" fill="#B1ECFF" />
    <path d="M19.0909 0H21C21 12.8571 10.8182 18 0 18V16C15.7818 16 19.303 5.35714 19.0909 0Z" fill="#B1ECFF" />
  </svg>
)

const StkMTAIcon = (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0012 13.7744L19.7763 19.5874L21.7314 16.0596L14.7029 10.6045L17.4293 7.40455L9.31956 0.55426L0.61145 10.8299L8.66265 17.6916L12.0012 13.7744ZM5.88825 10.4016L9.75934 5.83289L12.1342 7.83929L8.24162 12.4057L5.88825 10.4016Z"
      fill="#F9E9F4"
    />
    <path d="M25 22H1V25H25V22Z" fill="#F9E9F4" />
  </svg>
)

const ProductContent = styled.div`
  margin: 6rem 0 8rem 0;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    span {
      color: ${Colors.neonBlue};
      &.tilde {
        color: rgba(255, 255, 255, 0.25);
        padding-left: 0.5rem;
      }
    }
  }
  p {
    margin-bottom: 2rem;
    span {
      opacity: 0.5;
    }
    span:last-child {
      opacity: 0.3;
    }
  }
  > div:last-child {
    display: flex;
    align-items: center;
    > * {
      margin-right: 2rem;
    }
    button {
      color: ${Colors.neonBlue};
      background: ${Colors.neonBlueTransparent};
    }
    a {
      color: ${Colors.whiteTransparent};
    }
  }
`

const Save: FC = () => (
  <ProductContent>
    <h3>High yielding savings accounts.</h3>
    <h4>
      Earn <span className="tilde">~</span>
      <StyledCountUp options={apyOptions} endVal={7.23} /> on stablecoins and <span className="tilde">~</span>
      <StyledCountUp options={apyOptions} endVal={3.25} /> on BTC.
    </h4>
    <p>
      <span>Powered by the mStable AMM.</span> <span>Current APY is not reflective of future rates.</span>
    </p>
    <div>
      <ExternalLink href="">Docs</ExternalLink>
      <ExternalLink href="">Learn How</ExternalLink>
      <LinkButton href="" highlight>
        Use Save
      </LinkButton>
    </div>
  </ProductContent>
)

const AMM: FC = () => (
  <ProductContent>
    <h3>Low slippage, low fees.</h3>
    <h4>Token swaps and meta-assets – backed by same-base assets.</h4>
    <p>
      <span>Powered by the mStable AMM.</span> <span>Current APY is not reflective of future rates.</span>
    </p>
    <div>
      <ExternalLink href="">Docs</ExternalLink>
      <ExternalLink href="">Learn How</ExternalLink>
      <LinkButton href="" highlight>
        Use Forge
      </LinkButton>
    </div>
  </ProductContent>
)

const Stake: FC = () => (
  <ProductContent>
    <h3>Discuss, vote, govern.</h3>
    <h4>stkMTA is a composable, yield-bearing asset backed by MTA.</h4>
    <p>
      <span>Powered by the mStable AMM.</span> <span>Current APY is not reflective of future rates.</span>
    </p>
    <div>
      <ExternalLink href="">Docs</ExternalLink>
      <ExternalLink href="">Learn How</ExternalLink>
      <LinkButton href="" highlight>
        Use Governance
      </LinkButton>
    </div>
  </ProductContent>
)

const PRODUCTS: Product[] = [
  {
    id: 'amm',
    name: 'mStable AMM',
    icon: AMMIcon,
    highlight: '#F9F1E9',
    content: <AMM />,
  },
  {
    id: 'save',
    name: 'Save',
    icon: SaveIcon,
    highlight: '#B1ECFF',
    content: <Save />,
  },
  {
    id: 'stake',
    name: 'stkMTA',
    icon: StkMTAIcon,
    highlight: '#F9E9F4',
    content: <Stake />,
  },
]

const TabButton = styled.button<{ active: boolean; highlight: string }>`
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ highlight }) => highlight};
  padding: 0 1rem 0.75rem 1rem;
  border-bottom: 2px ${({ active, highlight }) => (active ? highlight : 'rgba(255, 255, 255, 0.2)')} solid;
  transition: border-bottom-color 0.8s ease;
  flex-basis: calc(33%);
  font-size: 1.5rem;
  font-weight: 600;

  &:hover {
    border-bottom-color: ${({ highlight }) => highlight};
  }

  > :first-child {
    margin-right: 0.5rem;
  }
`

const Products = styled.div`
  margin: 3.5rem 0 0;

  > :first-child {
    display: flex;
    justify-content: center;
  }

  > :last-child {
    display: flex;
    justify-content: space-between;
  }
`

export const About: FC = () => {
  const [productIdx, setProductIdx] = useState(1)
  return (
    <Section h1="Explore our products">
      <Products>
        <div>
          {PRODUCTS.map((p, idx) => (
            <TabButton
              key={p.id}
              active={idx === productIdx}
              highlight={p.highlight}
              onClick={() => {
                setProductIdx(idx)
              }}
            >
              {p.icon}
              <div>{p.name}</div>
            </TabButton>
          ))}
        </div>
        <div>{PRODUCTS[productIdx].content}</div>
      </Products>
    </Section>
  )
}
