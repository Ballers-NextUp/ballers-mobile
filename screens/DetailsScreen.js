import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, View, Text } from 'react-native'

import { ActionsBar, ActionsBarButton } from '../components'

const Header = styled.View`
  width: 100%;
  height: 320;
  flex-direction: column-reverse;
  background-color: rgba(0, 0, 0, 0.6);
`

const HeaderTitle = styled.Text`
  padding: 20px;
  font-size: 20px;
  color: #fff;
`

const Content = styled.View`
  padding: 10px 20px;
`

const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  background-color: #3431CD;
  border-radius: 500;
  margin-right: 16px;
`

const Field = styled.View`
  padding-vertical: ${props => props.padded ? '10px' : 0};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
  flex-direction: ${({flexDirection})=> flexDirection ? flexDirection : 'column'};
`

const FieldLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`

const FieldText = styled.Text`
  font-size: 16px;
  color: #545151;
`

const DetailsScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <ScrollView>
      <Header>
        <HeaderTitle>Pickup Game {id}</HeaderTitle>
        <ActionsBar>
          <ActionsBarButton iconName="chevron-left" iconColor="#fff" onPress={() => navigation.goBack()} />
          <ActionsBarButton text="Editar" onPress={() => navigation.navigate('Edit')} />
        </ActionsBar>
      </Header>
      <Content>
        <Field padded alignItems="center" flexDirection="row">
          <Avatar />
          <Field>
            <FieldLabel>Manager</FieldLabel>
            <FieldText>Fulano da Silva</FieldText>
          </Field>
        </Field>
        <Field padded>
          <FieldLabel>Place</FieldLabel>
          <FieldText>Rua Cariaçu, 120</FieldText>
        </Field>
        <Field padded>
          <FieldLabel>Date and time</FieldLabel>
          <FieldText>Wed 31 Jul, 19:00-21:30</FieldText>
        </Field>
        <Field padded>
          <FieldLabel>Description</FieldLabel>
          <FieldText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</FieldText>
        </Field>
      </Content>
    </ScrollView>
  )
}

export default DetailsScreen
