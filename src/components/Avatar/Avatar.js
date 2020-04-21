import React from 'react'
import styled from 'styled-components/native'

import { setAvatarBackgroundColor } from '../../helpers'

const StyledAvatar = styled.Image`
  width: 42px;
  height: 42px;
  background-color: #3431cd;
  border-radius: 500;
  margin-right: 16px;
`

const StyledAvatarPlaceholder = styled.View`
  width: 42px;
  height: 42px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  border-radius: 500;
  margin-right: 16px;
`

const StyledInitial = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
`

const Avatar = ({ source, name, ...rest }) => {
  return source && source.uri ? (
    <StyledAvatar source={source} {...rest} />
  ) : (
    <StyledAvatarPlaceholder backgroundColor={setAvatarBackgroundColor(name)}>
      <StyledInitial>{name.charAt(0)}</StyledInitial>
    </StyledAvatarPlaceholder>
  )
}

export default Avatar
