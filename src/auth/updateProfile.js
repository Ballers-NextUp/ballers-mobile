import firebase from 'firebase'
import getProfileImageURL from './getProfileImageURL'

const updateProfile = async (updatedUser) => {
  const { displayName, photoURL } = updatedUser
  const urlRegex = /(^http[s]?:\/{2})|(^www)|(^\/{1,2})/igm
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().currentUser.updateProfile({
      displayName,
      photoURL: urlRegex.test(photoURL)
        ? photoURL
        : await getProfileImageURL(photoURL),
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
