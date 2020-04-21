import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, DetailsScreen, EventFormScreen } from '../screens'

const Stack = createStackNavigator()

const HomeStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Edit"
      component={EventFormScreen}
      options={{ headerBackTitle: 'Back' }}
    />
  </Stack.Navigator>
)

export default HomeStackNavigation
