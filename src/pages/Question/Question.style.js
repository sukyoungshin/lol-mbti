import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 0 0 56px 0;
  width: 100%;
  max-height: 72px;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;

  h2, h3 {
    color: var(--color-black);
  }
  h2 {
    font-size: var(--font-size-medium);
  }
  h3 {
    font-size: var(--font-size-heading);
  }
`;

export const StyledSection = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;