import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 0px 16px;
  width: 100%;
  height: 42px;

  color: var(--color-white);
  font-size: var(--font-size-medium);
  background-color: var(--color-grey);
  border-radius: 8px;

  ${props => props.question && css`
    padding: 8px 16px;
    width: 100%;
    height: 80px;
    min-height: 58px;
    max-height: 80px;

    color: var(--color-white);
    background-color: var(--color-black);
    border-radius: 8px;
  `}

  ${props => props.copy && css`
    padding: 0px 16px;
    width: auto;
    height: 32px;
    color: var(--color-white);
    font-size: var(--font-size-medium);
    cursor: copy;

    transition: all 0.4s;
    background-color: var(--color-black-opacity1);
    border-radius: 8px;
    
    &:hover, &:focus, &:active {
      background-color: var(--color-black-opacity4);
    }
  `}
`;