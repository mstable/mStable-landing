import styled from 'styled-components'

import { Colors } from '../theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 2rem;
  height: 3.5rem;
  white-space: nowrap;

  background: white;
  border: 4px ${Colors.lightBlue} solid;
  border-radius: 1.75rem;
  justify-content: center;
  color: ${Colors.lightBlue};
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.5s ease-out;

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
