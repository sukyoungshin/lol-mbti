import React from 'react';
import { questioncontent } from '../utilities/questioncontent'; // QUESTION DATA
import styled from 'styled-components'; // STYLE

// STYLE
const QHeader = styled.header`
  margin: 0 0 56px 0;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 24px;
  gap: 24px;

  h2, h3 {
    color: var(--color-black);
  }
  h2 {
    font-size: var(--font-size-medium);
  }
  h3 {
    font-size: var(--font-size-heading);
  }
`;
const QSection = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;
const QButton = styled.button`
  border: none;
  outline: none;

  padding: 8px 16px;
  width: 100%;
  min-height: 58px;
  max-height: 80px;

  color: var(--color-white);
  background-color: var(--color-black);
  border-radius: 8px;
`;

// COMPONENT
const Question = ({count, selectAnswer}) => {
  const { number, question, answer1, answer2, type } = questioncontent[count];

  return (
    <>
    <QHeader>
      <h2>{number}/12&nbsp;</h2>
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