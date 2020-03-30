import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Marker } from 'react-native-maps'

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
  const [location, setLocation] = useState(null)

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') return

    const locationData = await Location.getCurrentPositionAsync()

    setLocation(locationData)
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchBar value="Search for a pick up game" />
      <CustomMapView>
        {
          location && <Marker coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />
        }
      </CustomMapView>
      <Content>
        <CardsCarousel data={pickupGames} />
      </Content>
    </Container>
  )
}

export default HomeScreen
