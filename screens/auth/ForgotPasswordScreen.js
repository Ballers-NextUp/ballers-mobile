import React from 'react'
import AuthScreenContainer from './AuthScreenContainer'
import { BorderedInput, BrandButton } from '../../components'

const ForgotPasswordScreen = () => {
  return (
    <AuthScreenContainer
      title="Forgot Password ?"
      subtitle="Fill your data to retrive your password"
      hasBackButton
    >
      <BorderedInput placeholder="E-mail" style={{ marginBottom: 20 }} />
      <BrandButton title="Submit" style={{ marginTop: 32 }} />
    </AuthScreenContainer>
  )
}

export default ForgotPasswordScreen
