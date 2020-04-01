import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

import { LabeledInfo, BorderedInput } from '../../components'

const appIcon = require('../../assets/ballers-icon.png')

const StyledContent = styled.View`
  width: 100%;
  padding: 32px;
`

const StyleAppIcon = styled.Image`
  width: 37px;
  height: 50px;
  margin-bottom: 32px;
`

const BrandButton = styled.TouchableHighlight`
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

const BrandButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
`

const SignInScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StyledContent>
        <StyleAppIcon source={appIcon} />
        <LabeledInfo
          labelSize={24}
          label="Hello There"
          text="Find pick up basketballs near you"
          style={{ marginBottom: 32 }}
        />
        <BorderedInput placeholder="E-mail" style={{ marginBottom: 20 }} />
        <BorderedInput placeholder="Password" />
        <BrandButton underlayColor="#C6392F" style={{ marginTop: 32 }}>
          <BrandButtonText>Sign In</BrandButtonText>
        </BrandButton>
      </StyledContent>
    </View>
  )
}

export default SignInScreen
