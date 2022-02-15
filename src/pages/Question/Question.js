import React from 'react';
import { questioncontent } from 'mock/questioncontent'; 
import { StyledHeader, StyledSection } from './Question.style';
import { Button } from 'components';

const Question = ({count, selectAnswer}) => {
  const { id, question, answer1, answer2, type } = questioncontent[count];
  const selectAnswerA = () => selectAnswer(1, type);
  const selectAnswerB = () => selectAnswer(2, type);

  return (
    <>
    <StyledHeader>
      <h2>{id}/12&nbsp;</h2>
      <h3>{question}</h3>
    </StyledHeader>
    <StyledSection>
      <Button onClick={selectAnswerA} question> 
        {answer1}
      </Button>
      <Button onClick={selectAnswerB} question> 
        {answer2}
      </Button>
    </StyledSection>
    </>
  );
}

export default Question;