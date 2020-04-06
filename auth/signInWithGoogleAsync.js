import * as Google from 'expo-google-app-auth'

import getEnvVars from '../environment'
import onGoogleSignIn from './onGoogleSignIn'

const { androidClientId, iosClientId } = getEnvVars()

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId,
      iosClientId,
      scopes: ['profile', 'email'],
    })

    if (result.type === 'success') {
      onGoogleSignIn(result)
      return result.accessToken
    }
    return { cancelled: true }
  } catch (e) {
    return { error: true }
  }
}

export default signInWithGoogleAsync
