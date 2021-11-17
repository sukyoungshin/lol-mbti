import React from 'react';
import { questioncontent } from '../utilities/questioncontent';
import { ButtonQuestion } from '../styles/myComponents';
import './Question.css';

function Question({count, selectAnswer}) {

  const { number, question, answer1, answer2, type } = questioncontent[count];

  return (
  <>
  <div className="question-wrapper">
    <div className="question-title">
      <h2>{number}/12&nbsp;</h2>
      <h3>{question}</h3>
    </div>
    
    <div className="button-wrapper">
      <ButtonQuestion onClick={() => selectAnswer(1, type)}>
        {answer1}
      </ButtonQuestion><br/>
      <ButtonQuestion onClick={() => selectAnswer(2, type)}>
        {answer2}
      </ButtonQuestion>
    </div>
  </div>
  </>
  );
}

export default Question;