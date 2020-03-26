import React from 'react'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const mapStyles = {
  position: 'absolute',
  width: screenWidth,
  height: screenHeight,
  zIndex: 1
}

const CustomMapView = ({ children, ...rest }) => {
  return (
    <MapView style={mapStyles} {...rest}>
      { children }
    </MapView>
  )
}

export default CustomMapView
