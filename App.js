import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStackNavigation from './navigations/MainStackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  )
}

export default App
