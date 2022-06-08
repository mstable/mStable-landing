import React, { FC, ReactNode } from 'react'
// @ts-ignore

import { Section } from '../layout/Section'
import styled from 'styled-components'
import { Colors } from '../../theme'
import { LinkButton } from '../CTA'

interface Product {
  key: string
  title: string
  tagline: string
  icon: ReactNode
  hue: string
  buttonTitle: string
  buttonBg: string
  bg: string
  href: string
}

const AMMIcon = (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5854 10.4899L15.5199 11.1589L17.5233 2.70694L17.5515 2.68941L17.5285 2.6843L17.5344 2.66239L17.5062 2.67919L8.88741 0.728516L8.20702 3.61692L11.9132 4.39616L0 11.7081L1.62864 14.2788L13.4691 7.01069L12.5854 10.4899Z"
      fill={Colors.neonOrange}
    />
    <path
      d="M33.4861 9.81946C30.6677 9.81909 27.9101 10.6263 25.55 12.1426C23.1898 13.6589 21.3291 15.8187 20.1951 18.3583C19.2266 18.1761 18.2428 18.0844 17.2568 18.0844C8.6588 18.0844 1.68939 24.945 1.68939 33.4072C1.68939 41.8694 8.6588 48.7285 17.2568 48.7285C24.1098 48.7285 29.9284 44.37 32.0074 38.3164C32.4987 38.3651 32.9923 38.3895 33.4861 38.3894C41.4995 38.3894 48 31.9933 48 24.1037C48 16.2141 41.5017 9.81946 33.4861 9.81946ZM39.5518 30.0755C38.7571 30.862 37.8118 31.4855 36.7706 31.91C35.7295 32.3345 34.6131 32.5514 33.4861 32.5484C33.2546 32.5484 33.0254 32.5389 32.7976 32.5213C32.6571 30.1156 31.9416 27.7765 30.7094 25.6943C29.4773 23.6121 27.7631 21.8455 25.7065 20.5383C26.2359 19.4206 27.0075 18.4306 27.9671 17.6378C28.9268 16.845 30.0512 16.2686 31.2613 15.9493C32.4715 15.6299 33.738 15.5753 34.9718 15.7893C36.2057 16.0032 37.377 16.4805 38.4035 17.1877C39.4299 17.8948 40.2865 18.8146 40.9132 19.8825C41.5398 20.9503 41.9213 22.1403 42.0307 23.3688C42.1402 24.5973 41.9749 25.8344 41.5467 26.9933C41.1184 28.1522 40.4375 29.2033 39.5518 30.0755Z"
      fill={Colors.neonOrange}
    />
  </svg>
)

const SaveIcon = (
  <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 34.8718H48V40H0V34.8718Z" fill={Colors.neonBlue} />
    <path d="M43.6364 0H48C48 28.5714 24.7273 40 0 40V35.5556C36.0727 35.5556 44.1212 11.9048 43.6364 0Z" fill={Colors.neonBlue} />
  </svg>
)

const StkMTAIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.4165 25.958L37.7189 37.372L41.567 30.4452L27.7338 19.734L33.0997 13.4507L17.1387 0L0 20.1765L15.8458 33.6496L22.4165 25.958ZM10.3854 19.3354L18.0043 10.3647L22.6783 14.3043L15.0172 23.2706L10.3854 19.3354Z"
      fill={Colors.neonPink}
    />
    <path d="M48 42.1094H0.764771V47.9999H48V42.1094Z" fill={Colors.neonPink} />
  </svg>
)

const mAssetIcon = (
  <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.248027 5.29002C0.248027 3.69246 0.150319 2.14766 0 0.550102H7.11011L7.35814 3.79043C8.15483 2.69776 10.094 0 15.1146 0C20.8869 0 22.5254 3.54175 23.0214 4.73992C25.1109 0.700814 28.4931 0.0527493 31.0785 0.0527493C36.1518 0.0527493 38.1962 3.09715 38.7373 4.09185C40.0827 6.28473 39.9775 9.32912 39.9775 11.522V25.3198H32.5667V10.9267C32.5667 8.22892 32.1684 5.23727 28.3352 5.23727C23.9309 5.23727 23.8331 9.38187 23.8331 13.1196V25.3198H16.4224V10.776C16.4224 8.83177 16.3698 5.23727 12.2961 5.23727C7.66629 5.23727 7.66629 9.23116 7.66629 10.9267V25.3198H0.248027V5.29002ZM0 30.8585H40V37H0V30.8585Z"
      fill={Colors.neonPurple}
    />
  </svg>
)

