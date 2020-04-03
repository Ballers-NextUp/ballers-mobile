import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'

import firebase from './auth'
import MainStackNavigation from './navigations/MainStackNavigation'
import { Provider } from './context'

const App = () => {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setCurrentUser(user))
  })

  return (
    <Provider value={{ currentUser }}>
      <NavigationContainer>
        <MainStackNavigation />
        <FlashMessage position="bottom" />
      </NavigationContainer>
    </Provider>
  )
}

export default App
