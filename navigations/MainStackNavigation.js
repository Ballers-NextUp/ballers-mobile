import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import firebase from '../auth'

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setCurrentUser(user))
  })

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
