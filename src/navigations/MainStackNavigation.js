import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import store from '../store'

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  const { state, dispatch } = useContext(store)
  const { currentUser } = state

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: 'get_current_user', payload: user })
    })
  }, [currentUser])

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
