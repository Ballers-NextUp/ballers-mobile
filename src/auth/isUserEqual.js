import firebase from 'firebase'

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

export default isUserEqual
