import React from 'react'
import styled from 'styled-components/native'

const setColor = (type) => {
  const colors = {
    brand: '#EF4136',
    phantom: 'rgba(255, 255, 255, 0)',
  }

  return colors[type]
}

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  align-self: flex-end;
  padding-vertical: 16px;
  padding-horizontal: 64px;
  border-radius: 500px;
  background-color: ${({ type }) => setColor(type)};
  border: 1px solid
    ${({ type }) => (type === 'phantom' ? '#666' : setColor(type))};
  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};
  ${({ type }) =>
    type === 'brand' &&
    `
    shadow-opacity: 0.45;
    shadow-radius: 5px;
    shadow-color: #FF6347;
    shadow-offset: { height: 5px, width: 0 };
  `}
`

const StyledButtonContainer = styled.View`
  flex-direction: row;
`

const StyledButtonText = styled.Text`
  font-size: 16px;
  color: ${({ type }) => (type === 'phantom' ? '#666' : '#fff')};
  margin-left: ${({ hasIcon }) => (hasIcon ? '8px' : 0)};
`

const RoundedButton = ({ title, disabled, type, icon, iconColor, ...rest }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...rest}>
      <StyledButtonContainer>
        {icon}
        <StyledButtonText type={type} hasIcon={!!icon}>
          {title}
        </StyledButtonText>
      </StyledButtonContainer>
    </StyledButton>
  )
}

export default RoundedButton
