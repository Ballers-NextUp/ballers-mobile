import firebase from 'firebase'

const signUp = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Account created with success',
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

export default signUp
