import React from 'react';
import { questioncontent } from '../utilities/questioncontent';
import { ButtonQuestion } from '../styles/myComponents';
import './Question.css';

function Question({count, selectAnswer}) {

  return (
  <>
  <div className="question-wrapper">
    <h2>
      {questioncontent[count].number}/12&nbsp;
      {questioncontent[count].question}
    </h2>
    <div className="button-wrapper">
      <ButtonQuestion onClick={() => selectAnswer(1, questioncontent[count].type)}>
        {questioncontent[count].answer1}
      </ButtonQuestion><br/>
      <ButtonQuestion onClick={() => selectAnswer(2, questioncontent[count].type)}>
        {questioncontent[count].answer2}
      </ButtonQuestion>
    </div>
  </div>
  </>
  );
}

export default Question;