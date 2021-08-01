import styled from 'styled-components'

import { Colors } from '../theme'

export const Button = styled.button<{ highlight?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: none;
  border-radius: 0.75rem;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ highlight }) => (highlight ? Colors.blue : '#3e4b60')};
  color: white;
  transition: transform 0.25s ease-out;

  ${({ highlight }) =>
    highlight && {
      textShadow: `rgba(0, 75, 124, 0.25) 0 1px 1px`,
      boxShadow: `rgba(0, 153, 255, 0.5) 0 0px 15px`,
    }}

  &:hover,
  &:focus {
    color: white;
    transform: scale(1.025);
  }

  // flex-gap polyfill fail
  > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`
