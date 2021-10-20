import styled from 'styled-components';

export const Title = styled.div`
  min-height: 150px;
`;

export const Button = styled.button`
  width: 160px;
  height: 56px;
  font-size: 18px;
  border-radius: 16px;
  border: none;
  color: white;
  background-color: rgb(34 70 86);
  margin: 16px;
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