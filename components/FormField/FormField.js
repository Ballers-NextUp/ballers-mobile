import React from 'react'
import styled from 'styled-components'

import Input from '../Input'
import Label from '../Label'

const StyledFormField = styled.View`
  display: flex;
  margin-bottom: 32px;
`

const FormField = ({
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  multiline,
  name,
  hasDatePicker,
  placeholder,
  datePickerMode,
  ...rest
}) => {
  return (
    <StyledFormField {...rest}>
      <Label text={label} />
      <Input
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        multiline={multiline}
        datePickerMode={datePickerMode}
        placeholder={placeholder}
        hasDatePicker={hasDatePicker}
      />
    </StyledFormField>
  )
}

export default FormField
