import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'

import { screenWidth } from '../../constants'

const Card = styled.View`
  height: 100px;
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

const renderItem = ({ item }) => {
  return (
    <View style={{ justifyContent: 'center', height: 150 }}>
      <Card>
        <View>
          <Title>{item.name}</Title>
          <Subtitle>{item.address}</Subtitle>
        </View>
        <View>
          <Text style={{ textAlign: 'right' }}>Today</Text>
          <StyledTime>19:00</StyledTime>
        </View>
      </Card>
    </View>
  )
}

const CardsCarousel = ({data}) => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 64}
    />
  )
}

export default CardsCarousel
