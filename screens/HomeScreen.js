import React from 'react'
import { View, Text, Dimensions, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'

import { SearchBar, CardsCarousel, CustomMapView } from '../components'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const pickupGames = [
  {
    name: 'Baskeire',
    address: 'Rua Cariaçu, 120',
  },
  {
    name: 'IBB - Betânia',
    address: 'Quadra da igreja',
  }
]

const Container = styled.View`
  width: ${screenWidth};
  height: ${screenHeight};
  background-color: #eee;
  flex-direction: column-reverse;
`

const Content = styled.View`
  position: relative;
  padding: 32px 0;
  margin-bottom: 25px;
  background-color: #fff;
  z-index: 3;
`

const gradientStyles = {
  position: 'absolute',
  width: screenWidth,
  height: 80,
  top: -80,
  left: 0,
  zIndex: 2
}

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchBar value="Search for a pick up game" />
      <CustomMapView />
      <Content>
        <CardsCarousel data={pickupGames} />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.4)', '#fff']}
          style={gradientStyles}
        />
      </Content>
    </Container>
  )
}

export default HomeScreen
