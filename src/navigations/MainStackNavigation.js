import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase'

import MainTabNavigation from './MainTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import { Loading } from '../components'
import store from '../store'

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  const { state, dispatch } = useContext(store)
  const [loading, setLoading] = useState(false)
  const { currentUser } = state

  useEffect(() => {
    setLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: 'get_current_user', payload: user })
      setLoading(false)
    })
  }, [currentUser])

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
    </Loading>
  )
}

export default MainStackNavigation
