import React, { useState } from 'react';
// COMPONENT
import Result from './Result';
import Question from './Question';
import { MbtiWrapper } from './common/Styled';

const MBTI = ({ gameEnd }) => {
  // 답변을 끝난 문항 수
  const [ count, setCount ] = useState(0); 
  // 각 유형에 대한 점수들 (1번 답변은 +, 2번 답변은 -)
  const [ e, setE ] = useState(0);
  const [ s, setS ] = useState(0);
  const [ t, setT ] = useState(0);
  const [ j, setJ ] = useState(0);

  // 답변을 끝낼 때, 카운트 증가 + 점수 합산
  const selectAnswer = (btnNum, type) => {
    if (btnNum === 1) {
      // 조건 : 1번 문항을 선택하면 +1
      if (type === 'e') { setE(e + 1) }
      if (type === 's') { setS(s + 1) }
      if (type === 't') { setT(t + 1) }
      if (type === 'j') { setJ(j + 1) }
    } else {
      // 조건 : 2번 문항을 선택하면 -1
      if (type === 'e') { setE(e - 1) }
      if (type === 's') { setS(s - 1) }
      if (type === 't') { setT(t - 1) }
      if (type === 'j') { setJ(j - 1) }
    };
    setCount(count + 1);
  };

  return (
    <MbtiWrapper>
    { 
      count === 12 
      ? <Result gameEnd={gameEnd} points={{e, s, t, j}} /> 
      : <Question count={count} selectAnswer={selectAnswer} /> 
    }
    </MbtiWrapper>
  );
};

export default MBTI;