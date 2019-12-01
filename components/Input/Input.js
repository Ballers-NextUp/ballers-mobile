import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { DatePickerIOS, View } from 'react-native';

const StyledTextInput = styled.TextInput`
  padding: 8px 4px;
  border-bottom-width: ${props => props.border.width};
  border-style: solid
  border-bottom-color: ${props => props.border.color};
`

const Input = ({value, name, onChange, onBlur, onFocus, hasDatePicker, ...rest}) => {
  const [inputValue, onChangeText] = useState(value);
  const [isFocused, setFocus] = useState(false)
  const [border, setBorder] = useState({ color: "#ddd", width: "1px" })

  const handleFocus = () => {
    setFocus(true)
    setBorder({ width: "2px", color: "#4285f4" });
    if (onFocus) onFocus();
  }

  const handleBlur = () => {
    setFocus(false)
    setBorder({ width: "1px", color: "#ddd" });
    if (onBlur) onBlur();
  }

  const handleChange = text => {
    onChangeText(text)
    if (onChange) onChange(name, text);
  }

  const handleDate = datetime => {
    onChangeText(datetime)
  }

  useEffect(() => {
    onChangeText(value)
  }, [value])

  return (
    <View>
      <StyledTextInput
        value={
          hasDatePicker && inputValue instanceof Date
            ? inputValue.toDateString()
            : inputValue
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        border={border}
        onChangeText={handleChange}
        {...rest}
      />
      {
        hasDatePicker &&
        isFocused &&
        <DatePickerIOS
          date={new Date(inputValue)}
          onDateChange={handleDate}
        />
      }
    </View>
  )
}

export default Input
