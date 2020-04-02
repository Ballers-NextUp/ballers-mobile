import React from 'react'
import { View, Button } from 'react-native'
import firebase from '../auth'

const AccountScreen = () => {
  const signOut = () => {
    const auth = firebase.auth()
    auth
      .signOut()
      .then(() => console.log('sign out with success'))
      .catch((error) => console.log(error))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  )
}

export default AccountScreen
