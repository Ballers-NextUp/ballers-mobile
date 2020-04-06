import firebase from 'firebase'
import { urlToBlob } from '../helpers'
import getProfileImageURL from './getProfileImageURL'

const getProfileImageURI = async (uri) => {
  let imageURI = ''
  const blob = await urlToBlob(uri)
  const userUID = await firebase.auth().currentUser.uid

  try {
    await firebase.storage().ref(`users/${userUID}/profile.jpg`).put(blob)

    imageURI = await getProfileImageURL()
  } catch (error) {
    console.log(error.message)
  }

  return imageURI
}

export default getProfileImageURI
