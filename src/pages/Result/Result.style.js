import styled from 'styled-components';

export const StyledSection = styled.section`
  font-size: 0;

  h1, h2, h3, p {
    text-align: center;
    color: var(--color-black);
  }
  h1 {
    margin: 0 0 16px 0;
    font-size: var(--font-size-medium);
  }
  h2 {
    font-size: var(--font-size-heading);
  }
  h3 {
    margin: 0 0 8px 0;
    font-size: var(--font-size-main);
  }
  p {
    font-size: var(--font-size-medium);
  }
`;

export const StyledImg = styled.img`
  margin: 8px 0;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

export const StyledArticle = styled.article`
  margin: 16px 0;
  padding: 16px 0;
  width: 100%;

  border-top: 1px solid var(--color-black);  
  border-bottom: 1px solid var(--color-black);  
`;

export const StyledDivURL = styled.div`
  margin: 0 0 16px 0;
  width: 100%;

  display: inline-flex;
  flex-direction: row;

  position: relative;
`;

export const StyledInput = styled.input`
  padding-left: 32px;
  height: 32px;
  flex: 1;
  font-size: var(--font-size-medium);
  background-color: var(--color-white);
  border-radius: 8px 0 0 8px;
  
  & + span {
    display: inline-block;
    width: 24px;
    height: 24px;

    position: absolute;
    top: 5px;
    left: 6px;

    font-size: var(--font-size-medium);
    opacity: 0.7;
  }
`;

export const StyledDivImage = styled.div`
  overflow-x: auto;
`;

export const StyledDivImageList = styled.div`
  display: inline-flex;
  flex-direction: row;
  grid-gap: 8px;
  gap: 8px;

  img {
    width: 120px;
    height: 140px;
  }
`;