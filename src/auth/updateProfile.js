import firebase from 'firebase'
import getProfileImageURL from './getProfileImageURL'

const updateProfile = async (user) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    const { displayName, photoURL } = user
    const userToUpdate = !photoURL
      ? { displayName }
      : { displayName, photoURL: await getProfileImageURL(photoURL) }

    await firebase.auth().currentUser.updateProfile(userToUpdate)

    response = {
      type: 'success',
      title: 'Success',
      description: 'User info updated with success',
    }
  } catch (error) {
    response = {
      type: 'danger',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

export default updateProfile
