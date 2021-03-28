import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <StyledButton
      onClick={onClick}
      type="button"
    >
      {label}

    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding:5px;
  margin:2px;
  background-color: #fc3503;
  border: none;
  color: #fff;
  border-radius:5px;
  cursor: pointer;
`;

export default Button;
