import React from 'react'
import styled from 'styled-components'

export const FullBleed = styled.div<{ background?: string; dark?: boolean }>`
  ${({ background, dark }) => `
    background-image: ${
      background ? `url(${background})` : dark ? 'rgb(0,3,9)' : 'linear-gradient(0deg, rgb(0,3,9) 0%, rgb(9,10,25) 86%, rgb(0,3,9) 100%)'
    };
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${dark ? 'rgb(0,3,9)' : 'rgb(9,12,30)'};
    color: #b4bbc6;
  `}
  width: 100%;
  grid-column: 1 / 4 !important;
  padding-top: 4rem;
  padding-bottom: 4rem;

  text-shadow: rgb(0, 6, 16) 0 2px 2px;

  h1,
  h2 {
    color: white;
  }

  @media (min-width: 400px) {
    > * {
      display: grid;
      overflow-x: hidden;

      grid-template-columns:
        1fr
        min(1200px, 100%)
        1fr;

      > * {
        grid-column: 2;
      }
    }
  }
`
