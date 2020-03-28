import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import styled from 'styled-components/native'
import { Container, FormField, ActionsBarButton } from '../components'

const StyledImageUpload = styled.View`
  position: relative;
  width: 100%;
  height: 280px;
`

const StyleImageContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #666;
`

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
