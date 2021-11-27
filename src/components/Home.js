import React from 'react';
import styled from 'styled-components';

// STYLE
const HomeWrapper = styled.main`
  width: 100%;
`;
const HomeHeader = styled.header`
  width: 100%;
  height: 56px;
  line-height: 56px;

  h1 {
    color: var(--color-black);
    font-size: var(--font-size-heading);
    text-align: center;
  }
`;
const HomeSection = styled.section`
  margin: 56px 0 0 0;
  padding: 0px 16px;
  width: 100%;
  min-height: calc(100% - 168px);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  div,
  img {
    width: 100%;
    font-size: 0;
  }
`;
export const MobileButton = styled.button`
  padding: 0px 16px;
  width: 100%;
  height: 32px;

  border: none;
  outline: none;

  color: var(--color-white);
  font-size: var(--font-size-medium);
  background-color: var(--color-grey);
  border-radius: 8px;
`;

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