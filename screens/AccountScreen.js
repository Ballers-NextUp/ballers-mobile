import React from 'react'
import { View } from 'react-native'
import firebase from '../auth'

import { Section, SectionItem, LabeledInfo, Avatar } from '../components'

const AccountScreen = () => {
  const handleSignOut = () => {
    const auth = firebase.auth()
    auth
      .signOut()
      .then(() => console.log('sign out with success'))
      .catch((error) => console.log(error))
  }

  return (
    <View style={{ flex: 1 }}>
      <Section>
        <SectionItem first>
          <LabeledInfo alignItems="center" flexDirection="row">
            <Avatar name="Fulano da Silva" />
            <LabeledInfo label="Fulano da Silva" text="Edit perfil" />
          </LabeledInfo>
        </SectionItem>
      </Section>
      <Section>
        <SectionItem
          first
          text="Sign Out"
          iconName="log-out"
          textColor="#f00"
          onPress={handleSignOut}
        />
      </Section>
    </View>
  )
}

export default AccountScreen
