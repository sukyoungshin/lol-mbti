import React, { useState } from 'react';
import Home from './Home';
import MBTI from './MBTI';
import './App.css';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
};

function App() {
  // MBTI 시작여부 관리
  const [ begin, setBegin ] = useState(false);
  const gameStart = () => setBegin(true);
  const gameEnd = () => setBegin(false);

  return (
  <div style={wrapper}>
  { 
    begin 
    ? <MBTI gameEnd={gameEnd} /> 
    : <Home gameStart={gameStart} /> 
  }
  </div>
  );
}

export default App;