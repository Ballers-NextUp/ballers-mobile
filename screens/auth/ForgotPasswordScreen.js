import React, { useState } from 'react'
import { showMessage } from 'react-native-flash-message'

import AuthScreenContainer from './AuthScreenContainer'
import { BorderedInput, BrandButton } from '../../components'
import { forgotPassword } from '../../service'

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')

  const handleChange = (_, value) => {
    setEmail(value)
  }

  const handleForgotPassword = async () => {
    const response = await forgotPassword(email)
    const { title, description, type } = response

    navigation.navigate('Sign In')

    return showMessage({
      message: title,
      description,
      type,
    })
  }

  return (
    <AuthScreenContainer
      title="Forgot Password ?"
      subtitle="Fill your data to retrive your password"
      hasBackButton
    >
      <BorderedInput
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="E-mail"
        style={{ marginBottom: 20 }}
      />
      <BrandButton
        disabled={email === ''}
        title="Submit"
        style={{ marginTop: 32 }}
        onPress={handleForgotPassword}
      />
    </AuthScreenContainer>
  )
}

export default ForgotPasswordScreen
