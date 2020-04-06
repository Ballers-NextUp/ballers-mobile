import firebase from 'firebase'

import config from './config'

import signUp from './signUp'
import signIn from './signIn'
import signOut from './signOut'
import forgotPassword from './forgotPassword'
import updateProfile from './updateProfile'
import signInWithGoogleAsync from './signInWithGoogleAsync'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

export {
  signUp,
  signIn,
  forgotPassword,
  signInWithGoogleAsync,
  signOut,
  updateProfile,
}
