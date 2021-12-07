import React from 'react';
import { HomeWrapper, HomeHeader, HomeSection, MobileButton } from './common/Styled';


// COMPONENT
const Home = ({ gameStart }) => {
  return (
    <>
    <HomeWrapper>
      <HomeHeader>
        <h1>나의 성향과 찰떡인 LOL 챔피언은?</h1>
      </HomeHeader>
    </HomeWrapper>
    <HomeSection>
      <div>
        <img src="assets/mobile-main.png" alt="메인이미지" /> 
      </div>
      <div>
        <MobileButton 
          type="button" 
          onClick={gameStart}
        >시작하기</MobileButton>
      </div>
    </HomeSection>
    </>
  );
};

export default Home;