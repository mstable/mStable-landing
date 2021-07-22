import styled from 'styled-components'

import { Colors } from '../theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  white-space: nowrap;

  background: white;
  border: 4px ${Colors.lightBlue} solid;
  border-radius: 0.75rem;
  justify-content: center;
  color: ${Colors.lightBlue};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: black;
    border-color: black;
  }

  // flex-gap polyfill fail
  > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`
