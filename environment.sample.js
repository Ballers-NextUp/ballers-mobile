import Constants from 'expo-constants'

const ENV = {
  dev: {
    firebaseApiKey: '[enter firebase api key here]',
    firebaseAppId: '[enter firebase app id here]',
    androidClientId: '[enter android client id here]',
    iosClientId: '[enter ios client id here]',
  },
  staging: {
    firebaseApiKey: '[enter firebase api key here]',
    firebaseAppId: '[enter firebase app id here]',
    androidClientId: '[enter android client id here]',
    iosClientId: '[enter ios client id here]',
  },
  prod: {
    firebaseApiKey: '[enter firebase api key here]',
    firebaseAppId: '[enter firebase app id here]',
    androidClientId: '[enter android client id here]',
    iosClientId: '[enter ios client id here]',
  },
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    return ENV.dev
  }

  if (env === 'staging') {
    return ENV.staging
  }
  if (env === 'prod') {
    return ENV.prod
  }
}

export default getEnvVars
