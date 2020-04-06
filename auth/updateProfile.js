import firebase from 'firebase'
import getProfileImageURI from './getProfileImageURI'

const updateProfile = async (updatedUser) => {
  const { displayName, photoURL } = updatedUser
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().currentUser.updateProfile({
      displayName,
      photoURL: await getProfileImageURI(photoURL),
    })

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
