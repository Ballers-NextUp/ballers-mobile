import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

import { SearchBar, CardsCarousel, CustomMapView } from '../components'
import { screenWidth, screenHeight } from '../constants'

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
  z-index: 3;
`

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchBar value="Search for a pick up game" />
      <CustomMapView />
      <Content>
        <CardsCarousel data={pickupGames} />
      </Content>
    </Container>
  )
}

export default HomeScreen
