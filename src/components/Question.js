import React from 'react';
import { questioncontent } from '../utilities/questioncontent'; // QUESTION DATA
import { QHeader, QSection, QButton } from './common/Styled';

const Question = ({count, selectAnswer}) => {
  const { id, question, answer1, answer2, type } = questioncontent[count];

  return (
    <>
    <QHeader>
      <h2>{id}/12&nbsp;</h2>
      <h3>{question}</h3>
    </QHeader>
    
    <QSection>
      <QButton 
        type="button" 
        onClick={() => selectAnswer(1, type)}
      > {answer1}</QButton>
      <QButton 
        type="button" 
        onClick={() => selectAnswer(2, type)}
      > {answer2}</QButton>
    </QSection>
    </>
  );
}

export default Question;