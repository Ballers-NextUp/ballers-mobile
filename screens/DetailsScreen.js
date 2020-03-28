import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import { ActionsBar, ActionsBarButton, LabeledInfo, Avatar } from '../components'

const Header = styled.View`
  width: 100%;
  height: 320px;
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
        <LabeledInfo padded alignItems="center" flexDirection="row">
          <Avatar name="Fulano da Silva" />
          <LabeledInfo label="Fulano da Silva" text="Manager" />
        </LabeledInfo>
        <LabeledInfo label="Place" text="Rua Cariaçu, 120" padded />
        <LabeledInfo label="Date and time" text="Wed 31 Jul, 19:00-21:30" padded />
        <LabeledInfo label="Description" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." padded />
      </Content>
    </ScrollView>
  )
}

export default DetailsScreen
