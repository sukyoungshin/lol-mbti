import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 16px;
  overflow: auto;

  p, h3 {
    margin: 0;
  }
`;

export const ButtonQuestion = styled.button`
  width: calc(100% / 2);
  min-height: 48px;
  padding: 8px 16px;
  border: none;
  
  color: white;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.6);

  @media all and (max-width: 450px) {
    min-height: 96px;
    height: fit-content;
    font-size: 14px;
  }
`;