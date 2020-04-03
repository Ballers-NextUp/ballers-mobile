import React from 'react'

const currentUser = {
  displayName: '',
  photoURL: '',
}
const UserContext = React.createContext({ currentUser })
const { Provider } = UserContext

export default UserContext
export { Provider }
