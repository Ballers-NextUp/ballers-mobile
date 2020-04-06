import firebase from 'firebase'

const forgotPassword = async (email) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await firebase.auth().sendPasswordResetEmail(email)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Email sent with success',
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

export default forgotPassword
