import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { ActionsBar, ActionsBarButton, LabeledInfo, Avatar } from '../components'

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
  zIndex: 0
}

const DetailsScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <ScrollView>
      <Header>
        <HeaderTitle>Pickup Game {id}</HeaderTitle>
        <HeaderActions>
          <ActionsBar>
            <ActionsBarButton iconName="chevron-left" iconColor="#fff" onPress={() => navigation.goBack()} />
            <ActionsBarButton text="Editar" onPress={() => navigation.navigate('Edit')} />
          </ActionsBar>
        </HeaderActions>
        <HeaderImage source={{ uri: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/79824427_2514272002176491_5021983144702640128_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=fS-81im1NlgAX_Hbg9u&_nc_ht=scontent-gig2-1.xx&oh=d3bfc1ac3c033011fb91244ab66f64a8&oe=5EA44FF9' }} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)' ]}
          style={gradientStyles}
        />
      </Header>
      <Content>
        <LabeledInfo padded alignItems="center" flexDirection="row">
          <Avatar source={{ uri: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e0/e078b72177f470a38913670cde5abe40b28ba686.jpg' }} name="Fulano da Silva" />
          <LabeledInfo label="Fulano da Silva" text="Creator" />
        </LabeledInfo>
        <LabeledInfo label="Place" text="Rua Cariaçu, 120" padded />
        <LabeledInfo label="Date and time" text="Wed 31 Jul, 19:00-21:30" padded />
        <LabeledInfo label="Description" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." padded />
      </Content>
    </ScrollView>
  )
}

export default DetailsScreen
