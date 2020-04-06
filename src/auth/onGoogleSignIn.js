import firebase from 'firebase'

import isUserEqual from './isUserEqual'

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
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          // TODO: Find a way to handle errors here
      })
    }
  })
}

export default onGoogleSignIn
