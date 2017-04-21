import { LOGIN } from '../actions/login'

const initialState = {
  isLoggedIn: false,
  user: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        isLoggedIn: true
      }
    default:
      return state
  }
}
