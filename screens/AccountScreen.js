import React, { useContext } from 'react'
import { View } from 'react-native'
import firebase from '../auth'

import { Section, SectionItem, LabeledInfo, Avatar } from '../components'
import UserContext from '../context'

const AccountScreen = ({ navigation }) => {
  const { currentUser } = useContext(UserContext)

  const handleSignOut = () => {
    const auth = firebase.auth()
    auth
      .signOut()
      .then(() => console.log('sign out with success'))
      .catch((error) => console.log(error))
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
                  name={currentUser.displayName}
                  source={{ uri: currentUser.photoURL }}
                />
                <LabeledInfo
                  label={currentUser.displayName}
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
