import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { LabeledInfo, BorderedInput, BrandButton } from '../../components'

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
        <BrandButton title="Sign In" style={{ marginTop: 32 }} />
      </StyledContent>
    </View>
  )
}

export default SignInScreen
