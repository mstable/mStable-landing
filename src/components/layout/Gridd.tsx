import styled from 'styled-components'

export const Gridd = styled.div`
  > * {
    margin-bottom: 2rem;
  }

  @media (min-width: 520px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'left left left right right right' 'main main main main aside aside';
    > * {
      margin-bottom: 0;
    }
  }
`

export const SingleColumn = styled(Gridd)`
  > * {
    grid-column: span 6;
  }
`

export const TwoColumns = styled(Gridd)`
  > :first-child {
    grid-area: left;
  }

  > :last-child {
    grid-area: right;
  }
`

export const MainAndAside = styled(Gridd)`
  > :first-child {
    grid-area: main;
  }

  > :last-child {
    grid-area: aside;
  }
`
