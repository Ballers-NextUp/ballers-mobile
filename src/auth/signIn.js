import firebase from 'firebase'

const signIn = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Logged in with success',
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

export default signIn