const PRODUCTS: Product[] = [
  {
    key: 'massets',
    title: 'mAssets',
    tagline: 'Use meta Assets for stable value throughout DeFi',
    icon: mAssetIcon,
    hue: Colors.neonPurple,
    buttonTitle: 'Use mAssets',
    buttonBg: Colors.neonPurpleTransparent,
    bg: Colors.neonPurpleDark,
    href: 'https://mstable.app',
  },
  {
    key: 'amm',
    title: 'mStable AMM',
    tagline: 'Swap stablecoins and bitcoin assets with low slippage',
    icon: AMMIcon,
    hue: Colors.neonOrange,
    buttonTitle: 'Swap stablecoins',
    buttonBg: Colors.neonOrangeTransparent,
    bg: Colors.neonOrangeDark,
    href: 'https://mstable.app/#/musd/swap',
  },
  {
    key: 'save',
    title: 'Save',
    tagline: 'Earn yield powered by DeFi lending markets and swap fees',
    icon: SaveIcon,
    hue: Colors.neonBlue,
    buttonTitle: 'Start saving',
    buttonBg: Colors.neonBlueTransparent,
    bg: Colors.neonBlueDark,
    href: 'https://mstable.app/#/musd/save',
  },
  {
    key: 'stake',
    title: 'Governance',
    tagline: 'Govern mStable by staking MTA and earn rewards',
    icon: StkMTAIcon,
    hue: Colors.neonPink,
    buttonTitle: 'Govern mStable',
    buttonBg: Colors.neonPinkTransparent,
    bg: Colors.neonPinkDark75,
    href: 'https://staking.mstable.app/',
  },
]

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  > h3 {
    font-weight: 600;
    padding: 0.5rem 1rem;
    background: ${Colors.spaceBlueLightTransparent};
    border-radius: 0.75rem;
    font-size: 1rem;
    color: rgba(255, 255, 2550.75);
  }
`

const CardContainer = styled.div<{ hue: string; bg: string; buttonBg: string }>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  background: ${({ bg }) => bg};

  > div:first-child {
    height: 4.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 15rem;
    justify-content: space-between;

    * {
      font-weight: 500;
      text-align: center;
    }

    h3 {
      font-size: 1.875rem;
      color: ${({ hue }) => hue};
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.15);
    }

    p {
      opacity: 0.8;
      font-size: 1rem;
    }

    button {
      background: ${({ buttonBg }) => buttonBg};
      border-radius: 0.75rem;
      font-size: 1.125rem;
      appearance: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem 0;
      width: 100%;
      color: ${({ hue }) => hue};

      &:hover {
        box-shadow: 0 0 0.5rem ${({ buttonBg }) => buttonBg};
        transform: scale(1.02);
      }
    }
  }
`

const Inner = styled.div`
  display: grid;
  overflow-x: scroll;
  grid-template-columns: repeat(3, 1fr) 1px;
  padding: 0 0 1rem 1rem;

  > * {
    margin-right: 1rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '';
    display: block;
  }

  > div {
    width: 18rem;
  }

  @media (min-width: 480px) {
    > * {
      margin-right: 2rem;
    }

    padding: 0 0 1rem 2rem;
  }

  // (n * width) + (n + 1) * margin
  @media (min-width: 62rem) {
    display: flex;
    justify-content: center;
  }
`

const Container = styled(Section)`
  > div:last-child {
    padding: 0;
  }
`

const Card: FC<Product> = ({ title, tagline, icon, bg, hue, buttonBg, href, buttonTitle }) => (
  <CardContainer hue={hue} bg={bg} buttonBg={buttonBg}>
    <div>{icon}</div>
    <div>
      <h3>{title}</h3>
      <p>{tagline}</p>
      <LinkButton href={href}>{`${buttonTitle}`}</LinkButton>
    </div>
  </CardContainer>
)

export const Products: FC = () => (
  <Container h1="Explore our products">
    <Inner>
      {PRODUCTS.map((product) => (
        <Card {...product} />
      ))}
    </Inner>
    <ComingSoon>
      <h3>More Coming Soon</h3>
    </ComingSoon>
  </Container>
)
