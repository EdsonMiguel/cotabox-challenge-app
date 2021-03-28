import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
  const { primary, secundary } = props;
  return (
    <StyledContainer>
      <StyledPrincipal>{primary}</StyledPrincipal>
      <StyledSecundary>{secundary}</StyledSecundary>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px;
`;

const StyledPrincipal = styled.h1`
  text-transform: uppercase;
  color: #3c494f;
`;

const StyledSecundary = styled.h3`
color: #3c494f
`;

export default Title;
