import styled from 'styled-components'

import { Colors } from '../theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 32px;
  height: 54px;
  white-space: nowrap;

  background: white;
  border: 4px ${Colors.blue} solid;
  border-radius: 2px;
  justify-content: center;
  color: ${Colors.blue};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 1s ease;

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
