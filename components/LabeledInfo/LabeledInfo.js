import React from 'react'
import styled from 'styled-components/native'

const Field = styled.View`
  padding-vertical: ${props => props.padded ? '10px' : 0};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
  flex-direction: ${({flexDirection})=> flexDirection ? flexDirection : 'column'};
`

const FieldLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`

const FieldText = styled.Text`
  font-size: 16px;
  color: #545151;
`

const LabeledInfo = ({ children, label, text, padded, alignItems, flexDirection }) => {
  return children
    ? (<Field
        padded={padded}
        alignItems={alignItems}
        flexDirection={flexDirection}>
          {children}
      </Field>)
    : (
      <Field padded={padded}>
        <FieldLabel>{label}</FieldLabel>
        <FieldText>{text}</FieldText>
      </Field>
    )
}

export default LabeledInfo
