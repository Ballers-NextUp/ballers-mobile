import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainTabNavigation from './navigations/MainTabNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigation />
    </NavigationContainer>
  )
}

export default App
