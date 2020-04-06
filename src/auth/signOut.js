import firebase from 'firebase'

const signOut = async () => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().signOut()

    response = {
      type: 'success',
      title: 'Success',
      description: 'User signed out with success',
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

export default signOut
