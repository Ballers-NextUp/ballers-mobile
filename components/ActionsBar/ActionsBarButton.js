import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'


const StyledActionsBarButton = styled.TouchableOpacity`
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  ${({ isIcon }) => isIcon
    ?`
      width: 36px;
      height: 36px;
      padding: 4px;
      border-radius: 500px;
    `
    : ''
  }
`

const StyledActionsBarButtonText = styled.Text`
  color: #fff;
`

const ActionsBarButton = ({ onPress, iconName, iconColor, text }) => {
  return iconName
    ? (<StyledActionsBarButton isIcon onPress={onPress}>
        <Feather name={iconName} size={20} color={iconColor} />
      </StyledActionsBarButton>)

    : (<StyledActionsBarButton onPress={onPress}>
        <StyledActionsBarButtonText>{text}</StyledActionsBarButtonText>
      </StyledActionsBarButton>)
}

export default ActionsBarButton
