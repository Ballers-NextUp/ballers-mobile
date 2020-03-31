import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import events from '../constants/sample'

import {
  ActionsBar,
  ActionsBarButton,
  LabeledInfo,
  Avatar,
} from '../components'

const Header = styled.View`
  width: 100%;
  height: 320px;
  flex-direction: column-reverse;
  background-color: rgba(0, 0, 0, 0.6);
`

const HeaderTitle = styled.Text`
  position: absolute;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  z-index: 1;
`

const Content = styled.View`
  padding: 10px 20px;
`

const HeaderImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const HeaderActions = styled.View`
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
  zIndex: 0,
}

const DetailsScreen = ({ navigation, route }) => {
  const { id } = route.params
  const [courtEvent] = useState(() => events.find((event) => event.id === id))

  return (
    <ScrollView>
      <Header>
        <HeaderTitle>{courtEvent.name}</HeaderTitle>
        <HeaderActions>
          <ActionsBar>
            <ActionsBarButton
              iconName="chevron-left"
              iconColor="#fff"
              onPress={() => navigation.goBack()}
            />
            <ActionsBarButton
              text="Editar"
              onPress={() => navigation.navigate('Edit', { courtEvent })}
            />
          </ActionsBar>
        </HeaderActions>
        {courtEvent.img_src && (
          <HeaderImage source={{ uri: courtEvent.img_src }} />
        )}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={gradientStyles}
        />
      </Header>
      <Content>
        <LabeledInfo padded alignItems="center" flexDirection="row">
          <Avatar name={courtEvent.creator} />
          <LabeledInfo label={courtEvent.creator} text="Creator" />
        </LabeledInfo>
        <LabeledInfo label="Place" text={courtEvent.address} padded />
        <LabeledInfo label="Date and time" text={courtEvent.datetime} padded />
        <LabeledInfo label="Description" text={courtEvent.description} padded />
      </Content>
    </ScrollView>
  )
}

export default DetailsScreen
