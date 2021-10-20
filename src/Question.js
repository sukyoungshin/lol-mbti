import React from 'react';
import { questioncontent } from './utilities/questioncontent';
import { ButtonQuestion, Title } from './styles/myComponents';

function Question({count, selectAnswer}) {

  return (
  <>
  <Title>
    <h2 style={{fontFamily: 'var(--bs-font-sans-serif)', marginTop: 'revert'}}>
      {questioncontent[count].number}/12&nbsp;
      {questioncontent[count].question}
    </h2>
  </Title>
  <ButtonQuestion onClick={() => selectAnswer(1, questioncontent[count].type)}>
    {questioncontent[count].answer1}
  </ButtonQuestion><br/>
  <ButtonQuestion onClick={() => selectAnswer(2, questioncontent[count].type)}>
    {questioncontent[count].answer2}
  </ButtonQuestion>
  </>
  );
}

export default Question;