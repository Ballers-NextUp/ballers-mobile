import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'

const Stack = createStackNavigator()

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={AuthStackNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="App"
      component={MainTabNavigation}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default MainStackNavigation
