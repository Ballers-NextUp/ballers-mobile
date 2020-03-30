import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

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
  const [userLocation, setUserLocation] = useState(null)
  const [region, setRegion] = useState({
    longitude: 0,
    latitude: 0,
    longitudeDelta: 0,
    latitudeDelta: 0
  })

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') return

    const location = await Location.getCurrentPositionAsync()

    setUserLocation(location)
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  useEffect(() => {
    if (!userLocation) return

    const { latitude, longitude } = userLocation.coords

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922, // TODO: calculate this number
      longitudeDelta: 0.0421, // TODO: calculate this number
    })
  }, [])

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchBar value="Search for a pick up game" />
      <CustomMapView region={region} showsUserLocation={true} />
      <Content>
        <CardsCarousel data={pickupGames} />
      </Content>
    </Container>
  )
}

export default HomeScreen
