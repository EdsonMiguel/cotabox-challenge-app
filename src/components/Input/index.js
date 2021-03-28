import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { label, onChangeText } = props;
  return (
    <StyledInput
      placeholder={label}
      onChange={onChangeText}
      required
    />
  );
};

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  margin: 5px;
`;

export default Input;
