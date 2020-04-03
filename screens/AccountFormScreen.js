import React, { useContext, useState, useLayoutEffect } from 'react'
import { View, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { showMessage } from 'react-native-flash-message'
import { updateProfile } from '../auth'
import store from '../store'
import {
  SectionItem,
  Avatar,
  LabeledInfo,
  Container,
  FormField,
} from '../components'

const AccountFormScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(store)
  const { currentUser } = state

  const [user, setUser] = useState({
    displayName: currentUser.displayName,
    photoUrl: currentUser.photoURL,
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

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  const handleUpdateProfile = async () => {
    const response = await updateProfile(user)
    const { title, description, type } = response

    if (response.type === 'success') {
      dispatch({ type: 'update_profile', payload: user })
      navigation.navigate('Account')
    }

    return showMessage({
      message: title,
      description,
      type,
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleUpdateProfile} title="Save" />,
    })
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SectionItem hideRightIcon onPress={handleAvatar}>
        <LabeledInfo alignItems="center" flexDirection="row">
          <Avatar
            name={currentUser.displayName || currentUser.email}
            source={{ uri: user.photoURL }}
          />
          <LabeledInfo text="Change perfil photo" />
        </LabeledInfo>
      </SectionItem>
      <Container>
        <FormField
          label="Name"
          name="displayName"
          placeholder="Insert your name"
          value={user.displayName}
          onChange={handleChange}
        />
      </Container>
    </View>
  )
}

export default AccountFormScreen
