import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import { LabeledInfo } from '../../components'

const appIcon = require('../../assets/ballers-icon.png')

const StyledContent = styled.View`
  width: 100%;
  padding: 32px;
`

const StyleAppIcon = styled.Image`
  width: 37px;
  height: 50px;
  margin-bottom: 20px;
`

const BackButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
`

const BackButtonText = styled.Text`
  color: #ef4136;
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
  padding-vertical: 5px;
`

const AuthscreenContainer = ({ children, title, subtitle, hasBackButton }) => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StyledContent>
        <StyleAppIcon source={appIcon} />
        <LabeledInfo
          labelSize={24}
          label={title}
          text={subtitle}
          style={{ marginBottom: 32 }}
        />
        {children}
        {hasBackButton && (
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonText>Back</BackButtonText>
          </BackButton>
        )}
      </StyledContent>
    </View>
  )
}

export default AuthscreenContainer
