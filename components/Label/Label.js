import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.Text`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

const Label = ({ children, text, ...rest}) => {
  return (
    <StyledLabel {...rest}>
      {text}
      {children}
    </StyledLabel>
  )
}

export default Label
