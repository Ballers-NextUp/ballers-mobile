import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import { Container, Field } from '../components'

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
      <ScrollView contentContainerStyle={{ backgroundColor: '#fff', flex: 1 }}>
        <Container>
          <Field label="Event Name" name="eventName" value={inputs.eventName} onChange={handleChange} />
          <Field label="Place" name="place" value={inputs.place} onChange={handleChange} />
          <Field label="Description" name="description" value={inputs.description} onChange={handleChange} multiline />
          <Field label="Starts" name="starts" value={inputs.starts} hasDatePicker />
          <Field label="Ends" name="ends" value={inputs.ends} hasDatePicker />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateEventScreen
