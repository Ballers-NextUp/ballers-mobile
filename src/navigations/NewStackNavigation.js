import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { EventFormScreen } from '../screens'

const Stack = createStackNavigator()

const NewStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="New" component={EventFormScreen} />
  </Stack.Navigator>
)

export default NewStackNavigation
