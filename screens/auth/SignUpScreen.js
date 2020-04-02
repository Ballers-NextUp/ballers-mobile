import React, { useState } from 'react'
import { showMessage } from 'react-native-flash-message'

import AuthScreenContainer from './AuthScreenContainer'
import { BorderedInput, BrandButton } from '../../components'

import { signUp } from '../../service'

const SignUpScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSignUp = async () => {
    const { email, password, confirmPassword } = user

    if (password === confirmPassword) {
      const response = await signUp(email, password)

      if (response.type !== 'error') return false

      const { title, description, type } = response

      return showMessage({
        message: title,
        description,
        type,
      })
    }

    return showMessage({
      message: 'Password mismatch',
      description: 'Passwords needs to match',
    })
  }

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <AuthScreenContainer
      title="Create an Account"
      subtitle="Fill your data to create an account"
      hasBackButton
    >
      <BorderedInput
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="E-mail"
        style={{ marginBottom: 20 }}
      />
      <BorderedInput
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        textContentType="password"
        style={{ marginBottom: 20 }}
        secureTextEntry
      />
      <BorderedInput
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        textContentType="password"
        secureTextEntry
      />
      <BrandButton
        disabled={
          user.email === '' &&
          user.password === '' &&
          user.confirmPassword === ''
        }
        title="Sign Up"
        style={{ marginTop: 32 }}
        onPress={handleSignUp}
      />
    </AuthScreenContainer>
  )
}

export default SignUpScreen
