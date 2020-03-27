import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants';

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

const HeaderActions = styled.View`
  width: 100%;
  position: absolute;
  top: ${Constants.statusBarHeight*2};
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HeaderButton = styled.TouchableOpacity`
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  ${({ isIcon }) => isIcon
    ?`
      width: 36px;
      height: 36px;
      padding: 4px;
      border-radius: 500px;
    `
    : ''
  }
`

const HeaderButtonText = styled.Text`
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
        <HeaderActions>
          <HeaderButton isIcon onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={20} color="#fff" />
          </HeaderButton>
          <HeaderButton onPress={() => navigation.navigate('Edit')}>
            <HeaderButtonText>Editar</HeaderButtonText>
          </HeaderButton>
        </HeaderActions>
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
