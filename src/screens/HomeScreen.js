import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import { Marker } from 'react-native-maps'
import { SearchBar, CardsCarousel, CustomMapView } from '../components'
import { screenWidth, screenHeight } from '../constants'

import events from '../constants/sample'

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
  const [region, setRegion] = useState(null)

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
      <SearchBar placeholder="Search for a pick up game" />
      {region && (
        <CustomMapView region={region} showsUserLocation>
          {events.map((event) => (
            <Marker
              key={event.id}
              coordinate={event.coords}
              title={event.name}
              description={event.address}
              onPress={() => navigation.navigate('Details', { id: event.id })}
            />
          ))}
        </CustomMapView>
      )}
      <Content>
        <CardsCarousel data={events} />
      </Content>
    </Container>
  )
}

export default HomeScreen
