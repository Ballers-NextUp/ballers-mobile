import React from 'react'
import { Button, View, Platform } from 'react-native'

const HeaderButtonRight = ({ onPress, title }) => {
  return Platform.OS === 'ios' ? (
    <Button onPress={onPress} title={title} />
  ) : (
    <View style={{ marginRight: 16 }}>
      <Button onPress={onPress} title={title} />
    </View>
  )
}

export default HeaderButtonRight
