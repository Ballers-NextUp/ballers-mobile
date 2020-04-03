import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'

import MainStackNavigation from './navigations/MainStackNavigation'
import { StateProvider } from './store'

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <MainStackNavigation />
        <FlashMessage position="bottom" />
      </NavigationContainer>
    </StateProvider>
  )
}

export default App
