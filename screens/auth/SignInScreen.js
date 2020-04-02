import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { showMessage } from 'react-native-flash-message'

import { signIn } from '../../service'

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
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSignIn = async () => {
    const { email, password } = user
    const message = await signIn(email, password)

    if (message.type === 'error') {
      showMessage({
        message: 'An error ocurred',
        description: message.description,
        type: message.type,
      })
    }
  }

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <AuthScreenContainer
      title="Hello There"
      subtitle="Find pick up basketball near you"
    >
      <BorderedInput
        value={user.email}
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
        textContentType="username"
        keyboardType="email-address"
        style={{ marginBottom: 20 }}
      />
      <BorderedInput
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
        <StyledForgotPasswordText>Forgot password ?</StyledForgotPasswordText>
      </TouchableOpacity>
      <BrandButton
        disabled={user.email === '' && user.password === ''}
        title="Sign In"
        style={{ marginTop: 32 }}
        onPress={handleSignIn}
      />
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
