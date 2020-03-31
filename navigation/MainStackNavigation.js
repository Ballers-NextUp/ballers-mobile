import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabNavigation from './MainTabNavigation'
import { DetailsScreen, CreateEventScreen } from '../screens'

const Stack = createStackNavigator()

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainTabNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Edit"
      component={CreateEventScreen}
      options={{ headerBackTitle: 'Back' }}
    />
  </Stack.Navigator>
)

export default MainStackNavigation
