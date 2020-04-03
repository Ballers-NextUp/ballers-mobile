import React, { useContext } from 'react'
import { View } from 'react-native'
import { signOut } from '../auth'

import { Section, SectionItem, LabeledInfo, Avatar } from '../components'
import UserContext from '../context'

const AccountScreen = ({ navigation }) => {
  const { currentUser } = useContext(UserContext)

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
