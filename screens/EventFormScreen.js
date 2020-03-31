import React, { useState, useLayoutEffect, useEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Container, FormField, ActionsBarButton } from '../components'

const StyledImageUpload = styled.View`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #666;
`

const StyleImageContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 3;
`

const StyledImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const gradientStyles = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  zIndex: 2,
}

const EventFormScreen = ({ navigation, route }) => {
  const [inputs, setInputs] = useState({})

  useEffect(() => {
    if (!route.params || !route.params.courtEvent) return

    const { courtEvent } = route.params

    setInputs({
      eventName: courtEvent.name,
      place: courtEvent.address,
      description: courtEvent.description,
      eventImage: courtEvent.img_src,
      starts: new Date(),
      ends: new Date(),
    })
  }, [])

  const handleChange = (name, text) => {
    setInputs({
      ...inputs,
      [name]: text,
    })
  }

  const chooseImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (status !== 'granted') return

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    })

    setInputs({ ...inputs, eventImage: result.uri })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => alert('Saved')} title="Save" />,
    })
  })

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}>
        <StyledImageUpload>
          <StyleImageContainer>
            <ActionsBarButton
              iconName="camera"
              iconColor="#fff"
              onPress={chooseImage}
            />
          </StyleImageContainer>
          {inputs.eventImage && (
            <StyledImage source={{ uri: inputs.eventImage }} />
          )}
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={gradientStyles}
          />
        </StyledImageUpload>
        <Container>
          <FormField
            label="Event Name"
            name="eventName"
            value={inputs.eventName}
            onChange={handleChange}
          />
          <FormField
            label="Place"
            name="place"
            value={inputs.place}
            onChange={handleChange}
          />
          <FormField
            label="Description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            multiline
          />
          <FormField
            label="Starts"
            name="starts"
            value={inputs.starts}
            hasDatePicker
          />
          <FormField
            label="Ends"
            name="ends"
            value={inputs.ends}
            hasDatePicker
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EventFormScreen
