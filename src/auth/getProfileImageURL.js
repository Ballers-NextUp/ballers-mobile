import firebase from 'firebase'
import { urlToBlob } from '../helpers'

const getProfileImageURL = async (uri) => {
  // TODO: Fix blob bug
  const blob = await urlToBlob(uri)
  const userUID = firebase.auth().currentUser.uid

  const ref = firebase.storage().ref(`users/${userUID}/profile.jpg`)
  await ref.put(blob)
  const remoteURI = await ref.getDownloadURL()

  blob.close()

  return remoteURI
}

export default getProfileImageURL
