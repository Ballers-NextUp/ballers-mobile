import firebase from 'firebase'

const getProfileImageURL = async () => {
  let url = {}
  const userUID = await firebase.auth().currentUser.uid

  try {
    const photoURL = await firebase
      .storage()
      .ref(`users/${userUID}/profile.jpg`)
      .getDownloadURL()

    url = photoURL
  } catch (error) {
    console.log(error.message)
  }

  return url
}

export default getProfileImageURL
