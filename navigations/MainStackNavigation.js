import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'

import UserContext from '../context'

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Stack.Navigator>
      {!currentUser ? (
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="App"
          component={MainTabNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  )
}

export default MainStackNavigation
