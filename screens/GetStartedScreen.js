import React from 'react'
import { View, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  flex: 1;
`

const StyledHeader = styled.View`
  position: relative;
  flex: 3;
  background-color: #142133;
  z-index: 1;
`

const StyledContent = styled.View`
  flex: 2;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  padding-vertical: 48px;
  padding-top: 54px;
`

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  position: absolute;
  bottom: -24px;
  z-index: 1;
`

const BrandButton = styled.TouchableHighlight`
  width: 100%;
  align-items: center;
  padding-vertical: 16px;
  padding-horizontal: 64px;
  border-radius: 500px;
  background-color: #EF4136;
  shadow-opacity: 0.45;
  shadow-radius: 5px;
  shadow-color: #FF6347;
  shadow-offset: { height: 5px, width: 0 };
  align-self: flex-end;
`

const BrandButtonText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Paragraph = styled.Text`
  color: #666;
  fontsize: 16px;
`

const GetStartedScreen = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar backgroundColor="#142133" barStyle="light-content" />
      <StyledHeader>
        <StyledImage source={require('../assets/onboarding-get-started.png')} />
      </StyledHeader>
      <StyledContent>
        <View>
          <Title>Find a place to play</Title>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Paragraph>
        </View>
        <BrandButton
          underlayColor="#C6392F"
          onPress={() => navigation.navigate('Main')}
        >
          <BrandButtonText>Get Started</BrandButtonText>
        </BrandButton>
      </StyledContent>
    </StyledContainer>
  )
}

export default GetStartedScreen
