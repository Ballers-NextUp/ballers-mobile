import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { screenWidth, screenHeight } from '../../constants'

const mapStyles = {
  position: 'absolute',
  width: screenWidth,
  height: screenHeight,
  zIndex: 1,
}

const CustomMapView = ({ children, ...rest }) => {
  return (
    <MapView provider={PROVIDER_GOOGLE} style={mapStyles} {...rest}>
      {children}
    </MapView>
  )
}

export default CustomMapView
