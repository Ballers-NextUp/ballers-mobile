import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
} from '../screens/auth'

const Stack = createStackNavigator()

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthStackNavigation
