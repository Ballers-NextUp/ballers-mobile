import React from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen id: {id}</Text>
      <Button onPress={()=> navigation.goBack()} title="Go Back" />
    </View>
  )
}

export default DetailsScreen
