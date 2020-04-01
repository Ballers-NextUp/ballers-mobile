import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import HomeStackNavigation from './HomeStackNavigation'
import NewStackNavigation from './NewStackNavigation'

const Tab = createBottomTabNavigator()

const setScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName

    if (route.name === 'Home') iconName = 'home'
    if (route.name === 'New') iconName = 'plus-circle'

    return <Feather name={iconName} size={size} color={color} />
  },
})

const tabBarOptions = {
  activeTintColor: '#EF4136',
  inactiveTintColor: '#777',
}

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={setScreenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="New" component={NewStackNavigation} />
    </Tab.Navigator>
  )
}

export default MainTabNavigation
