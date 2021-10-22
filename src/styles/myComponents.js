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
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: rgb(34 70 86);
  font-size: 16px;
  margin-bottom: 16px;
  box-shadow: 1px 1px 4px rgba(0 0 0 / 60%);

  @media all and (max-width: 450px) {
    height: 96px;
    font-size: 14px;
  }
`;