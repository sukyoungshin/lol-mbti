import React, { useState } from 'react';
import { Main, Mbti, Footer } from './components';
import { GlobalStyle } from './constants/GlobalStyle';

const App = () => {
  const [ begin, setBegin ] = useState(false);
  const gameStart = () => setBegin(true);
  const gameEnd = () => setBegin(false);

  return (
    <>
    <GlobalStyle />
    { 
      begin 
      ? <Mbti gameEnd={gameEnd} /> 
      : <Main gameStart={gameStart} /> 
    }
    <Footer />
    </>
  );
};

export default App;