import React from 'react'
import styled from 'styled-components'

export const FullBleed = styled.div<{ background?: string; dark?: boolean }>`
  background-image: ${({ background }) =>
    background ? `url(${background})` : 'none'};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ dark }) => (dark ? 'black' : 'white')};
  color: ${({ dark }) => (dark ? 'white' : 'black')};
  width: 100%;
  grid-column: 1 / 4 !important;
  padding-top: 160px;
  padding-bottom: 96px;

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
