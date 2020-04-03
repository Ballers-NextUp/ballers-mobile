import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'

import MainStackNavigation from './navigations/MainStackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  )
}

export default App
