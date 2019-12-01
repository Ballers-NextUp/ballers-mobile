import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen'
import CreateEventScreen from '../screens/CreateEventScreen'

const MainStackNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    CreateEvent: CreateEventScreen,
  },
  {
    initialRouteName: 'CreateEvent',
  }
);

export default MainStackNavigation
