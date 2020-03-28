import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, Button, Image } from 'react-native'
import styled from 'styled-components/native'
import { Container, FormField, ActionsBarButton } from '../components'
import { LinearGradient } from 'expo-linear-gradient'

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
  zIndex: 2
}

const CreateEventScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    eventName: "Baskeire",
    place: "Rua Cariaçu, 120",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    starts: new Date(),
    ends: new Date()
  })

  const handleChange = (name, text) => {
    setInputs({
      ...inputs,
      [name]: text
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => alert('Saved')} title="Save" />
      ),
    })
  })

  return (
    <KeyboardAvoidingView style= {{ flex: 1 }} behavior= "padding">
      <ScrollView contentContainerStyle={{ backgroundColor: '#fff'}}>
        <StyledImageUpload>
          <StyleImageContainer>
            <ActionsBarButton iconName="camera" iconColor="#fff"></ActionsBarButton>
          </StyleImageContainer>
          <StyledImage source={{ uri: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/79824427_2514272002176491_5021983144702640128_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=fS-81im1NlgAX_Hbg9u&_nc_ht=scontent-gig2-1.xx&oh=d3bfc1ac3c033011fb91244ab66f64a8&oe=5EA44FF9' }} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)' ]}
            style={gradientStyles}
          />
        </StyledImageUpload>
        <Container>
          <FormField label="Event Name" name="eventName" value={inputs.eventName} onChange={handleChange} />
          <FormField label="Place" name="place" value={inputs.place} onChange={handleChange} />
          <FormField label="Description" name="description" value={inputs.description} onChange={handleChange} multiline />
          <FormField label="Starts" name="starts" value={inputs.starts} hasDatePicker />
          <FormField label="Ends" name="ends" value={inputs.ends} hasDatePicker />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateEventScreen
