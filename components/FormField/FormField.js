import React from 'react'
import styled from 'styled-components'

import Input from '../Input'
import Label from '../Label'

const StyleField = styled.View`
  display: flex;
  margin-bottom: 32px;
`

const Field = ({label, value, onChange, onBlur, onFocus, multiline, name, hasDatePicker, ...rest}) => {
  return (
    <StyleField {...rest}>
      <Label text={label} />
      <Input
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        multiline={multiline}
        hasDatePicker={hasDatePicker}
      />
    </StyleField>
  )
}

export default Field
