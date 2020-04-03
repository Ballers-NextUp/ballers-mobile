import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import UserContext from '../context'
import {
  SectionItem,
  Avatar,
  LabeledInfo,
  Container,
  FormField,
} from '../components'

const AccountFormScreen = () => {
  const { currentUser } = useContext(UserContext)
  const [user, setUser] = useState({
    displayName: currentUser.displayName,
    photoUrl: currentUser.photoURL,
    email: currentUser.email,
  })

  const handleAvatar = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (status !== 'granted') return

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    })

    setUser({ ...user, photoURL: result.uri })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SectionItem hideRightIcon onPress={handleAvatar}>
        <LabeledInfo alignItems="center" flexDirection="row">
          <Avatar
            name={user.displayName || user.email}
            source={{ uri: user.photoURL }}
          />
          <LabeledInfo text="Change perfil photo" />
        </LabeledInfo>
      </SectionItem>
      <Container>
        <FormField
          label="Name"
          name="Name"
          placeholder="Insert your name"
          value={user.displayName}
        />
      </Container>
    </View>
  )
}

export default AccountFormScreen
