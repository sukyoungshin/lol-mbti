import React from 'react';
import { Button, Title } from './styles/myComponents';
import styled from 'styled-components';

// styled-components
const Image = styled.img`
  width: 60%; 
  height: auto;
  border-radius: 16px;

  @media all and (max-width: 450px) {
    width: 100%; 
    height: 230px;
  }
`;
const Wrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0;
`;
const Footer = styled.footer`
  margin: 0 auto;
  font-size: 12;
  text-align: center;
  max-width: 750px;
  word-break: break-all;

  @media all and (max-width: 450px) {
    font-size: 12px;
  }
`;


function Home({gameStart}) {
  return (
    <Wrapper>
    <Title>
      <h1 style={{marginTop: 'revert'}}>나의 성향과 찰떡인 LOL 챔피언은?</h1>
      <Image src="/assets/Patch_11_12_Notes_Banner.jpg" alt="메인이미지" /> 
    </Title>
    <Button onClick={gameStart}>시작하기</Button>
    <Footer>
      <address>
        This is an individual project, which is not created for a commercial purpose. 
        &copy; All righs are reserved by Riot Games, Inc, as per the Riot's legal policy: https://www.riotgames.com/en/legal
      </address>
    </Footer>
    </Wrapper>
  );
};

export default Home;