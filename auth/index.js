import firebase from 'firebase'
import * as Google from 'expo-google-app-auth'

import getEnvVars from '../environment'
import config from './config'

const { androidClientId, iosClientId } = getEnvVars()

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

const signUp = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.createUserWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Account created with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const signIn = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.signInWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Logged in with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const forgotPassword = async (email) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.sendPasswordResetEmail(email)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Email sent with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const signOut = async (email) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.signOut()

    response = {
      type: 'success',
      title: 'Success',
      description: 'User signed out with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const { providerData } = firebaseUser
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true
      }
    }
  }
  return false
}

const onGoogleSignIn = (googleUser) => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe()
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      )
      // Sign in with credential from the Google user.
      auth.signInWithCredential(credential).catch((error) => {
        // TODO: Find a way to handle errors here

        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        // ...
      })
    }
  })
}

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

export default firebase

export { signUp, signIn, forgotPassword, signInWithGoogleAsync, signOut }
