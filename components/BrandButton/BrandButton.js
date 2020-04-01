import React from 'react'
import styled from 'styled-components/native'

const StyledBrandButton = styled.TouchableHighlight`
  width: 100%;
  align-items: center;
  padding-vertical: 16px;
  padding-horizontal: 64px;
  border-radius: 500px;
  background-color: #EF4136;
  shadow-opacity: 0.45;
  shadow-radius: 5px;
  shadow-color: #FF6347;
  shadow-offset: { height: 5px, width: 0 };
  align-self: flex-end;
`

const StyledBrandButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
`

const BrandButton = ({ title, ...rest }) => {
  return (
    <StyledBrandButton underlayColor="#C6392F" {...rest}>
      <StyledBrandButtonText>{title}</StyledBrandButtonText>
    </StyledBrandButton>
  )
}

export default BrandButton
