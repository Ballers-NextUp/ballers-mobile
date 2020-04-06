import React from 'react'
import styled from 'styled-components/native'

const StyledSection = styled.View`
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #d8d8d8;
  border-bottom-width: 1px;
  border-bottom-color: #d8d8d8;
  margin-bottom: 20px;
`

const Section = ({ children, ...rest }) => {
  return <StyledSection {...rest}>{children}</StyledSection>
}

export default Section
