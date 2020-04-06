import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStackNavigation from './src/navigations/MainStackNavigation'
import { StateProvider } from './src/store'

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </StateProvider>
  )
}

export default App
