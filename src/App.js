import React, { useState } from 'react';
import Home from './components/Home';
import MBTI from './components/MBTI';
import './App.css';

function App() {
  // MBTI 시작여부 관리
  const [ begin, setBegin ] = useState(false);
  const gameStart = () => setBegin(true);
  const gameEnd = () => setBegin(false);

  return (
  <div className="app-container-wrapper">
    {/* mbti 게임시작여부에 따라 보여줄 화면 */}
    { 
      begin 
      ? <MBTI gameEnd={gameEnd} /> 
      : <Home gameStart={gameStart} /> 
    }
  </div>
  );
}

export default App;