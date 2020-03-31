import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.View`
  flex-grow: 1;
  background-color: #fff;
  align-items: stretch;
  padding: 24px;
`

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

export default Container
