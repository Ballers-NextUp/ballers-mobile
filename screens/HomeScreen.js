import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { LinearGradient } from 'expo-linear-gradient'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Container = styled.View`
  width: ${screenWidth};
  height: ${screenHeight};
  background-color: #eee;
  flex-direction: column-reverse;
`

const Content = styled.View`
  position: relative;
  padding: 32px;
  margin-bottom: 50px;
  background-color: #fff;
  z-index: 3;
`

const Card = styled.View`
  padding: 32px 24px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0 8px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  elevation: 24px;
`

const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`

const Subtitle = styled.Text`
  color: #888;
  font-size: 14px;
`

const StyledTime = styled.Text`
  color: #EF4136;
  font-weight: bold;
`

const gradientStyles = {
  position: 'absolute',
  width: screenWidth,
  height: 80,
  top: -80,
  left: 0,
  zIndex: 2
}

const mapStyles = {
  position: 'absolute',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  zIndex: 1
}

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <MapView style={mapStyles} />
      <Content>
        <Card>
          <View>
            <Title>Baskeire</Title>
            <Subtitle>Rua Cariaçu, 120</Subtitle>
          </View>
          <View>
            <Text style={{ textAlign: 'right' }}>Today</Text>
            <StyledTime>19:00</StyledTime>
          </View>
        </Card>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.4)', '#fff']}
          style={gradientStyles}
        />
      </Content>
    </Container>
  )
}

export default HomeScreen
