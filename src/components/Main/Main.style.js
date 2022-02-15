import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  line-height: 56px;

  h1 {
    color: var(--color-black);
    font-size: var(--font-size-heading);
    text-align: center;
  }
`;

export const StyledSection = styled.section`
  padding: 0px 16px;
  width: 100%;
  height: calc(100% - 120px);
  min-height: calc(100% - 176px);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  div{
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
`;
