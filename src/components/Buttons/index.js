import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <StyledButton
      onClick={onClick}
      type="button"
      value={label}
    />
  );
};

const StyledButton = styled.input`
  background-color: #01b8e2;
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor:pointer;
`;

export default Button;
