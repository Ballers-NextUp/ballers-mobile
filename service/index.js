import firebase from 'firebase'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

const signUp = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.createUserWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Account created with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const signIn = async (email, password) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.signInWithEmailAndPassword(email, password)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Logged in with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

const forgotPassword = async (email) => {
  let response = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.sendPasswordResetEmail(email)

    response = {
      type: 'success',
      title: 'Success',
      description: 'Email sent with success',
    }
  } catch (error) {
    response = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return response
}

export default firebase

export { signUp, signIn, forgotPassword }
