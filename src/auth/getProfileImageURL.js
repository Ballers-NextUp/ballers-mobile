import firebase from 'firebase'
import { urlToBlob } from '../helpers'

const getProfileImageURL = async (uri) => {
  // TODO: Understand why it seems to fail sometimes
  const urlRegex = /(^http[s]?:\/{2})|(^www)|(^\/{1,2})/gim

  if (urlRegex.test(uri)) return uri

  const blob = await urlToBlob(uri)
  const userUID = firebase.auth().currentUser.uid

  const ref = firebase.storage().ref(`users/${userUID}/profile.jpg`)
  await ref.put(blob)
  const remoteURI = await ref.getDownloadURL()

  blob.close()

  return remoteURI
}

export default getProfileImageURL
