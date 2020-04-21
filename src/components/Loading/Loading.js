import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, View } from 'react-native'

const StyledLoading = styled.View`
  position: absolute;
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: center;
  background-color: #fff;
  z-index: 3;
`

const StyledLoadingText = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  text-align: center;
`

const Loading = ({ isActive, children }) => {
  return (
    <StyledLoading>
      {isActive ? (
        <View>
          <ActivityIndicator size="large" />
          <StyledLoadingText>Loading</StyledLoadingText>
        </View>
      ) : (
        children
      )}
    </StyledLoading>
  )
}

export default Loading
