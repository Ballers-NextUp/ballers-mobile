import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AccountScreen } from '../screens'

const Stack = createStackNavigator()

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
)

export default AccountStackNavigation
