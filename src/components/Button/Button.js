import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ copy, question, onClick, children }) => {
  return (
    <StyledButton 
      type="button" 
      onClick={onClick} 
      question={question}
      copy={copy}
    >
      {children}
    </StyledButton>
  );
};

export default Button;