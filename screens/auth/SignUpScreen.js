import React from 'react'

import AuthScreenContainer from './AuthScreenContainer'
import { BorderedInput, BrandButton } from '../../components'

const SignUpScreen = () => {
  return (
    <AuthScreenContainer
      title="Create an Account"
      subtitle="Fill your data to create an account"
      hasBackButton
    >
      <BorderedInput placeholder="Name" style={{ marginBottom: 20 }} />
      <BorderedInput placeholder="E-mail" style={{ marginBottom: 20 }} />
      <BorderedInput placeholder="Password" style={{ marginBottom: 20 }} />
      <BorderedInput placeholder="Confirm Password" />
      <BrandButton title="Sign Up" style={{ marginTop: 32 }} />
    </AuthScreenContainer>
  )
}

export default SignUpScreen
