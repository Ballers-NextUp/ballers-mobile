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
    id: 0,
    name: 'IBB - Betânia',
    address: 'Quadra da igreja',
    coords: {
      latitude: -22.88626,
      longitude: -43.41164,
    },
  },
  {
    id: 1,
    name: 'Baskeire',
    address: 'Rua Cariaçu, 120',
    coords: {
      latitude: -22.88324,
      longitude: -43.37457,
    },
  },
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

const HomeScreen = ({ navigation }) => {
  const [userLocation, setUserLocation] = useState(null)
  const [region, setRegion] = useState({
    longitude: -43.1822319, // TODO: calculate this number
    latitude: -22.9064198, // TODO: calculate this number
    longitudeDelta: 0,
    latitudeDelta: 0,
  })

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') return

    const location = await Location.getCurrentPositionAsync()

    setUserLocation(location)
  }

  const regionFrom = (lat, lon, distance) => {
    distance /= 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
      )
    )

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    }
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  useEffect(() => {
    if (!userLocation) return

    const { latitude, longitude } = userLocation.coords
    const calculatedRegion = regionFrom(latitude, longitude, 5000)

    setRegion(calculatedRegion)
  }, [userLocation])

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchBar value="Search for a pick up game" />
      <CustomMapView region={region} showsUserLocation>
        {pickupGames.map((court) => (
          <Marker
            key={court.id}
            coordinate={court.coords}
            title={court.name}
            description={court.address}
            onPress={() => navigation.navigate('Details', { id: court.id })}
          />
        ))}
      </CustomMapView>
      <Content>
        <CardsCarousel data={pickupGames} />
      </Content>
    </Container>
  )
}

export default HomeScreen
