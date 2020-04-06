import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AccountScreen, AccountFormScreen } from '../screens'

const Stack = createStackNavigator()

const AccountStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Edit Account" component={AccountFormScreen} />
  </Stack.Navigator>
)

export default AccountStackNavigation
