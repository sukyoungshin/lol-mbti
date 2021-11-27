import React, { useState } from 'react';
// STYLE
import { createGlobalStyle } from 'styled-components';
// COMPONENT
import Home from './components/Home';
import MBTI from './components/MBTI';
import Footer from './components/common/Footer';

// STYLE
const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(--color-bgcolor);
  }
  #root {
    height: 100%;
  }
  
  /* FONT SIZE */
  // MOBILE
  @media all and (max-width: 450px) {
    html {
      --font-size-heading : 22px;
      --font-size-main : 16px;
      --font-size-medium : 14px;
      --font-size-small: 10px;
      --color-white: #fff;
      --color-light-grey: #F6F6F6;
      --color-grey: #C5C5C5;
      --color-black: #111;
      --color-bgcolor: #F5F5F5;
    }
  }
  // TABLET
  // DESKTOP
`;

// COMPONENT
const App = () => {
  // MBTI 시작여부 관리
  const [ begin, setBegin ] = useState(false);
  const gameStart = () => setBegin(true);
  const gameEnd = () => setBegin(false);

  return (
    <>
    <GlobalStyle />
    {/* mbti 게임시작여부에 따라 보여줄 화면 */}
    { 
      begin 
      ? <MBTI gameEnd={gameEnd} /> 
      : <Home gameStart={gameStart} /> 
    }
    <Footer />
    </>
  );
}

export default App;