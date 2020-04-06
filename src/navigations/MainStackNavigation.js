import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase'
import FlashMessage, { showMessage } from 'react-native-flash-message'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import store from '../store'

import { Loading } from '../components'

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  const { state, dispatch } = useContext(store)
  const { currentUser } = state
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: 'get_current_user', payload: user })
      setLoading(false)
    })
  }, [])

  return (
    <Loading isActive={loading}>
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
      <FlashMessage position="bottom" />
    </Loading>
  )
}

export default MainStackNavigation
