import React, { useContext } from 'react'
import { View } from 'react-native'
import { signOut } from '../auth'

import { Section, SectionItem, LabeledInfo, Avatar } from '../components'
import store from '../store'

const AccountScreen = ({ navigation }) => {
  const { state } = useContext(store)
  const { currentUser } = state

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <View style={{ flex: 1 }}>
      {currentUser && (
        <>
          <Section>
            <SectionItem
              first
              onPress={() => navigation.navigate('Edit Account')}
            >
              <LabeledInfo alignItems="center" flexDirection="row">
                <Avatar
                  name={currentUser.displayName || currentUser.email}
                  source={{ uri: currentUser.photoURL }}
                />
                <LabeledInfo
                  label={currentUser.displayName || currentUser.email}
                  text="Edit perfil"
                />
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
        </>
      )}
    </View>
  )
}

export default AccountScreen
