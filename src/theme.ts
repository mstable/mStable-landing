import { css, DefaultTheme } from 'styled-components'

export enum Colors {
  gold = 'rgb(255,179,52)',
  goldTransparent = 'rgb(255,179,52, 0.2)',
  green = 'rgb(82,204,147)',
  greenTransparent = 'rgba(82,204,147, 0.2)',
  lightBlue = 'rgb(74, 161, 255)',
  blue = 'rgba(62, 120, 238, 1)',
  blueTransparent = 'rgba(0,92,222,0.2)',
  red = 'rgb(202,0,27)',
  redTransparent = 'rgba(202,0,27,0.2)',
  black = 'rgba(0,0,0,1)',
  blackTransparent = 'rgba(0,0,0,0.2)',
  whiteTransparent = 'rgba(255,255,255,0.5)',
  darkGrey = 'rgba(30,30,30,1)',
  darkerGrey = 'rgba(50,50,50,1)',
  spaceBlue = 'rgba(5, 20, 44, 1)',
  spaceBlueLight = 'rgba(45, 58, 78, 1)',
  neonBlue = 'rgba(85,213,255,1)',
  neonBlueDark = 'rgba(33, 39, 91, 0.75)',
  neonBlueTransparent = 'rgba(85,213,255,0.2)',
  neonOrange = 'rgba(250,195,113,1)',
  neonOrangeDark = 'rgba(48, 38, 73, 0.75)',
  neonOrangeTransparent = 'rgba(250,195,113,0.2)',
  neonPink = 'rgba(251,136,215,1)',
  neonPinkDark75 = 'rgba(49, 32, 85, 0.75)',
  neonPinkDark100 = 'rgba(49, 32, 85, 1)',
  neonPinkTransparent = 'rgba(251,136,215,0.2)',
}

export enum Constants {
  navHeight = '72px',
}

export const mixins = {
  defaultSpacing: css`
    padding: 2.5rem 0;

    > * {
      margin-top: 2.5rem;
      padding: 0 1rem;
    }

    @media (min-width: 480px) {
      padding: 5rem 0;

      > * {
        margin-top: 5rem;
        padding: 0 2rem;
      }
    }
  `,
}

export const defaultTheme: DefaultTheme = {
  color: Colors,
  constants: Constants,
  mixins,
}
