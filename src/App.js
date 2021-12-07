import React, { useState } from 'react';
// COMPONENT
import Home from './components/Home';
import MBTI from './components/MBTI';
import Footer from './components/Footer';
// STYLE
import { GlobalStyle } from './components/common/Styled';

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