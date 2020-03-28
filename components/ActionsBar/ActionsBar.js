import React from 'react'
import styled from 'styled-components/native'
import Constants from 'expo-constants';

const StyledActionsBar = styled.View`
  width: 100%;
  position: absolute;
  top: ${Constants.statusBarHeight*2};
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ActionsBar = ({ children }) => {
  return (
    <StyledActionsBar>
      { children }
    </StyledActionsBar>
  )
}

export default ActionsBar
