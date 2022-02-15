import React from 'react';
import { Button } from 'components';
import { StyledMain, StyledHeader, StyledSection, StyledImage } from './Main.style';

const Main = ({ gameStart }) => {
  return (
    <>
    <StyledMain>
      <StyledHeader>
        <h1>나의 성향과 찰떡인 LOL 챔피언은?</h1>
      </StyledHeader>
    </StyledMain>
    <StyledSection>
      <StyledImage src="assets/mobile-main.webp" alt="메인이미지" /> 
      <Button onClick={gameStart}>
        시작하기
      </Button>
    </StyledSection>
    </>
  );
};

export default Main;