import React from 'react'
import styled from 'styled-components'

export const FullBleed = styled.div<{ background?: string; dark?: boolean }>`
  width: 100%;
  grid-column: 1 / 4 !important;
  padding-top: 4rem;
  padding-bottom: 4rem;

  background: transparent;
  color: #e0e7ef;
  text-shadow: black 0 0 30px;

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
