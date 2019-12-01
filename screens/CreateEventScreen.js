import React, { useState } from 'react';
import { Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-navigation-stack';
import { Container, Field } from '../components';

const CreateEventScreen = () => {
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

  return (
    <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 20} // adjust the value here if you need more padding
        style= {{ flex: 1 }}
        behavior= "padding">
      <ScrollView>
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

CreateEventScreen.navigationOptions = {
  title: 'Create Event',
  headerRight: () => (
    <Button
      title="OK"
      onPress={ () => {}}
    />
  )
}

export default CreateEventScreen
