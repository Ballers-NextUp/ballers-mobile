import getEnvVars from '../environment'

const { firebaseApiKey, firebaseAppId } = getEnvVars()

export default {
  apiKey: firebaseApiKey,
  authDomain: 'ballers-mobile.firebaseapp.com',
  databaseURL: 'https://ballers-mobile.firebaseio.com',
  projectId: 'ballers-mobile',
  storageBucket: 'ballers-mobile.appspot.com',
  messagingSenderId: '147359040605',
  appId: firebaseAppId,
  measurementId: 'G-3MWNLXHG8S',
}
