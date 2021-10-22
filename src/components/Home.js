import React from 'react';
import './Home.css';

function Home({ gameStart }) {
  return (
    <>
    <div className="home-wrapper">
      <h1>나의 성향과 찰떡인 LOL 챔피언은?</h1>
      <div className="image-wrapper">
        <img src="/assets/Patch_11_12_Notes_Banner.jpg" alt="메인이미지" /> 
      </div>
      <div className="btn-wrapper">
        <button type="button" onClick={gameStart}>시작하기</button>
      </div>
    </div>
    <footer className="footer">
      <address>
        This is an individual project, which is not created for a commercial purpose. 
        &copy; All righs are reserved by Riot Games, Inc, as per the Riot's legal policy: https://www.riotgames.com/en/legal
      </address>
    </footer>
    </>
  );
};

export default Home;