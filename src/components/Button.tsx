import styled from 'styled-components'

import { Colors } from '../theme'

export const Button = styled.button<{ highlight?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: 1px solid ${({ highlight }) => (highlight ? Colors.solidBrandBorderDefault : Colors.dimBrandBorderDefault)};
  border-radius: 9999px;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ highlight, disabled }) =>
    highlight ? Colors.solidBrandBgDefault : disabled ? 'rgba(62,75,96, 0.3)' : Colors.dimBrandBgDefault};
  color: ${({ highlight }) => (highlight ? Colors.solidBrandContentDefault : Colors.dimBrandContentDefault)};
  transition: transform 0.25s ease-out;
  height: 3.5rem;

  &:hover,
  &:focus {
    background: ${({ highlight }) => (highlight ? Colors.solidBrandBgHover : Colors.dimBrandBgHover)};
    color: ${({ highlight }) => (highlight ? Colors.solidBrandContentHover : Colors.dimBrandContentHover)};
    border: 1px solid ${({ highlight }) => (highlight ? Colors.solidBrandBorderHover : Colors.dimBrandBorderHover)};

    ${({ disabled }) =>
      disabled && {
        cursor: 'default',
        transform: 'none',
      }}
  }

  &:active {
    background: ${({ highlight }) => (highlight ? Colors.solidBrandBgPressed : Colors.dimBrandBgPressed)};
    color: ${({ highlight }) => (highlight ? Colors.solidBrandContentPressed : Colors.dimBrandContentPressed)};
    border: 1px solid ${({ highlight }) => (highlight ? Colors.solidBrandBorderPressed : Colors.dimBrandBorderPressed)};
  }

  // flex-gap polyfill fail
  > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`
