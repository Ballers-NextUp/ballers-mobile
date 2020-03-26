import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import GetStartedScreen from '../screens/GetStartedScreen'
import MainTabNavigation from '../navigation/MainTabNavigation'
// import CreateEventScreen from '../screens/CreateEventScreen'

const Stack = createStackNavigator()

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Get Started" component={GetStartedScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Main" component={MainTabNavigation} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default MainStackNavigation
