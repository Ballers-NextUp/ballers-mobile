import firebase from 'firebase'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

const signUp = async (email, password) => {
  let message = {
    type: '',
    title: '',
    description: '',
  }

  try {
    await auth.createUserWithEmailAndPassword(email, password)

    message = {
      type: 'success',
      title: 'Success',
      description: 'Account created with success',
    }
  } catch (error) {
    message = {
      type: 'error',
      title: 'An error ocurred',
      description: error.message,
    }
  }

  return message
}

const signIn = async (email, password) => {
  let message = {
    type: '',
    description: '',
  }

  try {
    await auth.signInWithEmailAndPassword(email, password)

    message = {
      type: 'success',
      description: 'Logged in with success',
    }
  } catch (error) {
    message = {
      type: 'error',
      description: error.message,
    }
  }

  return message
}

export default firebase

export { signUp, signIn }
