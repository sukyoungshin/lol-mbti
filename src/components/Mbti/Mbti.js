import React from 'react';
import { Result, Question } from 'pages';
import { StyledMain } from './Mbti.style';
import { useCountMbti } from './hooks';

const Mbti = ({ gameEnd }) => {
  const {e, s, t, j, count, selectAnswer} = useCountMbti();

  return (
    <StyledMain>
    { 
      count === 12 
      ? <Result gameEnd={gameEnd} points={{e, s, t, j}} /> 
      : <Question count={count} selectAnswer={selectAnswer} /> 
    }
    </StyledMain>
  );
};

export default Mbti;