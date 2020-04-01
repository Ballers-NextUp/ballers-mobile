import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { BorderedInput, BrandButton } from '../../components'
import AuthScreenContainer from './AuthScreenContainer'

const StyledFooter = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

const StyledFooterText = styled.Text`
  color: #666;
`

const StyledFooterButtonText = styled.Text`
  color: #ef4136;
  font-weight: bold;
`

const StyledForgotPasswordText = styled.Text`
  color: #666;
  margin-top: 16px;
  text-align: right;
  text-decoration: underline;
`

const SignInScreen = ({ navigation }) => {
  return (
    <AuthScreenContainer
      title="Hello There"
      subtitle="Find pick up basketball near you"
    >
      <BorderedInput
        placeholder="E-mail"
        textContentType="username"
        style={{ marginBottom: 20 }}
      />
      <BorderedInput
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
        <StyledForgotPasswordText>Forgot password ?</StyledForgotPasswordText>
      </TouchableOpacity>
      <BrandButton title="Sign In" style={{ marginTop: 32 }} />
      <StyledFooter>
        <StyledFooterText>Are you new ?&nbsp;</StyledFooterText>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <StyledFooterButtonText>Sign Up</StyledFooterButtonText>
        </TouchableOpacity>
      </StyledFooter>
    </AuthScreenContainer>
  )
}

export default SignInScreen
