import React, { useState } from 'react'
import styled from 'styled-components';

const StyledTextInput = styled.TextInput`
  padding: 8px 4px;
  border-bottom-width: ${props => props.border.width};
  border-style: solid
  border-bottom-color: ${props => props.border.color};
`

const Input = ({value, name, onChange, onBlur, onFocus, ...rest}) => {
  const [inputValue, onChangeText] = useState(value);
  const [border, setBorder] = useState({ color: "#ddd", width: "1px" })

  const handleFocus = () => {
    setBorder({ width: "2px", color: "#4285f4" });
    if (onFocus) onFocus();
  }

  const handleBlur = () => {
    setBorder({ width: "1px", color: "#ddd" });
    if (onBlur) onBlur();
  }

  const handleChange = text => {
    onChangeText(text)
    if (onChange) onChange(name, text);
  }

  return (
    <StyledTextInput
      value={inputValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      border={border}
      onChangeText={handleChange}
      {...rest}
    />
  )
}

export default Input
