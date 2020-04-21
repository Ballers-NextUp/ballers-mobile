const initialState = {
  currentUser: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_current_user':
      return { ...state, currentUser: action.payload }
    case 'update_profile':
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      }
    default:
      throw new Error()
  }
}

export { reducer, initialState }
