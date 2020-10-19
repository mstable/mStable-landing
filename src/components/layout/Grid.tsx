import styled from 'styled-components'

export const Grid = styled.div`
  > * {
    margin-bottom: 32px;
  }

  @media (min-width: 520px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
    grid-template-areas: 'left left left right right right' 'main main main main aside aside';
    > * {
      margin-bottom: 0;
    }
  }
`

export const SingleColumn = styled(Grid)`
  > * {
    grid-column: span 6;
  }
`

export const TwoColumns = styled(Grid)`
  > :first-child {
    grid-area: left;
  }

  > :last-child {
    grid-area: right;
  }
`

export const MainAndAside = styled(Grid)`
  > :first-child {
    grid-area: main;
  }

  > :last-child {
    grid-area: aside;
  }
`
